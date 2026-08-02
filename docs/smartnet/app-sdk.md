---
title: SmartNet App SDK
description: window.smartholdem bridge methods and Vue 3 composables — wallet, payments, storage, and signMessage.
---

# SmartNet App SDK

The SmartNet App SDK is the surface that a dApp uses to talk to the SmartNet Rust core — wallet, payments, storage. Every method is an asynchronous IPC call that (for state-changing operations) prompts the user for confirmation via a native GUI dialog.

::: tip Prerequisite
Read the [SmartNet Overview](./overview) first — it explains the IPC security model and why the dApp never sees the user's private keys.
:::

## Detecting SmartNet

The Tauri core injects `window.smartholdem` into every dApp WebView. Fall back gracefully when running in a regular browser:

```javascript
if (window.smartholdem) {
  // Full SmartNet SDK available
} else {
  // Regular browser — fall back to WalletConnect or ask the user to open in SmartNet
}
```

Optionally, install the ergonomic wrapper package for Vue 3 composables:

```bash
yarn add @smartholdem/smartnet-sdk
```

## Core Hooks (Vue 3 Composition API)

### `useSmartNetWallet()`

Access user identity, live balance, and request signatures.

```typescript
{
  address: Ref<string>,          // user's public address
  balance: Ref<bigint>,          // in smarthoshi (1 STH = 10^8)
  publicKey: Ref<string>,
  signTransaction: (payload) => Promise<SignedTx>,
  signMessage: (msg: string) => Promise<{ signature, publicKey }>
}
```

```vue
<script setup>
import { useSmartNetWallet } from '@smartholdem/smartnet-sdk'

const { address, balance, signTransaction } = useSmartNetWallet()

const sendSTH = async (to, amount) => {
  const tx = await signTransaction({ recipientId: to, amount })
  // → broadcast via @smartholdem/client
}
</script>
```

### `usePayments()`

Handles in-app purchases, subscriptions, and paid messages — all settled in STH on the SmartHoldem blockchain.

```typescript
{
  createPayment: (opts) => Promise<Receipt>,      // one-off IAP
  verifyPayment: (txId) => Promise<boolean>,       // check status
  getSubscriptions: () => Promise<Subscription[]>, // active recurring
  sendPaidMessage: (opts) => Promise<Receipt>      // paid inbox (anti-spam)
}
```

```vue
<script setup>
import { usePayments } from '@smartholdem/smartnet-sdk'

const { createPayment, sendPaidMessage } = usePayments()

const unlockPremium = () =>
  createPayment({ amount: 100_000_000, vendorField: 'premium_access' })

const contactExpert = (expertAddress, body) =>
  sendPaidMessage({ to: expertAddress, body, fee: 1_000_000 })
</script>
```

### `useStorage()`

Persistent key-value store scoped to your dApp. Data lives inside the user's local **`sled` database sealed with AES-GCM** — the host filesystem is never touched.

```typescript
{
  get: (key: string) => Promise<any>,
  set: (key: string, value: any) => Promise<void>,
  remove: (key: string) => Promise<void>,
  clear: () => Promise<void>
}
```

```vue
<script setup>
import { useStorage } from '@smartholdem/smartnet-sdk'

const { get, set } = useStorage()

await set('user_preferences', { theme: 'dark', lang: 'en' })
const prefs = await get('user_preferences')
</script>
```

## Raw `window.smartholdem` API

For React, Svelte, or plain JavaScript dApps that don't use Vue composables.

### `signMessage(message)` — Full Example

Sign an arbitrary string with the user's key. The Rust core displays a **native confirmation dialog** with the raw payload before producing the signature; the dApp never receives the private key.

```vue
<template>
  <div>
    <input v-model="message" placeholder="Message to sign" />
    <button :disabled="loading" @click="signWithSmartNet">Sign with SmartNet</button>

    <div v-if="result">
      <p><strong>Signature:</strong> <code>{{ result.signature }}</code></p>
      <p><strong>Public key:</strong> <code>{{ result.publicKey }}</code></p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hello SmartNet — sign this for me')
const loading = ref(false)
const result  = ref(null)

const signWithSmartNet = async () => {
  if (!window.smartholdem) {
    alert('This action requires the SmartNet client')
    return
  }
  loading.value = true
  try {
    // Native GUI dialog appears here — the user must approve
    result.value = await window.smartholdem.signMessage(message.value)
  } catch (e) {
    // Rejection is a normal outcome, not an exception in the runtime sense
    console.error('User rejected signature:', e)
  } finally {
    loading.value = false
  }
}
</script>
```

### `sendTransaction(payload)`

Broadcast a pre-built transaction payload. Native confirmation dialog appears before signing & broadcasting.

```javascript
const { transactionId } = await window.smartholdem.sendTransaction({
  type: 0,
  amount: '100000000',                                   // 1 STH
  recipientId: 'Sg6epK4DXVKVZ2t57kndUZjtjkS2eCYUZ1',
  fee: '10000000'
})
```

### `getBalance()`

Read the wallet's current balance and nonce.

```javascript
const { balance, nonce } = await window.smartholdem.getBalance()
console.log(`Balance: ${Number(balance) / 1e8} STH · nonce: ${nonce}`)
```

## React Example

```jsx
import { useEffect, useState } from 'react'

export default function SmartNetGate() {
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    if (window.smartholdem) {
      window.smartholdem.getBalance().then(({ balance }) => {
        setBalance(Number(balance) / 1e8)
      })
    }
  }, [])

  return <div>Balance: {balance} STH</div>
}
```

## Cheat Sheet

| Task                                        | API                                                |
| ------------------------------------------- | -------------------------------------------------- |
| Detect environment                          | `!!window.smartholdem`                             |
| Read address / balance / nonce              | `useSmartNetWallet()` · `getBalance()`             |
| Sign an off-chain message                   | `signMessage(msg)`                                 |
| Sign & broadcast a transaction              | `signTransaction(payload)` → client SDK broadcast  |
| Send a fully-built transaction              | `sendTransaction(payload)`                         |
| One-off payment (IAP)                       | `usePayments().createPayment()`                    |
| Paid inbox message                          | `usePayments().sendPaidMessage()`                  |
| Store dApp state locally                    | `useStorage().set(k, v)`                           |

## Next

- [Tracker API & Seeder Economics](./tracker) — the coordination layer for seeder rewards and dApp discovery.
- [Building a dApp for SmartNet](/guides/dapp-development) — monetization patterns and boost pools.
