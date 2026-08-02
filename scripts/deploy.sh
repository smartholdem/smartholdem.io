#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# SmartHoldem — production SSG deploy
# ─────────────────────────────────────────────────────────────────────────────
# 1. Download news images + build baked news snapshot (fetch-news-images.mjs)
# 2. Generate 1200×630 OG banners per article (generate-news-og.mjs)
# 3. yarn build:all               → .output/public/ (Nuxt) + docs-dist merged
# 4. rsync to $PUB_DIR            → overwrites old, deletes removed
#
# Safe to run from cron — flock prevents overlapping runs.
# ─────────────────────────────────────────────────────────────────────────────

set -euo pipefail

# ── Ensure node / yarn are on PATH when invoked from cron ────────────────────
# cron uses a stripped-down PATH ("/usr/bin:/bin") that doesn't include
# nvm-installed binaries. Restore interactive shell env via common locations.
export HOME="${HOME:-/home/asic}"
export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
if [ -s "$NVM_DIR/nvm.sh" ]; then
  # shellcheck disable=SC1091
  . "$NVM_DIR/nvm.sh" --no-use
  nvm use default >/dev/null 2>&1 || nvm use --lts >/dev/null 2>&1 || true
fi
PATH="$HOME/.local/bin:/usr/local/bin:/usr/bin:/bin:$PATH"
for d in "$HOME"/.nvm/versions/node/*/bin; do
  [ -d "$d" ] && PATH="$d:$PATH"
done
[ -d "$HOME/.yarn/bin" ] && PATH="$HOME/.yarn/bin:$PATH"
[ -d "$HOME/.config/yarn/global/node_modules/.bin" ] && PATH="$HOME/.config/yarn/global/node_modules/.bin:$PATH"
export PATH

if ! command -v yarn >/dev/null 2>&1; then
  YARN_BIN="npx --yes yarn"
else
  YARN_BIN="yarn"
fi

SRC_DIR="${SRC_DIR:-/home/asic/smartholdem-site}"
PUB_DIR="${PUB_DIR:-/var/www/smartholdem.io}"
BUILD_DIR="$SRC_DIR/.output/public"
LOG_DIR="${LOG_DIR:-/home/asic/logs}"
LOG_FILE="$LOG_DIR/sth-deploy.log"
LOCK_FILE="/tmp/sth-deploy.lock"

mkdir -p "$LOG_DIR"
exec > >(tee -a "$LOG_FILE") 2>&1
log() { echo "[$(date '+%F %T')] $*"; }

# ── Single-instance guard ─────────────────────────────────────────────────────
exec 9>"$LOCK_FILE"
flock -n 9 || { log "ABORT — another deploy is already running"; exit 0; }

log "════════ SmartHoldem SSG deploy ════════"
log "  node=$(node -v 2>/dev/null || echo missing)  yarn=$($YARN_BIN -v 2>/dev/null || echo missing)"
cd "$SRC_DIR"

# ── Make sure node_modules exists ────────────────────────────────────────────
if [ ! -d node_modules ]; then
  log "▶ $YARN_BIN install --frozen-lockfile  (first run)"
  $YARN_BIN install --frozen-lockfile --silent
fi

# ── 1. Fetch news images + build baked snapshot ──────────────────────────────
log "▶ $YARN_BIN news:images"
$YARN_BIN --silent news:images || log "  (warning: news:images step returned non-zero)"

# ── 2. Generate OG banners per article ───────────────────────────────────────
log "▶ $YARN_BIN news:og"
$YARN_BIN --silent news:og || log "  (warning: news:og step returned non-zero)"

# ── 3. Build static site (Nuxt + VitePress merged) ───────────────────────────
log "▶ $YARN_BIN build:all"
$YARN_BIN --silent build:all

[ -d "$BUILD_DIR" ] || { log "✖ build directory missing: $BUILD_DIR"; exit 1; }
log "  built $(find "$BUILD_DIR" -name 'index.html' | wc -l) index.html files"

# ── 4. Copy to webroot with overwrite + cleanup ──────────────────────────────
log "▶ rsync → $PUB_DIR"
sudo rsync -a --delete \
  --exclude '.well-known' \
  "$BUILD_DIR/" "$PUB_DIR/"

sudo chown -R www-data:www-data "$PUB_DIR" 2>/dev/null || true

log "✓ deploy finished OK"
