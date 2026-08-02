---
title: Tracker API & Seeder Economics
description: SmartNet Tracker — the public coordination layer for dApp discovery, seeder heartbeats, and uptime-based reward multipliers.
---

# Tracker API & Seeder Economics

The **SmartNet Tracker** is the public coordination layer of the Web 4.0 stack. It is a lightweight, `axum`-based HTTP service (Rust) that maintains three things:

1. A **catalog of dApps** and their boost-pool sizes (used to compute the `density` metric that guides seeder prioritization).
2. A **sliding 24-hour window** of signed heartbeats from every active seeder — the basis of the uptime multiplier `K_up`.
3. A **network map** built from the metrics scraped from each seeder's `/metrics` endpoint.

::: tip Trustless by design
The tracker only sees **public addresses and app hashes**. It cannot read private messages, and content integrity is verified client-side via **BLAKE3**. A dishonest tracker cannot forge heartbeats (they are signed) nor censor dApps for long — clients discover apps peer-to-peer via Mainline DHT if the tracker is offline.
:::

## Public HTTP API

CORS: **`Access-Control-Allow-Origin: *`** on every endpoint (for web clients & dashboards).

### `GET /apps`

Returns the full public catalog of registered dApps and the current size of each app's **boost pool**. Used by:

- The SmartNet marketplace to render app cards, categories, and popularity ranks.
- Seeder clients to compute the **`density`** metric — apps with a larger boost pool relative to their current seeder count yield higher per-app rewards, so honest seeders naturally gravitate toward under-served apps.

<span class="badge badge-get">GET</span>

```http
GET https://tracker.smartholdem.io/apps
```

### `POST /seeder/heartbeat`

The **signed availability heartbeat** every seeder must emit at roughly `TTL/2` intervals (default `TTL=120s`, so heartbeats every ~5 minutes) to remain accounted for.

<span class="badge badge-post">POST</span>

```http
POST https://tracker.smartholdem.io/seeder/heartbeat
Content-Type: application/json
```

**Payload:**

| Field       | Type       | Description |
| ----------- | ---------- | ----------- |
| `address`   | `string`   | Seeder's SmartHoldem address (base58check). |
| `apps`      | `string[]` | Hashes of the dApps currently being seeded. |
| `timestamp` | `number`   | Unix seconds. Must be within `±TTL` of tracker time. |
| `signature` | `string`   | `secp256k1` ECDSA signature over `SHA-256(address ‖ apps.join('') ‖ timestamp)`. |

The tracker **verifies the signature** using the seeder's on-chain public key. Forged heartbeats are impossible without the private key.

### `GET /seeder/heartbeat/{address}`

Read a seeder's current uptime and `K_up` multiplier — useful for dashboards and self-diagnostics.

<span class="badge badge-get">GET</span>

```http
GET https://tracker.smartholdem.io/seeder/heartbeat/Sg6epK4DXVKVZ2t57kndUZjtjkS2eCYUZ1
```

```json
{
  "address": "Sg6epK4DXVKVZ2t57kndUZjtjkS2eCYUZ1",
  "slotsFilled": 285,
  "slotsWindow": 288,
  "uptimePercent": 98.96,
  "kUp": 1.87,
  "tier": "elite"
}
```

### `GET /metrics` (per-seeder scrape target)

Each seeder exposes an HTTP endpoint the tracker scrapes to build the **network map** and compute the **Byte-Hours** score.

```json
{
  "uptimeSecs": 86400,
  "bytesSeeded": 4567000000,
  "gbSeeded": 4.567,
  "appsSeeded": 12
}
```

The scraped values feed the leaderboard:

```text
Score = GB_seeded × (uptime_secs / 3600)
      = Byte-Hours
```

## The Uptime Multiplier `K_up`

The reward paid to a seeder for a single app in a single epoch is:

```text
reward = base × gb_seeded × density × per_app × K_up
```

Where `K_up` is the **uptime multiplier**, a public function of the seeder's heartbeat history over a **sliding 24-hour window of 288 slots** (12 slots/hour × 24 h).

