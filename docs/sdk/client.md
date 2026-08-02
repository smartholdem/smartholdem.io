---
title: Client SDK
description: The @smartholdem/client package — high-level HTTP wrappers around every SmartHoldem Core Public API endpoint.
---

# Client SDK

The `@smartholdem/client` package is a thin, typed wrapper around every endpoint documented in the [API Reference](/api/endpoints). It handles request signing, retries, and JSON parsing so you can focus on business logic.

## Install

```bash
yarn add @smartholdem/client
```

## Initialize

```javascript
const { Connection } = require('@smartholdem/client')

// Any public node from https://smartholdem.io works — or point at your own node.
const client = new Connection('https://node0.smartholdem.io/api')
```

Every resource returns a `Promise<IResponse<T>>`. Unwrap the payload via `response.body.data`.

::: warning POST to /blocks is not allowed
Relay Nodes only accept new blocks from a delegate at the correct time through the **internal** API. You cannot broadcast blocks through the public API — only transactions.
:::

---

## Blocks

Signed sets of transactions permanently committed to the chain.

```javascript
await client.api('blocks').all()                       // list all blocks
await client.api('blocks').get('validBlockId')         // retrieve a single block
await client.api('blocks').transactions('validBlockId')// list all txs in a block
await client.api('blocks').search({ id: 'validBlockId' })
```

## Delegates

A delegate is a wallet that has broadcast a registration transaction and accumulated enough votes to enter the top-21 forging set.

> Voters are wallets which have broadcast a vote transaction. A vote remains active until an un-vote transaction is sent. Voting does not lock coins or grant the delegate wallet access.

```javascript
await client.api('delegates').all()                    // list all delegates
await client.api('delegates').get('validId')           // by address, publicKey or username
await client.api('delegates').blocks('validId')        // blocks forged by delegate
await client.api('delegates').voters('validId')        // wallets voting for delegate
```

## Wallets

Access wallet balances, transactions, votes, and lock records.

```javascript
await client.api('wallets').all()
await client.api('wallets').get('validId')                       // by address or publicKey
await client.api('wallets').transactions('validId')              // all txs (sent + received)
await client.api('wallets').transactionsReceived('validId')      // incoming
await client.api('wallets').transactionsSent('validId')          // outgoing
await client.api('wallets').votes('validId')                     // vote history
await client.api('wallets').locks('validId')                     // HTLC locks
await client.api('wallets').top()                                // top wallets by balance
await client.api('wallets').search({ address: 'validId' })
```

## Transactions

The heart of any blockchain — signed, state-altering payloads.

```javascript
// POST — broadcast one or many transactions
await client.api('transactions').create({ transactions: [signedTxJson] })

// GET
await client.api('transactions').get('validId')
await client.api('transactions').all()
await client.api('transactions').allUnconfirmed()
await client.api('transactions').getUnconfirmed('validId')
await client.api('transactions').search({ id: 'validId' })
await client.api('transactions').types()               // enumerable list of tx types
```

## Node

Query the health, config, and fee schedule of the node your `Connection` points at.

```javascript
await client.api('node').configuration()   // network + version + constants
await client.api('node').status()          // syncing height + peer count
await client.api('node').syncing()         // { syncing: bool, blocks: int, height: int }
await client.api('node').fees()            // static fee schedule per tx type
```

## Peers

The set of relay/delegate nodes your node is connected to.

> Peers make their Public API available; for mission-critical queries and transaction posting you should use a node you control.

```javascript
await client.api('peers').all()
await client.api('peers').get('validIpAddress')
```

## Votes

A vote is a transaction sub-type — `type: 3`, `asset.votes` prefixed with `+publicKey` (vote) or `-publicKey` (un-vote).

```javascript
await client.api('votes').all()
await client.api('votes').get('validId')
```

## Locks (HTLC)

Hash Time-Locked Contracts — atomic-swap primitives.

```javascript
await client.api('locks').all()
await client.api('locks').get('validId')
await client.api('locks').search({ lockId: 'validId' })
await client.api('locks').unlocked({ ids: ['validId'] })
```

## Rounds

Metadata about a specific forging round.

```javascript
await client.api('rounds').delegates(roundNumber)   // 21 delegates active in that round
```

## Bridgechains & Businesses

Registered side-chain and business entities on the network.

```javascript
// Bridgechains
await client.api('bridgechains').all()
await client.api('bridgechains').get('validId')
await client.api('bridgechains').search({ bridgechainId: 'validId' })

// Businesses
await client.api('businesses').all()
await client.api('businesses').get('validId')
await client.api('businesses').bridgechains('validId')
await client.api('businesses').search({ businessId: 'validId' })
```

---

## Response Shape

Every method returns:

```typescript
Promise<IResponse<T>>
// where IResponse<T> = { status: number, body: { meta?: {...}, data: T | T[] } }
```

Unwrap it:

```javascript
const { body } = await client.api('wallets').get('SdrPz…')
console.log(body.data.balance, body.data.nonce)
```

## Next

- [Crypto SDK](./crypto) — sign the transactions before you broadcast them.
- [Examples](./examples) — 6 complete recipes (Transfer, Vote, HTLC, Multi-Payment, …).
