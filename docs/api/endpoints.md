---
title: API Endpoints Reference
description: Comprehensive reference for all SmartHoldem Core Public API endpoints — blocks, transactions, delegates, node, peers, votes, HTLC, and wallets.
---

# API Endpoints Reference

Comprehensive reference for the SmartHoldem Core Public API. Every endpoint below is served by any public node — replace `node0.smartholdem.io` with any node from the [public nodes list](./index.md#public-mainnet-nodes) or your own.

Method badges: <span class="badge badge-get">GET</span> <span class="badge badge-post">POST</span>

## Getting Started

This is the reference guide for the Public API. This API exposes all resources and data provided by an SmartHoldem Core node and is the preferred way of interacting with the SmartHoldem network.

You can use public nodes to interact with the blockchain without installing and synchronizing your own node from [https://github.com/smartholdem/sth-core](https://github.com/smartholdem/sth-core).

*For production mode, it is recommended to install your own node.*

**Public SmartHoldem nodes (mainnet):**

- https://node0.smartholdem.io/api/
- https://node1.smartholdem.io/api/
- https://node2.smartholdem.io/api/
- https://node3.smartholdem.io/api/
- https://node4.smartholdem.io/api/
- https://node5.smartholdem.io/api/

## Blockchain

### Retrieve Blockchain State

Used to get the latest block and supply of the blockchain.

#### Endpoint

<span class="badge badge-get">GET</span>

```http
GET https://node0.smartholdem.io/api/blockchain
```

::: details cURL example
```bash
curl -s 'https://node0.smartholdem.io/api/blockchain' | jq
```
:::

## Blocks

Blocks are added every eight seconds to the blockchain by a Delegate Node. Due to network/technical errors, a Delegate might miss a block. The time between two blocks is then 16 seconds, as the round continues to the next Delegate.

All state changes to the blockchain are in the form of blocks they contain a set of transactions and metadata. A block is rejected if one or more of the transactions is invalid or if the metadata is invalid. Thus a block returned from the Public API is always valid.

### List All Blocks

The Public API may be used to query for blocks. This dataset contains millions of blocks, this for analytical purposes, we recommend

<span class="badge badge-get">GET</span>

```http
GET https://node0.smartholdem.io/api/blocks?page=1&limit=100
```

::: details cURL example
```bash
curl -s 'https://node0.smartholdem.io/api/blocks?page=1&limit=100' | jq
```
:::

#### Query Parameters

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| page | The number of the page that will be returned. | no | 1 |
| limit | The number of resources per page. | no | 100 |
| offset | The number of resources to be skipped. | no |   |
| transform | The structure of response to be retrieved. | no |   |
| orderBy | The column and order by which the resources will be sorted. | no |   |
| id | The identifier of the block to be retrieved. | no |   |
| height | The height of the block to be retrieved. | no |   |
| height.from | The height from which blocks will be retrieved. | no |   |
| height.to | The height to which blocks will be retrieved. | no |   |
| timestamp | The timestamp of the block to be retrieved. | no |   |
| timestamp.from | The timestamp from which blocks will be retrieved. | no |   |
| timestamp.to | The timestamp to which blocks will be retrieved. | no |   |

### First block

Retrieve first block.

#### Endpoint

<span class="badge badge-get">GET</span>

```http
GET https://node0.smartholdem.io/api/blocks/{id|height}
```

::: details cURL example
```bash
curl -s 'https://node0.smartholdem.io/api/blocks/{id|height}' | jq
```
:::

#### Path Parameters

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| id | The identifier of the block to be retrieved. | no |   |
| height | The height of the block to be retrieved. | no |   |

#### Query Parameters

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| transform | The structure of response to be retrieved. | no |   |

### All Transactions in a Block

Instead of deserializing the block’s payload, you can also obtain the transactions of each block as proper transaction objects directly.

#### Endpoint

<span class="badge badge-get">GET</span>

```http
GET https://node0.smartholdem.io/api/blocks/{blockId|height}/transactions?page=1&limit=100
```

::: details cURL example
```bash
curl -s 'https://node0.smartholdem.io/api/blocks/{blockId|height}/transactions?page=1&limit=100' | jq
```
:::

#### Path Parameters

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| blockId | The identifier of the block to be retrieved. | no |   |
| height | The height of the block to be retrieved. | no |   |

#### Query Parameters

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| page | The number of the page that will be returned. | no | 1 |
| limit | The number of resources per page. | no | 100 |
| offset | The number of resources to be skipped. | no |   |
| transform | The structure of response to be retrieved. | no |   |
| orderBy | The column and order by which the resources will be sorted. | no |   |
| id | The identifier of the transaction to be retrieved. | no |   |
| senderPublicKey | The sender public key of the transactions to be retrieved. | no |   |
| recipientId | The recipient address of the transactions to be retrieved. | no |   |
| vendorField | The vendor field (memo) of the transactions to be retrieved. | no |   |

## Transactions

Transactions are signed, serialized payloads, batched together to form a block.

### All Transactions

The paginated API is used to query for multiple transactions. You can apply *filters* through the query parameter to search for specific transactions.

<span class="badge badge-get">GET</span>

```http
GET https://node0.smartholdem.io/api/transactions?page=1&limit=100
```

::: details cURL example
```bash
curl -s 'https://node0.smartholdem.io/api/transactions?page=1&limit=100' | jq
```
:::

**Query Parameters**

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| page | The number of the page that will be returned. | no | 1 |
| limit | The number of resources per page. | no | 100 |
| offset | The number of resources to be skipped. | no |   |
| transform | The structure of response to be retrieved. | no |   |
| orderBy | The column by which the resources will be sorted. | no |   |
| address | The sender or recipient address of transaction to be retrieved. | no |   |
| senderId | The sender address of transaction to be retrieved. | no |   |
| senderPublicKey | The sender public key of transaction to be retrieved. | no |   |
| recipientId | The recipient address of transaction to be retrieved. | no |   |
| id | The id of transaction to be retrieved. | no |   |
| version | The version of transaction to be retrieved. | no |   |
| blockId | The block id of transaction to be retrieved. | no |   |
| sequence | The sequence of transaction to be retrieved. | no |   |
| sequence.from | The minimum sequence of transaction to be retrieved. | no |   |
| sequence.to | The maximum sequence of transaction to be retrieved. | no |   |
| timestamp | The timestamp of transaction to be retrieved. | no |   |
| timestamp.from | The minimum timestamp of transaction to be retrieved. | no |   |
| timestamp.to | The maximum timestamp of transaction to be retrieved. | no |   |
| nonce | The nonce of transaction to be retrieved. | no |   |
| nonce.from | The minimum nonce of transaction to be retrieved. | no |   |
| nonce.to | The maximum nonce of transaction to be retrieved. | no |   |
| type | The type of transaction to be retrieved. | no |   |
| typeGroup | The typeGroup of transaction to be retrieved. | no |   |
| vendorField | The vendorField (memo) of transaction to be retrieved. | no |   |
| amount | The amount of transaction to be retrieved. | no |   |
| amount.from | The minimum amount of transaction to be retrieved. | no |   |
| amount.to | The maximum amount of transaction to be retrieved. | no |   |
| fee | The fee of transaction to be retrieved. | no |   |
| fee.from | The minimum fee of transaction to be retrieved. | no |   |
| fee.to | The maximum fee of transaction to be retrieved. | no |   |
| asset | The asset of transaction to be retrieved. | no |   |

### Get Transaction

Obtaining a transaction by ID does not require advanced logic; as the API does not return a serialized transaction, but a nicer [DTO](https://en.wikipedia.org/wiki/Data_transfer_object)

<span class="badge badge-get">GET</span>

```http
GET https:///node0smartholdem.io/api/transactions/{id}
```

::: details cURL example
```bash
curl -s 'https:///node0smartholdem.io/api/transactions/{id}' | jq
```
:::

#### Path Parameters

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| id | The identifier of the transaction to be retrieved. | no |   |

### All Unconfirmed Transaction

Unconfirmed transactions have not been incorporated in the blockchain, but reside in the mempool. Although usually the mempool is cleared within minutes, during high network load a transaction with a low fee will live here for a considerable time. If you have set the transaction with a fee of near zero, it might not be picked up by a Delegate and will time out.

<span class="badge badge-get">GET</span>

```http
GET https://node0.smartholdem.io.io/api/transactions/unconfirmed?page=1&limit=100
```

::: details cURL example
```bash
curl -s 'https://node0.smartholdem.io.io/api/transactions/unconfirmed?page=1&limit=100' | jq
```
:::

#### Query Parameters

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| page | The number of the page that will be returned. | no | 1 |
| limit | The number of resources per page. | no | 100 |
| offset | The number of resources to be skipped. | no |   |
| transform | The structure of response to be retrieved. | no |   |
| orderBy | The column by which the resources will be sorted. | no |   |

### Get an Unconfirmed Transaction

As with confirmed transactions, you may query for unconfirmed transactions directly.

<span class="badge badge-get">GET</span>

```http
GET https://node0.smartholdem.io/api/transactions/unconfirmed/{id}
```

::: details cURL example
```bash
curl -s 'https://node0.smartholdem.io/api/transactions/unconfirmed/{id}' | jq
```
:::

#### Path Parameters

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| id | The identifier of the transaction to be retrieved. | no |   |

### Broadcast Transactions

Creating the correct payload for a transaction is non-trivial, as it requires cryptographic functions and a specific serialization protocol. Our crypto SDKs provide the functionality needed in most major programming languages. You can read more about it in the send transaction section.

<span class="badge badge-post">POST</span>

```http
POST https://node0.smartholdem.io/api/transactions
```

::: details cURL example
```bash
curl -s -X POST -H 'Content-Type: application/json' \
  -d '{"transactions":[]}' \
  'https://node0.smartholdem.io/api/transactions' | jq
```
:::

#### Body Parameters

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| transactions | The list of transactions to broadcast. | yes |   |

### Transaction Fees (Non-Dynamic)

The static transaction fees are significantly higher than the dynamic transaction fees. Use the node api to find dynamic fees, and prefer using these.

<span class="badge badge-get">GET</span>

```http
GET https://node0.smartholdem.io/api/transactions/fees
```

::: details cURL example
```bash
curl -s 'https://node0.smartholdem.io/api/transactions/fees' | jq
```
:::

### Transaction Types

The transaction types are network specific. SmartHoldem currently supports eight different types, but BridgeChains may define more or less if needed for their business purpose.

<span class="badge badge-get">GET</span>

```http
GET https://node0.smartholdem.io/api/transactions/types
```

::: details cURL example
```bash
curl -s 'https://node0.smartholdem.io/api/transactions/types' | jq
```
:::

### Transaction Schemas

Get transaction schemas.

<span class="badge badge-get">GET</span>

```http
GET https://node0.smartholdem.io/api/transactions/schemas
```

::: details cURL example
```bash
curl -s 'https://node0.smartholdem.io/api/transactions/schemas' | jq
```
:::

## Delegates

Delegates are regular wallets (addresses) which have registered themselves eligible to become a Delegate by a registration transaction. If a Delegate is among the top 21 highest voted (by staked [STH](/en/articles/sth)), it may run a forging Node, which produces a single block per round, awarding the Delegate any transaction fees included in that block.

Genesis Delegates are the initial, virtualized Delegates. They were not registered nor voted in, and in the SmartHoldem mainnet has been replaced by actual Delegates a long time ago.

### All Delegates

You can obtain all Delegates through this paginated API. Note that all registered Delegates are returned in this response, not just the top 21 forging Delegates. If a Delegate Node is offline, it is still returned through this API; as the `delegate` resource is not concerned with the actual nodes, only with the on-chain registrations and wallets.

<span class="badge badge-get">GET</span>

```http
GET https://node0.smartholdem.io/api/delegates?page=1&limit=100
```

::: details cURL example
```bash
curl -s 'https://node0.smartholdem.io/api/delegates?page=1&limit=100' | jq
```
:::

**Query Parameters**

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| page | The number of the page that will be returned. | no | 1 |
| limit | The number of resources per page. | no | 100 |
| offset | The number of resources to be skipped. | no |   |
| orderBy | The column and order by which the resources will be sorted. | no |   |
| username | The username of the delegate to be retrieved. | no |   |
| address | The address of the delegate to be retrieved. | no |   |
| publicKey | The public key of the delegate to be retrieved. | no |   |
| votes | The votes of the delegate to be retrieved. | no |   |
| votes.from | The minimum votes of the delegates to be retrieved. | no |   |
| votes.to | The maximum votes of the delegates to be retrieved. | no |   |
| isResigned | The resignation status of the delegate to be retrieved. | no |   |
| blocks.produced | The number of produced blocks of the delegate to be retrieved. | no |   |
| blocks.produced.from | The minimum number of produced blocks of the delegate to be retrieved. | no |   |
| blocks.produced.to | The minimum number of produced blocks of the delegate to be retrieved. | no |   |
| blocks.last.id | The last produced block id of the delegate to be retrieved. | no |   |
| blocks.last.height | The last produced block height of the delegate to be retrieved. | no |   |
| blocks.last.timestamp.epoch | The last produced block epoch timestamp of the delegate to be retrieved. | no |   |
| blocks.last.timestamp.epoch.from | The minimum last produced block epoch timestamp of the delegate to be retrieved. | no |   |
| blocks.last.timestamp.epoch.to | The maximum last produced block epoch timestamp of the delegate to be retrieved. | no |   |
| blocks.last.timestamp.unix | The last produced block unix timestamp of the delegate to be retrieved. | no |   |
| blocks.last.timestamp.unix.from | The minimum last produced unix epoch timestamp of the delegate to be retrieved. | no |   |
| blocks.last.timestamp.unix.to | The maximum last produced unix epoch timestamp of the delegate to be retrieved. | no |   |
| blocks.last.timestamp.human | The last produced block timestamp of the delegate to be retrieved. | no |   |
| production.approval | The production approval rate of the delegate to be retrieved. | no |   |
| production.approval.from | The minimum production approval rate of the delegate to be retrieved. | no |   |
| production.approval.to | The maximum production approval rate of the delegate to be retrieved. | no |   |
| forged.fees | The forged fees of the delegate to be retrieved. | no |   |
| forged.fees.from | The minimum forged fees of the delegate to be retrieved. | no |   |
| forged.fees.to | The maximum forged fees of the delegate to be retrieved. | no |   |
| forged.rewards | The forged rewards of the delegate to be retrieved. | no |   |
| forged.rewards.from | The minimum forged rewards of the delegate to be retrieved. | no |   |
| forged.rewards.to | The maximum forged rewards of the delegate to be retrieved. | no |   |
| forged.total | The forged fees and rewards of the delegate to be retrieved. | no |   |
| forged.total.from | The minimum forged fees and rewards of the delegate to be retrieved. | no |   |
| forged.total.to | The maximum forged fees and rewards of the delegate to be retrieved. | no |   |

### Retrieve a Delegate

You can query for a specific delegate by username, address, and public key, thus the following queries will result in an identical response. Note that public keys are always known for delegates, as they have previously transmitted a registration transaction. This is not the case for regular wallets.

<span class="badge badge-get">GET</span>

```http
GET https://node0.smartholdem.io/api/delegates/1
```

::: details cURL example
```bash
curl -s 'https://node0.smartholdem.io/api/delegates/1' | jq
```
:::

#### Path Parameters

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| address | The address of the delegate to be retrieved. | no | 1 |
| publicKey | The public key of the delegate to be retrieved. | no |   |
| username | The username of the delegate to be retrieved. | no | technolog |

### All Voters of a Delegate

Obtaining the voters of a Delegate is trivial as well. This endpoint returns **active** voters. To acquire historical voters, it is better to query the database directly.

<span class="badge badge-get">GET</span>

```http
GET https://node0.smartholdem.io/api/delegates/1/voters?page=1
```

::: details cURL example
```bash
curl -s 'https://node0.smartholdem.io/api/delegates/1/voters?page=1' | jq
```
:::

#### Path Parameters

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| delegateAddress | The address of the delegate to be retrieved. | no | 1 |
| delegatePublicKey | The public key of the delegate to be retrieved. | no |   |
| delegateUsername | The username of the delegate to be retrieved. | no | technolog |
| address | The address of the voter to be retrieved. | no |   |
| publicKey | The public key of the voter to be retrieved. | no |   |
| balance | The balance of the voter to be retrieved. | no |   |
| balance.from | The minimum balance of the voter to be retrieved. | no |   |
| balance.to | The maximum balance of the voter to be retrieved. | no |   |
| nonce | The nonce of the voter to be retrieved. | no |   |
| nonce.from | The minimum nonce of the voter to be retrieved. | no |   |
| nonce.to | The maximum nonce of the voter to be retrieved. | no |   |

**Query Parameters**

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| page | The number of the page that will be returned. | no | 1 |
| limit | The number of resources per page. | no | 100 |
| offset | The number of resources to be skipped. | no |   |
| orderBy | The column and order by which the resources will be sorted. | no |   |

### All Blocks of a Delegate

The delegate resource allows you to obtain blocks from a specific Delegate. This is the equivalent of searching for blocks using the generatorPublicKey.

<span class="badge badge-get">GET</span>

```http
GET https://node0.smartholdem.io/api/delegates/1/blocks?page=1&limit=100
```

::: details cURL example
```bash
curl -s 'https://node0.smartholdem.io/api/delegates/1/blocks?page=1&limit=100' | jq
```
:::

**Path Parameters**

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| delegateAddress | The address of the delegate to be retrieved. | no | 1 |
| delegatePublicKey | The public key of the delegate to be retrieved. | no |   |
| delegateUsername | The username of the delegate to be retrieved. | no | technolog |

**Query Parameters**

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| page | The number of the page that will be returned. | no | 1 |
| limit | The number of resources per page. | no | 100 |
| offset | The number of resources to be skipped. | no |   |
| transform | The structure of response to be retrieved. | no |   |
| orderBy | The column and order by which the resources will be sorted. | no |   |

## Entities

### All Entities

The paginated API is used to query for multiple entities. You can apply *filters* through the query parameter to search for specific entities.

<span class="badge badge-get">GET</span>

```http
GET https://node0.smartholdem.io/api/entities?page=1&limit=100
```

::: details cURL example
```bash
curl -s 'https://node0.smartholdem.io/api/entities?page=1&limit=100' | jq
```
:::

#### Query Parameters

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| page | The number of the page that will be returned. | no | 1 |
| limit | The number of resources per page. | no | 100 |
| offset | The number of resources to be skipped. | no |   |
| orderBy | The column and order by which the resources will be sorted. | no |   |
| id | The entity id to be retrieved. | no |   |
| address | The address for which entities are to be retrieved. | no |   |
| publicKey | The public key for which entities are to be retrieved. | no |   |
| isResigned | The flag to indicate that resigned entities should be retrieved. | no |   |
| type | The type of entities to be retrieved. | no |   |
| subType | The sub-type of entities to be retrieved. | no |   |
| data.name | The name of the entities to be retrieved. | no |   |
| data.ipfsData | The IPFS Hash of the entities to be retrieved. | no |   |

### Retrieve an Entity

Specific entities can be retrieved by the ID of their registration transaction.

<span class="badge badge-get">GET</span>

```http
GET https://node0.smartholdem.io/api/entities/{id}
```

::: details cURL example
```bash
curl -s 'https://node0.smartholdem.io/api/entities/{id}' | jq
```
:::

**Path Parameters**

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| id | The identifier of the registration transaction of the entity to be retrieved. | no |   |

## Node

The `node` resource is useful for service discovery, health checks, and obtaining network configurations, such as fees, API, and token information.

### Configuration

Used to access a Node’s configuration and the network it is attached to (identified by the `nethash`).

<span class="badge badge-get">GET</span>

```http
GET https://node0.smartholdem.io/api/node/configuration
```

::: details cURL example
```bash
curl -s 'https://node0.smartholdem.io/api/node/configuration' | jq
```
:::

### Cryptography Configuration

Used to access a Node’s configuration for the `@smartholdem/crypto` package that handles all cryptography operations.

<span class="badge badge-get">GET</span>

```http
GET https://node0.smartholdem.io/api/node/configuration/crypto
```

::: details cURL example
```bash
curl -s 'https://node0.smartholdem.io/api/node/configuration/crypto' | jq
```
:::

### Fee Statistics

Used to access a Node’s fee statistics. By default, this endpoint returns calculations based on the 20 most-recent transactions for each type. Also note while using the `days` query that statistics may not be available for all transaction-types over a given period of time.

<span class="badge badge-get">GET</span>

```http
GET https://node0.smartholdem.io/api/node/fees
```

::: details cURL example
```bash
curl -s 'https://node0.smartholdem.io/api/node/fees' | jq
```
:::

**Query Parameters**

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| days | The number of days [1-30] to search. | no |   |

### Status

The status allows for health checking, showing if the node is in sync with the network.

<span class="badge badge-get">GET</span>

```http
GET https://node0.smartholdem.io/api/node/status
```

::: details cURL example
```bash
curl -s 'https://node0.smartholdem.io/api/node/status' | jq
```
:::

### Syncing Status

The `syncing` resource is very much alike `node/status`, providing information on the syncing progress. If a node is not syncing but significantly behind in blocks, it might be time to perform a check.

<span class="badge badge-get">GET</span>

```http
GET https://node0.smartholdem.io/api/node/syncing
```

::: details cURL example
```bash
curl -s 'https://node0.smartholdem.io/api/node/syncing' | jq
```
:::

## Peers

The peers resource is much like the node resource, but only exposes the IPs and ports of connected peers. Recursively traversing this API and its responses allow you to inspect the entire network.

### List All Peers

Returns all peers known by the Node. These are not necessarily all peers; only public Nodes appear here.

<span class="badge badge-get">GET</span>

```http
GET https://node0.smartholdem.io/api/peers?page=1&limit=100
```

::: details cURL example
```bash
curl -s 'https://node0.smartholdem.io/api/peers?page=1&limit=100' | jq
```
:::

#### Query Parameters

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| page | The number of the page that will be returned. | no | 1 |
| limit | The number of resources per page. | no | 100 |
| offset | The number of resources to be skipped. | no |   |
| orderBy | The column and order by which the resources will be sorted. | no |   |
| version | The node version by which the resources will be filtered. | no |   |

### Peer

Specific peers can be found by IP address. Note that a peer may have their Public API disabled, and thus they are only reachable by the internal `p2p` API.

<span class="badge badge-get">GET</span>

```http
GET https://node0.smartholdem.io/api/peers/{ip}
```

::: details cURL example
```bash
curl -s 'https://node0.smartholdem.io/api/peers/{ip}' | jq
```
:::

#### Path Parameters

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| ip | The IP address of the peer to be retrieved. | no | 1 |

## Votes

A vote is a specific type of transaction (type 3). A wallet votes on a different wallet, which has registered itself eligible to become a Delegate. Wallets may vote for themselves.

### All Votes

All voting transactions may be obtained through this API. This is the equivalent of `transactions/search` with the body parameter `type: 3`.

#### Query Parameters

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| page | The number of the page that will be returned. | no | 1 |
| limit | The number of resources per page. | no | 100 |
| offset | The number of resources to be skipped. | no |   |
| transform | The structure of response to be retrieved. | no |   |
| orderBy | The column by which the resources will be sorted. | no |   |

### Vote

Votes may be retrieved using their transaction ID. Note the `asset` field, which contains the `votes` object. The first character of each item in the array indicates if it was a vote: `+`, or unvote: `-`, followed by the public key of the Delegate.

<span class="badge badge-get">GET</span>

```http
GET https://node0.smartholdem.io/api/votes/5631f0807ac68ba3607d52a587a1c3ecc9ad31386effe564e6f4e31b1c0bfa6d
```

::: details cURL example
```bash
curl -s 'https://node0.smartholdem.io/api/votes/5631f0807ac68ba3607d52a587a1c3ecc9ad31386effe564e6f4e31b1c0bfa6d' | jq
```
:::

#### Path Parameters

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| id | The identifier of the vote to be retrieved. | no | 5631f0807ac68ba3607d52a587a1c3ecc9ad31386effe564e6f4e31b1c0bfa6d |

## HTLC Transactions

HTLC - Hash Time-Locked Contracts transactions enable two parties to exchange tokens safely and securely at the protocol level, removing the need to trust an individual who could potentially be a bad actor and withdraw from a prior agreement once they have received their tokens. Locked funds can be transfer to another party using claim transactions, or refunded to the sender after the HTLC transaction’s expiration.

### Open HTLC Lock transactions

The paginated API is used to query for multiple HTLC Locs transactions. You can apply *filters* through the query parameter to search for specific transactions.

<span class="badge badge-get">GET</span>

```http
GET https://node0.smartholdem.io/api/locks?page=1&limit=100
```

::: details cURL example
```bash
curl -s 'https://node0.smartholdem.io/api/locks?page=1&limit=100' | jq
```
:::

#### Query Parameters

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| page | The number of the page that will be returned. | no | 1 |
| limit | The number of resources per page. | no | 100 |
| offset | The number of resources to be skipped. | no |   |
| orderBy | The column by which the resources will be sorted. | no |   |
| lockId | The lock id of transaction to be retrieved. | no |   |
| senderPublicKey | The sender public key of transaction to be retrieved. | no |   |
| recipientId | The recipient address of transaction to be retrieved. | no |   |
| isExpired | The expired status of transaction to be retrieved. | no |   |
| expirationType | The expiration type of transaction to be retrieved. | no |   |
| expirationValue | The expiration value of transaction to be retrieved. | no |   |
| expirationValue.from | The minimum expiration value of transaction to be retrieved. | no |   |
| expirationValue.to | The maximum expiration value of transaction to be retrieved. | no |   |
| secretHash | The secret hash of transaction to be retrieved. | no |   |
| amount | The amount of transaction to be retrieved. | no |   |
| amount.from | The minimum amount of transaction to be retrieved. | no |   |
| amount.to | The maximum amount of transaction to be retrieved. | no |   |
| timestamp.epoch | The epoch timestamp of the transaction to be retrieved. | no |   |
| timestamp.epoch.from | The minimum epoch timestamp of the transaction to be retrieved. | no |   |
| timestamp.epoch.to | The maximum epoch timestamp of the transaction to be retrieved. | no |   |
| timestamp.unix | The unix timestamp of the transaction to be retrieved. | no |   |
| timestamp.unix.from | The minimum unix timestamp of the transaction to be retrieved. | no |   |
| timestamp.unix.to | The maximum unix timestamp of the transaction to be retrieved. | no |   |
| timestamp.human | The human timestamp of the transaction to be retrieved. | no |   |
| vendorField | The vendorField of transaction to be retrieved. | no |   |

### HTLC transaction

Specific HTLC transactions can be obtained by its `lockId`.

<span class="badge badge-get">GET</span>

```http
GET https://node0.smartholdem.io/api/locks/{id}
```

::: details cURL example
```bash
curl -s 'https://node0.smartholdem.io/api/locks/{id}' | jq
```
:::

#### Path Parameters

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| id | The lockId of the HTLC to be retrieved. | no |   |

### HTLC Lock transactions

The paginated API is used to query for multiple HTLC Lock transactions. You can apply ‘filters’ through the query parameter to search for specific transactions.

<span class="badge badge-post">POST</span>

```http
POST https://node0.smartholdem.io/api/locks/unlocked?page=1&limit=100
```

::: details cURL example
```bash
curl -s -X POST -H 'Content-Type: application/json' \
  -d '{"transactions":[]}' \
  'https://node0.smartholdem.io/api/locks/unlocked?page=1&limit=100' | jq
```
:::

#### Query Parameters

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| page | The number of the page that will be returned. | no | 1 |
| limit | The number of resources per page. | no | 100 |
| offset | The number of resources to be skipped. | no |   |
| orderBy | The column by which the resources will be sorted. | no |   |

#### Body Parameters

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| id | The ids of locks that will be returned. | no |   |

## Wallets

A Wallet resource is reachable using an associated Address or PublicKey.

### All Wallets

A paginated API is provided to obtain all wallets, including empty ones.

<span class="badge badge-get">GET</span>

```http
GET https://node0.smartholdem.io/api/wallets?page=1&limit=100
```

::: details cURL example
```bash
curl -s 'https://node0.smartholdem.io/api/wallets?page=1&limit=100' | jq
```
:::

#### Query Parameters

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| page | The number of the page that will be returned. | no | 1 |
| limit | The number of resources per page. | no | 100 |
| offset | The number of resources to be skipped. | no |   |
| orderBy | The column and order by which the resources will be sorted. | no |   |
| address | The address of the wallet to be retrieved. | no |   |
| publicKey | The public key of the wallet to be retrieved. | no |   |
| balance | The balance of the wallet to be retrieved. | no |   |
| balance.from | The minimum balance of the wallet to be retrieved. | no |   |
| balance.to | The maximum balance of the wallet to be retrieved. | no |   |
| nonce | The nonce of the wallet to be retrieved. | no |   |
| nonce.from | The minimum nonce of the wallet to be retrieved. | no |   |
| nonce.to | The maximum nonce of the wallet to be retrieved. | no |   |
| attributes | The attributes of the wallet to be retrieved. | no |   |

### Wallet

Specific wallets can be obtained either by their `publicKey` or `address`.

<span class="badge badge-get">GET</span>

```http
GET https://node0.smartholdem.io/api/wallets/{id}
```

::: details cURL example
```bash
curl -s 'https://node0.smartholdem.io/api/wallets/{id}' | jq
```
:::

#### Path Parameters

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| id | The identifier of the wallet to be retrieved. | no |   |

### All Transactions of a Wallet

All transactions belonging to a wallet can be obtained using this API. Equivalent to `/transactions` with parameter `address`.

<span class="badge badge-get">GET</span>

```http
GET https://node0.smartholdem.io/api/wallets/{walletId}/transactions?page=1&limit=100
```

::: details cURL example
```bash
curl -s 'https://node0.smartholdem.io/api/wallets/{walletId}/transactions?page=1&limit=100' | jq
```
:::

#### Path Parameters

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| walletId | The identifier of the wallet to be retrieved. | no |   |

#### Query Parameters

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| page | The number of the page that will be returned. | no | 1 |
| limit | The number of resources per page. | no | 100 |
| offset | The number of resources to be skipped. | no |   |
| transform | The structure of response to be retrieved. | no |   |
| orderBy | The column by which the resources will be sorted. | no |   |

### All Sent Transactions of a Wallet

Outgoing transactions can be obtained as well, Equivalent to `/transactions` with parameter `senderId` set.

<span class="badge badge-get">GET</span>

```http
GET https://node0.smartholdem.io/api/wallets/{id}/transactions/sent?page=1&limit=100
```

::: details cURL example
```bash
curl -s 'https://node0.smartholdem.io/api/wallets/{id}/transactions/sent?page=1&limit=100' | jq
```
:::

#### Path Parameters

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| id | The identifier of the wallet to be retrieved. | no |   |

#### Query Parameters

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| page | The number of the page that will be returned. | no | 1 |
| limit | The number of resources per page. | no | 100 |
| offset | The number of resources to be skipped. | no |   |
| transform | The structure of response to be retrieved. | no |   |
| orderBy | The column by which the resources will be sorted. | no |   |

### All Received Transactions of a Wallet

Incoming transactions can be obtained as well, Equivalent to `/transactions` with parameter `recipientId` set.

<span class="badge badge-get">GET</span>

```http
GET https://node0.smartholdem.io/api/wallets/{id}/transactions/received?page=1&limit=100
```

::: details cURL example
```bash
curl -s 'https://node0.smartholdem.io/api/wallets/{id}/transactions/received?page=1&limit=100' | jq
```
:::

#### Path Parameters

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| id | The identifier of the wallet to be retrieved. | no |   |

#### Query Parameters

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| page | The number of the page that will be returned. | no | 1 |
| limit | The number of resources per page. | no | 100 |
| offset | The number of resources to be skipped. | no |   |
| transform | The structure of response to be retrieved. | no |   |
| orderBy | The column by which the resources will be sorted. | no |   |

### All Votes of a Wallet

Returns all votes made by the wallet. Often users create a new wallet instead of recasting their vote, as the former was historically cheaper. Equivalent to `/transactions` with parameter `senderId` and vote `type` set.

<span class="badge badge-get">GET</span>

```http
GET https://node0.smartholdem.io/api/wallets/{id}/votes?page=1&limit=100
```

::: details cURL example
```bash
curl -s 'https://node0.smartholdem.io/api/wallets/{id}/votes?page=1&limit=100' | jq
```
:::

#### Path Parameters

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| id | The identifier of the wallet to be retrieved. | no |   |

#### Query Parameters

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| page | The number of the page that will be returned. | no | 1 |
| limit | The number of resources per page. | no | 100 |
| offset | The number of resources to be skipped. | no |   |
| transform | The structure of response to be retrieved. | no |   |
| orderBy | The column by which the resources will be sorted. | no |   |

### All Lock Transactions of a Wallet

All lock transactions belonging to a wallet can be obtained using this API. Equivalent to `/locks` with parameter `senderPublicKey`.

<span class="badge badge-get">GET</span>

```http
GET https://node0.smartholdem.io/api/wallets/{walletId}/locks?page=1&limit=100
```

::: details cURL example
```bash
curl -s 'https://node0.smartholdem.io/api/wallets/{walletId}/locks?page=1&limit=100' | jq
```
:::

#### Path Parameters

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| walletId | The identifier of the wallet to be retrieved. | no |   |

#### Query Parameters

| Name | Description | Required | Example |
| --- | --- | --- | --- |
| page | The number of the page that will be returned. | no | 1 |
| limit | The number of resources per page. | no | 100 |
| offset | The number of resources to be skipped. | no |   |
| orderBy | The column and order by which the resources will be sorted. | no |   |