### Tiers

| Uptime           | Tier          | `K_up`              | Effect on reward |
| ---------------- | ------------- | ------------------- | ---------------- |
| **98 – 100 %**   | Elite Seeder  | **1.0 – 2.5** (max) | Full reward + bonus, scaled linearly to `MAX_K_UP` |
| **90 – 97.9 %**  | Flaky Seeder  | **0.5**             | Half reward     |
| **< 90 %**       | Dead Node     | **0.0**             | Zero — no reward paid |

### Why a sliding window?

- **Short-term outages are forgiven** — a 15-minute reboot doesn't zero your income, it just costs 3 slots out of 288.
- **Chronic flakiness is punished** — a seeder with 92 % uptime pays **half rate** until the next 24 hours of good behaviour push them into elite.
- **Restart grace** — the tracker grants a `TTL`-sized grace window when a seeder reappears after a restart, so short PM2 restarts don't drop the tier.

## Trust Model

### App ID Derivation

Every published dApp has a globally-unique `AppId` derived from the developer's public key:

```text
AppId = base58check(0x3F ‖ RIPEMD160(secp256k1_compressed_pubkey))
```

At publish time the tracker verifies three things:

1. **ECDSA signature** over `SHA-256(id ‖ name ‖ description ‖ merkle)`.
2. **Signature verification** against the corresponding public key.
3. **ID matches** the derivation from the public key.

This makes it impossible to spoof another developer's ID or tamper with metadata (name, description, merkle root of the app bundle) without holding the private key.

### What the Tracker Cannot Do

- It **cannot read** dApp contents — blobs never touch the tracker; they flow peer-to-peer via Iroh QUIC.
- It **cannot forge** heartbeats — every heartbeat is signed with the seeder's key.
- It **cannot censor** persistently — clients fall back to **Mainline DHT** (BEP5) with a signed identity beacon when the tracker is offline, restoring discovery.
- It **cannot mint** rewards directly — rewards are paid from the on-chain **boost pool** governed by DPoS delegates.

## Self-Hosting a Tracker

The tracker is open-source Rust (`axum` + `sled`). A production node needs ~1 vCPU and 512 MB RAM.

### Environment Variables

| Variable                        | Default            | Description |
| ------------------------------- | ------------------ | ----------- |
| `SMARTNET_TRACKER_PORT`         | `7374`             | HTTP server port. |
| `SMARTNET_TRACKER_TTL`          | `120`              | Announce TTL in seconds. Heartbeats are expected at ~TTL/2. |
| `SMARTNET_TRACKER_DB`           | `./tracker-data`   | Path to the `sled` KV database. |
| `SMARTNET_TRACKER_LOG_ANNOUNCE` | `true`             | Enable structured logging of every announce. |

### Build & Run

```bash
# Development
cd tracker
cargo run

# Production
cargo build --release
./target/release/smartnet-tracker
```

With the following release profile in `Cargo.toml`:

```toml
[profile.release]
opt-level = "z"   # minimal size
strip = true      # remove debug symbols
```

### Reset the Database

```bash
smartnet-tracker --wipe
```

A graceful window (`TTL` seconds) is granted to reconnecting providers so a restart does not immediately drop uptime tiers.

### Dependencies (Rust crates)

```toml
axum        = "0.8"    # HTTP framework
tokio       = "1"       # Async runtime
tower-http  = "0.6"    # CORS + tracing
serde       = "1"       # JSON (de)serialization
secp256k1   = "0.29"   # ECDSA verification
sha2        = "0.10"   # SHA-256
ripemd      = "0.1"    # RIPEMD-160
bs58        = "0.5"    # Base58Check
sled        = "0.34"   # Persistent KV store
ureq        = "2"       # HTTP client for /metrics scrape
tracing     = "0.1"    # Structured logging
```

## Next

- [Building a dApp for SmartNet](/guides/dapp-development) — how boost pools drive seeder economics.
- [SmartNet Overview](./overview) — the layered Web 4.0 architecture.
