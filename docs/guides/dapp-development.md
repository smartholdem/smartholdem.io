---
title: Building a dApp for SmartNet
description: Monetization patterns and zero-infrastructure deployment for developers publishing dApps on the SmartNet client and the Netfory P2P network.
---

# Building a dApp for SmartNet

This guide describes how a developer designs, publishes, and monetizes a dApp on the Web 4.0 stack. It complements the technical [App SDK](/smartnet/app-sdk) reference by focusing on **economics, deployment, and product design**.

## Prerequisites

- Familiarity with [SmartNet Overview](/smartnet/overview) — the IPC security model and the `window.smartholdem` bridge.
- The [App SDK](/smartnet/app-sdk) methods your dApp will consume.
- A working [Client SDK + Crypto SDK](/sdk/installation) setup for building & broadcasting on-chain transactions.

## Monetization Models

SmartHoldem gives dApp developers four native, on-chain revenue streams. All four settle in **STH** on the SmartHoldem DPoS blockchain and require **no third-party payment processor**.

### 1. Paid dApps — Entry Fee

Charge users a one-off fee to install your dApp. The fee is enforced by the SmartNet core before the WebView bundle is unlocked.

**Best for:** premium tools, professional utilities, one-shot experiences.

```javascript
await window.smartholdem.sendTransaction({
  type: 0,
  amount: (49 * 1e8).toString(),               // 49 STH
  recipientId: DEVELOPER_ADDRESS,
  vendorField: `install:${MY_APP_ID}`
})
```

### 2. In-App Purchases (IAP)

Sell premium features, cosmetics, tokens, or additional content **inside** a free-to-install dApp. Every purchase is a distinct on-chain transaction with a `vendorField` naming the SKU.

**Best for:** games, creative tools, freemium apps, competitive marketplaces.

```vue
<script setup>
import { usePayments } from '@smartholdem/smartnet-sdk'

const { createPayment, verifyPayment } = usePayments()

const buyExpansionPack = async () => {
  const receipt = await createPayment({
    amount: 10 * 1e8,                          // 10 STH
    vendorField: 'sku:expansion_pack_2'
  })
  const ok = await verifyPayment(receipt.transactionId)
  if (ok) unlockContent('expansion_pack_2')
}
</script>
```

### 3. Paid Inbox & Subscriptions

Charge users **to send you a message** (anti-spam + revenue) or to **subscribe** to a feed. This is a first-class primitive in SmartNet: `usePayments().sendPaidMessage(...)`.

**Best for:** expert access, mentorship, gated newsletters, paid support inboxes, one-to-one consultations.

```javascript
await usePayments().sendPaidMessage({
  to: EXPERT_ADDRESS,
  body: 'Would you review my whitepaper draft?',
  fee: 5 * 1e8                                 // 5 STH — anti-spam floor
})
```

Because every message costs STH, **spam is economically irrational**: 1,000,000 messages at 0.01 STH each costs the attacker 10,000 STH — while honest, high-value messages get through instantly.

### 4. Boost Pools — Distribution as a Product

Developers deposit STH into their app's **boost pool** on the [SmartNet Tracker](/smartnet/tracker#get-apps). A larger pool raises the app's **`density`** metric, which directly increases the reward-per-GB paid to seeders that redistribute the app.

**Effect:** honest seeders naturally prioritize apps with high density — your dApp is downloaded faster, from more peers, in more geographies. **You are literally paying for global CDN distribution in STH**, without ever touching AWS or Cloudflare.

```javascript
// Deposit into the boost pool for your app (developer-side helper)
await client.api('transactions').create({
  transactions: [
    Transactions.BuilderFactory.transfer()
      .amount(500 * 1e8)
      .recipientId(BOOST_POOL_ADDRESS)
      .vendorField(`boost:${MY_APP_ID}`)
      .nonce(nextNonce)
      .sign(passphrase)
      .build()
      .toJson()
  ]
})
```

::: tip Boost = Distribution
Boost pools are not a marketing gimmick. They are the **economic incentive layer** that replaces AWS S3 and Cloudflare CDN. If nobody is paid to seed your app, it will still work — but it will be slow and less discoverable.
:::

## Zero-Infrastructure Deployment

Once your dApp bundle is ready, publishing takes **one transaction**. There is no AWS console, no Vercel dashboard, no domain purchase, no CDN configuration.

### Publishing Flow

