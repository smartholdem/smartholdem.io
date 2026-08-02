---
title: SmartNet & Web 4.0 Integration
description: SmartNet is the decentralized execution environment for dApps — Tauri v2 client, SmartHoldem DPoS trust layer, and IPC-isolated cryptography.
---

# SmartNet & Web 4.0 Integration

**SmartNet** is the decentralized execution environment for dApps. It is built on **Tauri v2 (Rust + Vue 3)** and anchored to the **SmartHoldem DPoS blockchain** for identity, payments, and content addressing. Together with the [Netfory](https://smartholdem.io) P2P transport (Iroh QUIC + n1-relay DERP mesh) and the [SmartNet Tracker](./tracker), it forms the Web 4.0 stack — a symbiotic web in which every user's client is itself an autonomous node.

::: tip Not just a wallet
SmartNet is a **wallet + dApp gateway + hybrid seeder** in one binary. When a user opens your dApp, they simultaneously (a) run your code inside an isolated WebView, (b) contribute bandwidth to redistribute other users' content, and (c) earn STH proportional to their `Byte-Hours` score.
:::

## The `window.smartholdem` Bridge

When a dApp is loaded, the Tauri core (specifically `webview.rs` and `dapp.rs`) injects a **global `window.smartholdem` object** into the dApp's WebView context. This object is the **only** channel through which a dApp can interact with the user's wallet, storage, or the P2P network.

```javascript
if (window.smartholdem) {
  console.log('SmartNet environment detected — full bridge available')
} else {
  console.warn('Running outside SmartNet — fall back to WalletConnect or external wallet')
}
```

Every method on this object is an **asynchronous IPC call**. The dApp does not execute anything privileged directly — it merely requests, and the Rust core decides (with the user's consent) whether to grant.

See [App SDK](./app-sdk) for the full method reference and Vue 3 composables.

## Security & Context Isolation

::: danger dApps NEVER see private keys or the mnemonic
No matter what a dApp does — no code injection, no malicious WebAssembly, no supply-chain attack — it cannot read, exfiltrate, or brute-force the user's seed phrase. Every cryptographic operation happens **inside the Rust core**, gated by an operating-system-level native confirmation dialog.
:::

### IPC Flow (Anatomy of `signMessage`)

The security boundary is enforced by [Tauri's IPC](https://tauri.app/develop/calling-rust/):

1. **dApp** calls `window.smartholdem.signMessage('hello')`.
2. The call is serialized and dispatched over a secure **IPC channel** (`tauri::ipc`) to the main Rust process (`dapp.rs`).
3. Rust **pauses the WebView** and displays a **native GUI confirmation dialog** with the raw payload (message body, hash, requesting dApp's public identifier).
4. If the user approves, `crypto.rs` unlocks the local vault (**AES-GCM sealed with PIN / passphrase**) and produces the signature.
5. Only the resulting **signature bytes** are returned to the WebView — never the private key or intermediate state.

### Key Security Properties

| Property                       | Guarantee |
| ------------------------------ | --------- |
| **Zero Local Access**          | dApp has no access to the host filesystem, running processes, or environment variables. Write access is limited to isolated IndexedDB inside the WebView context. |
| **No Raw Sockets**             | dApp cannot open arbitrary TCP/UDP sockets. All P2P traffic is proxied through SmartNet's transport abstraction (Iroh QUIC + n1-relay DERP mesh). |
| **Per-dApp Storage Isolation** | Every dApp gets its own namespace inside the local `sled` database. Keys leaked in one dApp are invisible to every other dApp. |
| **BIP-32 / BIP-44 Derivation** | Keys are derived hierarchically from a single BIP-39 mnemonic. Each dApp is bound to a **derived, per-app address** — protecting user privacy across services. |
| **Explicit User Consent**      | Every signing operation and every state-changing bridge call surfaces a native OS dialog. No silent transactions. |

## The Three Layers of Web 4.0

```text
┌───────────────────────────────────────────────────────────┐
│  Layer 3  │  dApp WebView  (your Vue / React / vanilla code)  │
├───────────────────────────────────────────────────────────┤
│  Layer 2  │  SmartNet Rust Core                              │
│           │     ─ wallet & signing (crypto.rs)                │
│           │     ─ dApp bridge & IPC (dapp.rs, webview.rs)     │
│           │     ─ sled storage (per-dApp namespaces)          │
│           │     ─ Iroh QUIC + n1-relay transport              │
│           │     ─ hybrid seeder                               │
├───────────────────────────────────────────────────────────┤
│  Layer 1  │  SmartHoldem DPoS Blockchain                     │
│           │     ─ 21 forging delegates, 8 s block time        │
│           │     ─ identity, names, HTLC, boost-pool payments  │
└───────────────────────────────────────────────────────────┘
```

**Layer 1** anchors trust (block signatures by DPoS delegates).
**Layer 2** enforces isolation and provides the runtime.
**Layer 3** is where you — the developer — build.

## Next

- [App SDK](./app-sdk) — `window.smartholdem` methods and Vue 3 composables.
- [Tracker API & Seeder Economics](./tracker) — the coordination layer for dApp discovery and seeder uptime accounting.
- [Building a dApp for SmartNet](/guides/dapp-development) — monetization models and zero-infra deployment.
