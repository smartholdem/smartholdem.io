---
layout: home
title: SmartHoldem Developer Hub
description: Official SmartHoldem API, SDK, and Core documentation. Build on the first Web 4.0 architecture.

hero:
  name: SmartHoldem
  text: Developer Hub
  tagline: Build on the first Web 4.0 architecture. Zero Infrastructure. Absolute Autonomy.
  image:
    src: /logo.png
    alt: SmartHoldem
  actions:
    - theme: brand
      text: Explore the API
      link: /api/
    - theme: alt
      text: View on GitHub
      link: https://github.com/smartholdem/sth-core

features:
  - icon: 🔌
    title: RESTful API
    details: Query blocks, transactions, delegates, wallets, HTLC locks and node state via a battle-tested Public API served by 6+ mainnet nodes.
    link: /api/
    linkText: Open API Reference
  - icon: 🧩
    title: SmartNet App SDK
    details: Build dApps for the Tauri v2 SmartNet client. window.smartholdem bridge, IPC-isolated signing, Vue 3 composables for wallet, payments & storage.
    link: /smartnet/overview
    linkText: SmartNet Overview
  - icon: 🛰️
    title: Seeder Economics
    details: Signed heartbeats, sliding 24-hour uptime multiplier (K_up up to 2.5×), boost pools that turn STH into global CDN distribution.
    link: /smartnet/tracker
    linkText: Tracker & K_up
---

<div class="vp-doc" style="max-width: 1152px; margin: 3rem auto 4rem; padding: 0 24px;">

## Welcome to DevHub

This hub contains **everything a developer needs** to interact with the SmartHoldem DPoS blockchain and the Netfory P2P network — from RESTful endpoints to SDK usage patterns and core architectural concepts.

<div class="quick-grid">

<a class="quick-card" href="./api/">
  <h3>→ API Reference</h3>
  <p>Explore RESTful endpoints for blocks, transactions, delegates, and wallets. Serves millions of requests daily across mainnet nodes.</p>
</a>

<a class="quick-card" href="./sdk/installation">
  <h3>→ SDK Guides</h3>
  <p>Install and use the official Client and Crypto SDKs to sign, build, and broadcast transactions from Node.js or browser.</p>
</a>

<a class="quick-card" href="./core/data-models">
  <h3>→ Core Concepts</h3>
  <p>Understand data models, transaction nonces, and environment variables that power the SmartHoldem Core node.</p>
</a>

<a class="quick-card" href="./smartnet/overview">
  <h3>→ SmartNet · Web 4.0</h3>
  <p>Native bridge for dApps running inside the Tauri v2 SmartNet client — wallet, payments, storage, and IPC-isolated cryptography.</p>
</a>

<a class="quick-card" href="./smartnet/tracker">
  <h3>→ Tracker & Seeder Economics</h3>
  <p>Public coordination layer, boost pools, and the uptime multiplier <code>K_up</code> that shapes seeder rewards.</p>
</a>

<a class="quick-card" href="./guides/dapp-development">
  <h3>→ Building a dApp</h3>
  <p>Monetization patterns (paid installs, IAP, paid inbox, boost pools) and zero-infrastructure deployment via BLAKE3 content addressing.</p>
</a>

</div>

## What DevHub Covers

The documentation is organized into six pillars:

| Section | For | Ships |
|---|---|---|
| **[API Reference](/api/)** | Anyone querying the chain | 9 endpoint groups (Blockchain, Blocks, Transactions, Delegates, Node, Peers, Votes, HTLC, Wallets) with cURL examples |
| **[SDK](/sdk/installation)** | Node.js / TypeScript devs | `@smartholdem/client` + `@smartholdem/crypto` — installation, signing, serialization, ECDSA/Schnorr, full transaction lifecycle |
| **[Core Concepts](/core/data-models)** | Node operators & advanced devs | Data Models, Transaction Nonce, 65 `CORE_*` environment variables grouped by subsystem |
| **[SmartNet · Web 4.0](/smartnet/overview)** | dApp developers | The `window.smartholdem` bridge, IPC security, Vue 3 composables (`useSmartNetWallet`, `usePayments`, `useStorage`) |
| **[Tracker](/smartnet/tracker)** | Seeder operators & dApp devs | Coordination API, signed heartbeats, sliding-window uptime multiplier `K_up`, boost-pool economics |
| **[Guides](/guides/dapp-development)** | dApp product designers | Monetization mix (paid installs, IAP, paid inbox, boost pools) and zero-infra deployment via BLAKE3 |

</div>
