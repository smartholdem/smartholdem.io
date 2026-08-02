---
title: Understanding the Transaction Nonce
description: Why SmartHoldem uses a sequential nonce, how to fetch it, and how to correctly handle multiple in-flight transactions.
---

# Understanding the Transaction Nonce

SmartHoldem transactions use a sequential nonce to protect against [double-spending](https://en.m.wikipedia.org/wiki/Double-spending), long-range attacks, key-leakage as a result of signature reuse, and [side-channel attacks](https://en.m.wikipedia.org/wiki/Side-channel_attack)associated with random nonces.

A sequential nonce effectively counts each outgoing transaction from a given wallet. This means that the first transaction from a wallet must have a nonce of **1**, the second transaction must have a nonce of **2**, and so on.

This ensures that the data contained within a particular transaction will always be unique and thus results in a distinct hash that will necessarily produce a unique signature.

**key facts**:

- The 1st transaction from a wallet **must** have a nonce of **1**.
- The nonce **must** increment sequentially for every subsequent transaction being sent. (*e.g. 2, 3, 4, 5, 6, 7, …*)
- A nonce **cannot** be reused.
- A nonce **cannot** be skipped. (*a transaction with a nonce of 5 originating from a wallet with a nonce of 3 will be rejected.*)

### How To Get Nonce Value For An Address?

A sequential nonce depends on the amount of transaction a specific wallet has sent. You can find the current nonce for a wallet by utilizing the Public API, more specifically the wallet endpoint. The [wallet endpoint](/en/api/api-endpoints#retrieve-a-wallet) returns the wallet details, including the current wallets nonce field, like below:

```json
{
  "data": {
    "address": "SaH94CRFvPXTwpgyLSCAsSuyCKJAqWxgo2",
    "publicKey": "035231cc2fccf7fba239b8abb2611def73f0c0a01598164909181eebd544ce114d",
    "balance": "12350770478424",
    "nonce": "3",
    "attributes": {
      "delegate": {
        "username": "europa",
        "voteBalance": "12350770478424",
        "forgedFees": "300000000",
        "forgedRewards": "0",
        "producedBlocks": 1254,
        "round": 74233,
        "rank": 20,
        "lastBlock": {
          "version": 0,
          "timestamp": 12568400,
          "height": 1558858,
          "previousBlockHex": "cb9efcde4b5926fcc53916beb331178b7a9bbd821eb16a8bae1b616cf0b4deae",
          "previousBlock": "cb9efcde4b5926fcc53916beb331178b7a9bbd821eb16a8bae1b616cf0b4deae",
          "numberOfTransactions": 0,
          "totalAmount": "0",
          "totalFee": "0",
          "reward": "0",
          "payloadLength": 0,
          "payloadHash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
          "generatorPublicKey": "035231cc2fccf7fba239b8abb2611def73f0c0a01598164909181eebd544ce114d",
          "blockSignature": "3045022100f6ec49b773523aacd234054157ab73bb71e99bc842d1a00ec7becfa912afac8c0220721a213cf1b48d548ecdf953fdc5c10554f44e039f67abc32494b4d3afb5e81f",
          "idHex": "234cbf055fd3ae0a73f542135d9561a7ecf1b2fc2a14d81adb02cc96bb425652",
          "id": "234cbf055fd3ae0a73f542135d9561a7ecf1b2fc2a14d81adb02cc96bb425652"
        }
      },
      "vote": "035231cc2fccf7fba239b8abb2611def73f0c0a01598164909181eebd544ce114d"
    }
  }
}
```

### How To Set Nonce Value?

When you create a new transaction for that wallet, you will use the **current nonce and add 1** to it to get to the new nonce value.

> If you retrieved a nonce value of **123** for a wallet, the next transaction will have to use nonce **124,** (current_nonce + 1). The API will increase the nonce value once a transaction has been forged for the wallet.

### Sending Multiple Transactions

You have to keep track locally of the next nonce value in case you intend to send multiple transactions in a single block.

For example, we have a wallet with nonce 100 and want to send 3 transactions to be forged in the next block. These transactions will require nonce values 101, 102 and 103 respectively, and you will have to set the values, before creating transactions.

After the block is forged, the API will report the *current* nonce of the wallet to be 103.

## Sending Multiple Transactions in the Same Block

If you need to broadcast **N** transactions from the same wallet before the next block is forged, you must **manually track the nonce locally**. The node will not auto-increment for you.

Suppose the wallet's current on-chain nonce is `100` and you want to send three transactions atomically:

```javascript
const { Transactions, Managers, Utils } = require('@smartholdem/crypto')
const { Connection } = require('@smartholdem/client')

Managers.configManager.setFromPreset('mainnet')
Managers.configManager.setHeight(1500000)

const client = new Connection('https://node0.smartholdem.io/api')
const passphrase = 'this is a top secret passphrase'

const wallet = await client.api('wallets').get('YOUR_SENDER_ADDRESS')
let nonce = Utils.BigNumber.make(wallet.body.data.nonce)   // current on-chain nonce = 100

const txs = ['recipientA', 'recipientB', 'recipientC'].map(to => {
  nonce = nonce.plus(1)                                    // 101, 102, 103
  return Transactions.BuilderFactory.transfer()
    .version(2)
    .nonce(nonce.toFixed())
    .recipientId(to)
    .amount(1 * 1e8)
    .sign(passphrase)
    .build()
    .toJson()
})

await client.api('transactions').create({ transactions: txs })
```

::: warning Gaps are fatal
If the first transaction is rejected (invalid signature, insufficient balance, …), transactions `102` and `103` will also be **rejected** because a gap opens up. Always design retry logic around the lowest failing nonce.
:::

## Quick Reference

| Rule                        | Detail                                                                     |
| --------------------------- | -------------------------------------------------------------------------- |
| First transaction ever      | `nonce = 1`                                                                |
| Every subsequent transaction| `new_nonce = current_nonce + 1`                                            |
| Reusing a nonce             | **Rejected** — replay protection                                           |
| Skipping a nonce            | **Rejected** — gaps are not allowed                                        |
| Fetching current nonce      | `GET /wallets/{{address}}` → `data.nonce`                                    |
| Sending N txs before block  | Track locally: `[current+1, current+2, …, current+N]`                      |
