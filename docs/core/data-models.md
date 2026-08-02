---
title: Core Data Models
description: DTOs returned by the SmartHoldem Core Public API — Block, Transaction, Wallet, Delegate, Peer.
---

# Core Data Models

These are the **Data Transfer Objects** returned by the [Public API](/api/endpoints). The shape is kept intentionally stable across releases for backward- and forward-compatibility, and it does not necessarily match the node's internal in-memory representation.

::: tip When accessing the Event API
The Event API sometimes exposes fields not present here. When in doubt, cross-reference the `resources/` directory inside the [`sth-core`](https://github.com/smartholdem/sth-core) repository — it holds the canonical serializers.
:::

Keep in mind that the data structures are kept consistent as much as possible for the sake of backward and forwards compatibility. As such, these data hierarchies are not necessarily the same as the object’s internal representation.

This is something to keep in mind when accessing these models through the Event API, for example, as the correct way to obtain information might be different from following the structure listed here.

Where possible, these discrepancies are noted below. The `resources` directories in the `core-api` module help to paint a complete picture; they can be found in their respective repositories:

### Block

Blocks are the core unit of any given blockchain. In SmartHoldem, blocks contain a group of transactions and are signed by a delegate to validate their authenticity.

- **id**
- **version** *the version of ARK active on the network when the block was forged*
- **height** *the total number of blocks since genesis (block 1)*
- **previous** *the ID of the previous block in the chain*
- **forged**:
**reward** *total reward for mining block*
**fee** total *fee paid by users for this block*
**total** *total reward + total fee*
- **payload** fields holding metadata on the block’s transactions:
**hash** *The SHA256 hash of the block’s content*
**length** *the length of the payload hash in bytes*
- **generator** *the delegate who generated the block*:
*username*
*address*
*publicKey*
- **signature** *the signature of the delegate who forged the block*
- **confirmations** *the amount of times the network has declared this block as valid*
- **transactions** *the amount of transactions in the block*
- **timestamp**

### Transaction

Transactions are the heart of any blockchain, cryptocurrency or otherwise. They represent a transfer of value from one network participant to another. In SmartHoldem, transactions can be of one of multiple types.

- **id**
- **blockId** *the ID of the block in which this transaction is included*
- **type** *the type of the transaction*
- **amount** *the transaction value in arktoshi*
- **fee** *the fee paid to include the transaction in its block*
- **sender** *the address of the transaction sender*
- **recipient** *the address of the transaction recipient*
- **signature** *the signature of the sending party*
- **signSignature** *if secondSignature is enabled, the second signature is stored here*
- **signatures** *an array of the transaction’s signatures, used in multisignature transactions to validate more than two signatures*
- **vendorField** *an optional text field written by the sender and associated with the transaction*
- **asset** *the type-specific transaction payload*
- **confirmations** *the amount of times this transaction’s block has been confirmed*
- **timestamp**

### Wallet

Wallets are individual accounts on the SmartHoldem Blockchain. Each wallet has a balance that grows and shrinks as the wallet sends and receives transactions on the network. Additionally, each wallet can cast exactly one vote for one delegate to forge on their behalf.

Note in particular that private keys and passphrases are not included on this model, as they are never stored in memory at any point during the operation of SmartHoldem Core nodes.

- **address** *the wallet’s address, derived from public key*
- **publicKey** *the wallet’s public key, derived from private key*
- **secondPublicKey** *if the wallet has enabled a second key, that second key is stored here*

### Delegate

Though delegates are treated as their own data type in the SmartHoldem Public API, in their implementation delegates are nothing more than wallets whose owners have registered a delegate username.

They share all fields in common with the Wallet data structure, with a few extra fields:

- **username** *the delegate username of this wallet*
- **address** *the delegate address of this wallet*
- **publicKey** *the delegate public key of this wallet*
- **votes** *the sum of balances of all wallets voting for the delegate*
- **isResigned** *the resignation status of this delegate*
- **blocks**:
**produced** *the total number of blocks produced by the delegate*
**last** *the last block produced by the delegate*
- **production**:
**approval** *the vote share for this delegate*
- **forged**:
**fees** *the forged fees for this delegate*
**rewards** *the forged rewards for this delegate*
**total** *the forged fees and rewards for this delegate*

### Peer

Peers are nodes in the SmartHoldem network that work together to relay transactions and form consent. Each node keeps a list of current peers, regularly pruning and updating the list as new peers join and leave the network.

- **ip** *the IP address of the peer*
- **port** *the port on which the peer has enabled its P2P connection*
- **version** *the network version this peer is operating on*
- **height** *the total height of the blockchain as reported by the peer*
- **latency** *the average delay between contacting the peer and receiving a response*


## JSON Reference

### Block (typical response)

```json
{
  "id": "234cbf055fd3ae0a73f542135d9561a7ecf1b2fc2a14d81adb02cc96bb425652",
  "version": 0,
  "height": 1558858,
  "previous": "cb9efcde4b5926fcc53916beb331178b7a9bbd821eb16a8bae1b616cf0b4deae",
  "forged": {
    "reward": "0",
    "fee": "0",
    "total": "0",
    "amount": "0"
  },
  "payload": {
    "hash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    "length": 0
  },
  "generator": {
    "username": "europa",
    "address": "SaH94CRFvPXTwpgyLSCAsSuyCKJAqWxgo2",
    "publicKey": "035231cc2fccf7fba239b8abb2611def73f0c0a01598164909181eebd544ce114d"
  },
  "signature": "3045022100f6ec49b773523aacd234054157ab73bb71e99bc842d1a00ec7becfa912afac8c…",
  "confirmations": 0,
  "transactions": 0,
  "timestamp": {
    "epoch": 12568400,
    "unix": 1582858800,
    "human": "2020-02-28T02:20:00.000Z"
  }
}
```

### Transaction

```json
{
  "id": "…",
  "blockId": "…",
  "version": 2,
  "type": 0,
  "typeGroup": 1,
  "amount": "100000000",
  "fee": "10000000",
  "sender": "SdrPz…",
  "recipient": "Sg6epK4DXVKVZ2t57kndUZjtjkS2eCYUZ1",
  "signature": "…",
  "signSignature": null,
  "signatures": null,
  "vendorField": "Hello World",
  "asset": {},
  "confirmations": 15,
  "nonce": "42",
  "timestamp": { "epoch": 12568400, "unix": 1582858800, "human": "…" }
}
```

### Wallet

```json
{
  "address": "SaH94CRFvPXTwpgyLSCAsSuyCKJAqWxgo2",
  "publicKey": "035231cc2fccf7fba239b8abb2611def73f0c0a01598164909181eebd544ce114d",
  "secondPublicKey": null,
  "balance": "12350770478424",
  "nonce": "3",
  "attributes": {
    "delegate": {
      "username": "europa",
      "voteBalance": "12350770478424",
      "producedBlocks": 1254,
      "rank": 20
    }
  }
}
```

### Delegate

```json
{
  "username": "europa",
  "address": "SaH94CRFvPXTwpgyLSCAsSuyCKJAqWxgo2",
  "publicKey": "035231cc2fccf7fba239b8abb2611def73f0c0a01598164909181eebd544ce114d",
  "votes": "12350770478424",
  "rank": 20,
  "isResigned": false,
  "blocks": { "produced": 1254, "missed": 3 },
  "production": { "approval": 4.32 },
  "forged": { "fees": "300000000", "rewards": "0", "total": "300000000" }
}
```

### Peer

```json
{
  "ip": "185.203.7.111",
  "port": 6100,
  "version": "2.7.0",
  "height": 1558858,
  "latency": 42
}
```