1. **Bundle your dApp** — a self-contained folder of static assets (`index.html`, JS, CSS, WASM).
2. **Hash it with BLAKE3** — produces a Merkle root that becomes your **content identifier**.
3. **Sign & broadcast the registration transaction** with a **100 STH base fee** and the following payload:

```json
{
  "id": "base58check(0x3F || RIPEMD160(compressed_pubkey))",
  "name": "My Awesome dApp",
  "description": "…",
  "merkle": "<BLAKE3 root of the bundle>",
  "signature": "<ECDSA over SHA-256(id || name || description || merkle)>"
}
```

4. **The tracker verifies** the signature and derivation (see [Tracker → Trust Model](/smartnet/tracker#trust-model)).
5. **Seeders pick up the bundle** via P2P (Iroh QUIC). Density > 0 — users can now install.

From step 5 onward, your dApp is:

- **Content-addressed** — the CID (BLAKE3 root) proves the bundle wasn't tampered with. No CA, no domain hijack.
- **Immortal** — as long as *any* seeder holds the blob, the app is reachable. There is no single point of failure.
- **Un-deplatformable** — no corporation can take it down. No court order can seize it.

### What Never Happens

| Legacy Web 3.0 concern       | Web 4.0 outcome |
| ---------------------------- | --------------- |
| AWS bill                     | — (no cloud) |
| Cloudflare rate limits       | — (no CDN) |
| SSL cert renewal             | — (BLAKE3 replaces PKI) |
| DDoS mitigation subscription | — (P2P absorbs load) |
| Domain seizure               | — (CID cannot be revoked) |
| DMCA takedown                | Only slows discovery via the tracker; DHT + direct-peer resolution remains |

## dApp Lifecycle at a Glance

```text
┌───────────┐    ┌───────────┐    ┌────────────┐    ┌─────────────┐    ┌───────────┐
│  Bundle   │ →  │  BLAKE3   │ →  │  Register  │ →  │   Seeders   │ →  │  Users    │
│  static   │    │  hash CID │    │   100 STH  │    │  redistrib. │    │  install  │
│  assets   │    │           │    │   on-chain │    │  from pool  │    │  → pay/IAP│
└───────────┘    └───────────┘    └────────────┘    └─────────────┘    └───────────┘
```

## Design Recommendations

### Cost Design

- **Charge in fiat-anchored numbers.** Users think in dollars, not smarthoshi. Compute the STH amount at signature time from an oracle or a fixed daily peg.
- **Combine models.** A `29 STH` install fee **plus** a `0.5 STH` per-message paid inbox filters unserious users far better than either model alone.

### UX

- **Never surprise the user with a signature dialog.** Trigger `signMessage`/`sendTransaction` only in response to explicit user action.
- **Cache balances locally** with `useStorage()` and refresh optimistically. Don't block UI on `getBalance()`.
- **Fail gracefully outside SmartNet.** Detect `!window.smartholdem` and show a helpful "open in SmartNet" CTA instead of throwing.

### Distribution

- **Seed your own bundle first**, at least for the first weeks. Boot-strap density so the tracker has something to advertise.
- **Tune the boost pool** based on adoption. Start conservative (50 STH/month), scale up as install numbers grow.
- **Announce releases with a fresh CID.** Old versions remain reachable — no forced upgrades — but new seeder rewards accrue to the new CID.

## Checklist

| # | Step                                                                       |
| - | -------------------------------------------------------------------------- |
| 1 | Design monetization mix (paid install · IAP · paid inbox · boost)          |
| 2 | Build the dApp bundle — fully static, uses `window.smartholdem` for all state changes |
| 3 | Add graceful fallback when running outside SmartNet                         |
| 4 | Wire `useStorage()` for local state (theme, preferences, cache)            |
| 5 | Hash & sign the manifest with your dev keys                                |
| 6 | Broadcast the registration transaction (100 STH fee)                       |
| 7 | Deposit into your boost pool to bootstrap distribution                     |
| 8 | Monitor Byte-Hours / density via the [Tracker API](/smartnet/tracker#get-apps) |

## Next

- [App SDK reference](/smartnet/app-sdk) — every hook and bridge method.
- [Tracker economics](/smartnet/tracker) — how boost pools, density, and `K_up` shape seeder incentives.
- [Practical SDK Examples](/sdk/examples) — runnable Node.js snippets that build & broadcast every relevant transaction type.
