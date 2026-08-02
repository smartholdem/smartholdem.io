---
title: Crypto SDK
description: The @smartholdem/crypto package — local key derivation, transaction signing, serialization, and identity utilities.
---

# Crypto SDK

The `@smartholdem/crypto` package handles everything cryptographic **locally**: key-pair derivation, transaction building & signing, hash-based message signing (ECDSA + Schnorr), and address / WIF utilities. **No network calls.**

## Install

```bash
yarn add @smartholdem/crypto
```

## Initialization

```javascript
const { Identities } = require('@smartholdem/crypto')

// Throughout this document, the keys object used is:
const keys = Identities.Keys.fromPassphrase('this is a top-secret passphrase')

// The recipientId used in examples:
const recipientId = Identities.Address.fromPassphrase('this is a top-secret passphrase')

// The senderPublicKey used in examples:
const senderPublicKey = Identities.PublicKey.fromPassphrase('this is a top-secret passphrase')
```

::: danger Secrets never leave the device
Passphrases, private keys, and WIFs must **never** be transmitted over the network, logged, or committed to source control. Store them encrypted (AES-GCM or hardware-backed vault).
:::

## Transactions

A transaction is an object specifying the transfer of funds from the sender's wallet to the recipient's. Each transaction must be signed by the sender's private key to prove authenticity and origin. After broadcasting through the [Client SDK](./client), it is permanently incorporated into the blockchain by a Delegate Node.

### Sign

The Crypto SDK signs a raw transaction object using your private key or passphrase. Familiarize yourself with [digital signatures](https://en.wikipedia.org/wiki/Digital_signature) before you sign anything.

```javascript
const { Transactions } = require('@smartholdem/crypto')

const transaction = {
  type: 0,
  amount: 200000000,
  fee: 100000000,
  recipientId,
  timestamp: 121212,
  asset: {},
  senderPublicKey
}

Transactions.Signer.sign(transaction, keys)
// >>> string (signature)
```

### Serialize

> Serialization produces the compact wire-format used inside blocks. If you combine the Crypto SDK with the Client SDK, you rarely need to serialize manually — `.build().toJson()` does it for you.

```javascript
const { Transactions } = require('@smartholdem/crypto')

const transaction = Transactions.BuilderFactory
  .transfer()
  .amount(1000)
  .fee(100000000)
  .recipientId(recipientId)
  .senderPublicKey(senderPublicKey)
  .sign('sender')
  .build()

const serialized = Transactions.Serializer.serialize(transaction).toString('hex')
// >>> string
```

### Deserialize

> Deserialize only for inspection. The public API never returns serialized transactions.

```javascript
const { Transactions } = require('@smartholdem/crypto')

const deserialized = Transactions.deserializer.deserialize(serialized)
// >>> ITransaction
```

## Messages

The Crypto SDK can sign arbitrary strings — useful for off-chain proof-of-ownership, login challenges, and DeFi authorization flows.

### Sign — ECDSA

```javascript
const { Crypto } = require('@smartholdem/crypto')

const message = 'Arbitrary entry of data'
const hash = Crypto.HashAlgorithms.sha256(message)
const signature = Crypto.Hash.signECDSA(hash, keys)

const signed = { message, hash, signature }
// >>> IMessage
```

### Sign — Schnorr

```javascript
const { Crypto } = require('@smartholdem/crypto')

const message = 'Arbitrary entry of data'
const hash = Crypto.HashAlgorithms.sha256(message)
const signature = Crypto.Hash.signSchnorr(hash, keys)

const signed = { message, hash, signature }
// >>> IMessage
```

### Verify — ECDSA

```javascript
Crypto.Hash.verifyECDSA(
  signed.hash,
  signed.signature,
  '72b45a1978dd7669470ba67abbe5c220062924380c9c364b'
)
// >>> boolean
```

### Verify — Schnorr

```javascript
Crypto.Hash.verifySchnorr(
  signed.hash,
  signed.signature,
  '72b45a1978dd7669470ba67abbe5c220062924380c9c364b'
)
// >>> boolean
```

## Identities

The `Identities` namespace derives and validates the four building blocks of a SmartHoldem wallet: **Address**, **Public Key**, **Private Key**, and **WIF**.

### Address

```javascript
const { Identities } = require('@smartholdem/crypto')

Identities.Address.fromPassphrase('this is a top secret passphrase')  // >>> string
Identities.Address.fromPublicKey('validPublicKey')                     // >>> string
Identities.Address.fromPrivateKey('validPrivateKey')                   // >>> string
Identities.Address.fromWIF('validWif')                                 // >>> string
Identities.Address.validate('validAddress')                            // >>> boolean
```

### Private Key

> Private keys and passphrases must remain private. Never store them unencrypted, minimize access, and consider hardware-signing for high-value wallets.

```javascript
Identities.PrivateKey.fromPassphrase('this is a top secret passphrase')  // >>> string
Identities.PrivateKey.fromWIF('validWif')                                 // >>> string
```

### Public Key

> Public keys may be freely shared and are included in transaction objects for signature verification.

```javascript
Identities.PublicKey.fromPassphrase('this is a top secret passphrase')  // >>> string
Identities.PublicKey.validate('validPublicKey')                          // >>> boolean
```

### WIF (Wallet Import Format)

> The WIF should remain secret — same threat model as passphrase and private key.

```javascript
Identities.WIF.fromPassphrase('this is a top secret passphrase')  // >>> string
```

## Cheat Sheet

| From             | Method                                       | Returns     |
| ---------------- | -------------------------------------------- | ----------- |
| Passphrase       | `Identities.Keys.fromPassphrase(p)`          | Key-pair    |
| Passphrase       | `Identities.Address.fromPassphrase(p)`       | Address     |
| Passphrase       | `Identities.PublicKey.fromPassphrase(p)`     | Public key  |
| Passphrase       | `Identities.PrivateKey.fromPassphrase(p)`    | Private key |
| Passphrase       | `Identities.WIF.fromPassphrase(p)`           | WIF         |
| Public key       | `Identities.Address.fromPublicKey(pk)`       | Address     |
| Private key      | `Identities.Address.fromPrivateKey(sk)`      | Address     |
| WIF              | `Identities.Address.fromWIF(w)`              | Address     |
| WIF              | `Identities.PrivateKey.fromWIF(w)`           | Private key |

## Next

- [Client SDK](./client) — broadcast the transactions you just signed.
- [Examples](./examples) — end-to-end recipes combining Crypto + Client SDKs.
