#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# SmartHoldem — news watcher (cron-driven)
# ─────────────────────────────────────────────────────────────────────────────
# Polls the Strapi news API every N minutes (via cron) and triggers deploy.sh
# ONLY when a brand-new article appears.
#
# Logic:
#   1. curl latest article from https://news.smartholdem.io/api/sthnews?...
#   2. extract its id
#   3. compare against value stored in .last-news-id
#   4. if it differs → overwrite it + run deploy.sh
#
# First-run behaviour: writes the current id WITHOUT triggering deploy.sh,
# so freshly-installed servers don't run an unnecessary build. Run
# `scripts/deploy.sh` manually once after install to bake the current state.
#
# Example crontab entry (every 5 minutes):
#   */5 * * * * /home/asic/smartholdem-site/scripts/news-watch.sh
# ─────────────────────────────────────────────────────────────────────────────

set -euo pipefail

NEWS_API="https://news.smartholdem.io/api/sthnews?pagination[pageSize]=1&sort=date:desc"
SRC_DIR="${SRC_DIR:-/home/asic/smartholdem-site}"
ID_FILE="$SRC_DIR/.last-news-id"
LOG_DIR="${LOG_DIR:-/home/asic/logs}"
LOG_FILE="$LOG_DIR/sth-news-watch.log"
LOCK_FILE="/tmp/sth-news-watch.lock"
DEPLOY="$SRC_DIR/scripts/deploy.sh"

mkdir -p "$LOG_DIR"
exec >> "$LOG_FILE" 2>&1
log() { echo "[$(date '+%F %T')] $*"; }

# ── Single-instance guard ─────────────────────────────────────────────────────
exec 9>"$LOCK_FILE"
flock -n 9 || { log "ABORT — another watcher is already running"; exit 0; }

# ── 1. Fetch latest article (10s timeout, retry once) ────────────────────────
JSON=$(curl --silent --show-error --max-time 10 --retry 1 "$NEWS_API" 2>&1) || {
  log "API unreachable — skip ($JSON)"; exit 0;
}

# ── 2. Parse latest id (Strapi v4 → data[0].id) ──────────────────────────────
LATEST_ID=$(python3 -c '
import json, sys
try:
    d = json.loads(sys.stdin.read())
    data = d.get("data") if isinstance(d, dict) else d
    if isinstance(data, list) and data and isinstance(data[0], dict):
        print(data[0].get("id", ""))
except Exception:
    pass
' <<< "$JSON")

if [[ -z "${LATEST_ID:-}" || ! "$LATEST_ID" =~ ^[0-9]+$ ]]; then
  log "could not parse latest id from API response — skip"
  exit 0
fi

# ── 3. Compare against stored id ─────────────────────────────────────────────
LAST_ID=$(cat "$ID_FILE" 2>/dev/null || echo "")

if [[ -z "$LAST_ID" ]]; then
  echo "$LATEST_ID" > "$ID_FILE"
  log "bootstrap — recorded latest id=$LATEST_ID (no deploy)"
  exit 0
fi

if [[ "$LAST_ID" == "$LATEST_ID" ]]; then
  log "no new article (still id=$LATEST_ID)"
  exit 0
fi

# ── 4. New article → record + trigger deploy ─────────────────────────────────
log "new article detected: $LAST_ID → $LATEST_ID — running deploy.sh"
echo "$LATEST_ID" > "$ID_FILE"

if [[ -x "$DEPLOY" ]]; then
  "$DEPLOY"
  log "deploy.sh finished for id=$LATEST_ID"
else
  log "✖ deploy.sh missing or not executable at $DEPLOY"
  exit 1
fi
