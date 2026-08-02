---
title: Real-World Examples
description: Six complete recipes — Transfer, Delegate Registration, Vote, Multi-Payment, HTLC (Lock/Claim/Refund), and New Wallet — copy-paste ready.
---

# Real-World Examples

End-to-end, runnable snippets combining the [Client SDK](./client) and the [Crypto SDK](./crypto). Every example follows the same **5-step lifecycle** below.

## The 5-Step Transaction Lifecycle

Every state-changing operation on the SmartHoldem blockchain follows this pattern:

1. **Install & Configure the Client SDK** — pick a public node (or your own), keep a fallback URL handy.
2. **Configure the Crypto SDK** — set the network preset to `mainnet` and pin the current block height so version-2 transactions are enabled.
3. **Retrieve the sender wallet's current nonce** and add `1` (see [Transaction Nonce](/core/nonce)).
4. **Build & sign** the transaction via `Transactions.BuilderFactory` — this produces a signed JSON payload.
5. **Broadcast** via `client.api('transactions').create({ transactions: [signedJson] })`.

::: warning Wrong network preset = rejected transactions
If your Crypto SDK is not configured with the correct network preset **and block height**, you will see errors like *"Transaction Version 2 is not supported"*. Always call `Managers.configManager.setFromPreset('mainnet')` **and** `Managers.configManager.setHeight(1500000)` before building.
:::

```javascript
const { Managers } = require('@smartholdem/crypto')

Managers.configManager.setFromPreset('mainnet')
Managers.configManager.setHeight(1500000)
```

---

### Prerequisites

Before we get started we need to make sure that all of the required dependencies are installed. These dependencies are the Crypto SDK and Client SDK. You can head on over to their documentations to read more about them but for now we are only concerned with installing them to get up and running.

#### yarn

```javascript
yarn add @smartholdem/crypto
yarn add @smartholdem/client
```

#### pnpm

```javascript
pnpm add @smartholdem/crypto
pnpm add @smartholdem/client
```

#### npm

```javascript
npm install @smartholdem/crypto
npm install @smartholdem/client
```

Now that we’re setup and ready to go we’ll look into some examples for the most common tasks you’ll encounter when wanting to interact with the SmartHoldem Blockchain.

### Persisting your transaction on the blockchain

The process of getting your transaction verified and persisted on the SmartHoldem Blockchain involves a few steps with which our SDKs will help you but lets break them down to get a better idea of what is happening.

1. Install the Client SDK and configure it to use a node of your choosing to broadcast your transactions to. Always make sure that you have a fallback node that you can use for broadcasting in case your primary node goes offline or acts strange otherwise.
2. Install the Crypto SDK and configure it to match the configuration of the network. This is the most important part as misconfiguration can lead to a myriad of issues as Core will reject your transactions.
3. Retrieve the [nonce](/en/core/nonce) of the sender wallet and increase it by 1. You can read about what a sequential [nonce](/en/core/nonce) is and why it is important here.
4. Create an instance of the builder for the type of transaction you want to create. This is the step where we actually create a transaction and sign it so that the SmartHoldem Blockchain can later on verify it and decide if it will be accepted, forged and finally. You can read the relevant API documentation if you want more detailed information about the design and usage.
5. Turn the newly created transaction into JSON and broadcast it to the network through the Client SDK. You can read the relevant API documentation if you want more detailed information about the design and usage.
6. Process the API response and verify that your transaction was accepted. If the network rejects your transaction you’ll receive the reason as to why that is the case in the response which might mean that you need to create a new transaction and broadcast it.

### Troubleshooting

A common issue when trying to get your transaction onto the blockchain is that you’ll receive an error to the effect of **Transaction Version 2 is not supported** which indicates that your Crypto SDK configuration might be wrong.

The solution to this is to make sure that your Crypto SDK instance is properly configured. This includes both the network preset and the height it’s configured to assume the network has passed, if any of those don’t match up you’ll encounter the aforementioned issue with the version of your transactions.

#### Mainnet

```javascript
Managers.configManager.setFromPreset("mainnet");
Managers.configManager.setHeight(1500000);
```

### Transfer

```javascript
const { Transactions, Managers, Utils } = require("@smartholdem/crypto");
const { Connection } = require("@smartholdem/client");
 
// Configure our API client
const client = new Connection("https://node0.smartholdem.io/api");
 
Managers.configManager.setFromPreset("mainnet");
Managers.configManager.setHeight(1500000);
 
(async () => {
    // Step 1: Retrieve the incremental nonce of the sender wallet
    const senderWallet = await client.api("wallets").get("YOUR_SENDER_WALLET_ADDRESS");
    const senderNonce = Utils.BigNumber.make(senderWallet.body.data.nonce).plus(1);
 
    // Step 2: Create the transaction
    const transaction = Transactions.BuilderFactory.transfer()
        .version(2)
        .nonce(senderNonce.toFixed())
        .recipientId("Address of Recipient")
        .amount(1 * 1e8)
        .vendorField("Hello World")
        .sign("this is a top secret passphrase");
 
    // Step 4: Broadcast the transaction
    const broadcastResponse = await client.api("transactions").create({ transactions: [transaction.build().toJson()] });
 
    // Step 5: Log the response
    console.log(JSON.stringify(broadcastResponse.body.data, null, 4))
})();
```

> The vendorField is optional and limited to a length of 255 characters. It can be a good idea to add a vendor field to your transactions if you want to be able to easily track them in the future.

### Second Signature

```javascript
const { Transactions, Managers, Utils } = require("@smartholdem/crypto");
const { Connection } = require("@smartholdem/client");
 
// Configure our API client
const client = new Connection("https://node0.smartholdem.io/api");
 

Managers.configManager.setFromPreset("mainnet");
Managers.configManager.setHeight(1500000);
 
(async () => {
    // Step 1: Retrieve the incremental nonce of the sender wallet
    const senderWallet = await client.api("wallets").get("YOUR_SENDER_WALLET_ADDRESS");
    const senderNonce = Utils.BigNumber.make(senderWallet.body.data.nonce).plus(1);
 
    // Step 2: Create the transaction
    const transaction = Transactions.BuilderFactory.secondSignature()
        .version(2)
        .nonce(senderNonce.toFixed())
        .signatureAsset("this is a top secret second passphrase")
        .sign("this is a top secret passphrase");
 
    // Step 4: Broadcast the transaction
    const broadcastResponse = await client.api("transactions").create({ transactions: [transaction.build().toJson()] });
 
    // Step 5: Log the response
    console.log(JSON.stringify(broadcastResponse.body.data, null, 4))
})();
```

### Delegate Registration

```javascript
const { Transactions, Managers, Utils } = require("@smartholdem/crypto");
const { Connection } = require("@smartholdem/client");
 
// Configure our API client
const client = new Connection("https://node0.smartholdem.io/api");
 

Managers.configManager.setFromPreset("mainnet");
Managers.configManager.setHeight(1500000);
 
(async () => {
    // Step 1: Retrieve the incremental nonce of the sender wallet
    const senderWallet = await client.api("wallets").get("YOUR_SENDER_WALLET_ADDRESS");
    const senderNonce = Utils.BigNumber.make(senderWallet.body.data.nonce).plus(1);
 
    // Step 2: Create the transaction
    const transaction = Transactions.BuilderFactory.delegateRegistration()
        .version(2)
        .nonce(senderNonce.toFixed())
        .usernameAsset("johndoe")
        .sign("this is a top secret passphrase");
 
    // Step 4: Broadcast the transaction
    const broadcastResponse = await client.api("transactions").create({ transactions: [transaction.build().toJson()] });
 
    // Step 5: Log the response
    console.log(JSON.stringify(broadcastResponse.body.data,
```

### Vote

```javascript
const { Transactions, Managers, Utils } = require("@smartholdem/crypto");
const { Connection } = require("@smartholdem/client");
 
// Configure our API client
const client = new Connection("https://node0.smartholdem.io/api");
 

Managers.configManager.setFromPreset("mainnet");
Managers.configManager.setHeight(1500000);
 
(async () => {
    // Step 1: Retrieve the incremental nonce of the sender wallet
    const senderWallet = await client.api("wallets").get("YOUR_SENDER_WALLET_ADDRESS");
    const senderNonce = Utils.BigNumber.make(senderWallet.body.data.nonce).plus(1);
 
    // Step 2: Create the transaction
    const transaction = Transactions.BuilderFactory.vote()
        .version(2)
        .nonce(senderNonce.toFixed())
        .votesAsset(["+public_key_of_a_delegate_wallet"])
        .sign("this is a top secret passphrase");
 
    // Step 4: Broadcast the transaction
    const broadcastResponse = await client.api("transactions").create({ transactions: [transaction.build().toJson()] });
 
    // Step 5: Log the response
    console.log(JSON.stringify(broadcastResponse.body.data, null, 4))
})();
```

> Note the **plus** prefix for the public key that is passed to the **votesAsset** function. This prefix denotes that this is a transaction to remove a vote from the given delegate.

### Unvote

```javascript
const { Transactions, Managers, Utils } = require("@smartholdem/crypto");
const { Connection } = require("@smartholdem/client");
 
// Configure our API client
const client = new Connection("https://node0.smartholdem.io/api");
 

Managers.configManager.setFromPreset("mainnet");
Managers.configManager.setHeight(1500000);
 
(async () => {
    // Step 1: Retrieve the incremental nonce of the sender wallet
    const senderWallet = await client.api("wallets").get("YOUR_SENDER_WALLET_ADDRESS");
    const senderNonce = Utils.BigNumber.make(senderWallet.body.data.nonce).plus(1);
 
    // Step 2: Create the transaction
    const transaction = Transactions.BuilderFactory.vote()
        .version(2)
        .nonce(senderNonce.toFixed())
        .votesAsset(["-public_key_of_a_delegate_wallet"])
        .sign("this is a top secret passphrase");
 
    // Step 4: Broadcast the transaction
    const broadcastResponse = await client.api("transactions").create({ transactions: [transaction.build().toJson()] });
 
    // Step 5: Log the response
    console.log(JSON.stringify(broadcastResponse.body.data, null, 4))
})();
```

> Note the **minus** prefix for the public key that is passed to the **votesAsset** function. This prefix denotes that this is a transaction to add a vote to the given delegate.

### Multi Signature

```javascript
const { Transactions, Managers, Utils } = require("@smartholdem/crypto");
const { Connection } = require("@smartholdem/client");
 
// Configure our API client
const client = new Connection("https://node0.smartholdem.io/api");
 

Managers.configManager.setFromPreset("mainnet");
Managers.configManager.setHeight(1500000);
 
(async () => {
    // Step 1: Retrieve the incremental nonce of the sender wallet
    const senderWallet = await client.api("wallets").get("YOUR_SENDER_WALLET_ADDRESS");
    const senderNonce = Utils.BigNumber.make(senderWallet.body.data.nonce).plus(1);
 
    // Step 2: Create the transaction
    const transaction = Transactions.BuilderFactory.multiSignature()
        .version(2)
        .nonce(senderNonce.toFixed())
        .multiSignatureAsset({
            publicKeys: [
                "035231cc2fccf7fba239b8abb2611def73f0c0a01598164909181eebd544ce114d",
                "036560f20d578da7b8433248d0c82e68121163958d533dc74b0e7d8dbabc0606a0",
                "02800fe25c005535be15f1a092aba211b69095f0a782224d71a541c14f3a186ef1",
            ],
            min: 2,
        })
        .senderPublicKey("035231cc2fccf7fba239b8abb2611def73f0c0a01598164909181eebd544ce114d")
        .multiSign("this is a top secret passphrase 1", 0)
        .multiSign("this is a top secret passphrase 2", 1)
        .multiSign("this is a top secret passphrase 3", 2)
        .sign("this is a top secret passphrase");
 
    // Step 4: Broadcast the transaction
    const broadcastResponse = await client.api("transactions").create({ transactions: [transaction.build().toJson()] });
 
    // Step 5: Log the response
    console.log(JSON.stringify(broadcastResponse.body.data, null, 4))
})();
```

### IPFS

```javascript
const { Transactions, Managers, Utils } = require("@smartholdem/crypto");
const { Connection } = require("@smartholdem/client");
 
// Configure our API client
const client = new Connection("https://node0.smartholdem.io/api");
 

Managers.configManager.setFromPreset("mainnet");
Managers.configManager.setHeight(1500000);
 
(async () => {
    // Step 1: Retrieve the incremental nonce of the sender wallet
    const senderWallet = await client.api("wallets").get("YOUR_SENDER_WALLET_ADDRESS");
    const senderNonce = Utils.BigNumber.make(senderWallet.body.data.nonce).plus(1);
 
    // Step 2: Create the transaction
    const transaction = Transactions.BuilderFactory.ipfs()
        .version(2)
        .nonce(senderNonce.toFixed())
        .ipfsAsset("QmVUvLMxTEaVBpiQBiBBdnv7ZTwt7pv8BxNhpPCMixuRBT")
        .sign("this is a top secret passphrase");
 
    // Step 4: Broadcast the transaction
    const broadcastResponse = await client.api("transactions").create({ transactions: [transaction.build().toJson()] });
 
    // Step 5: Log the response
    console.log(JSON.stringify(broadcastResponse.body.data, null, 4))
})();
```

### Multi Payment

```javascript
const { Transactions, Managers, Utils } = require("@smartholdem/crypto");
const { Connection } = require("@smartholdem/client");
 
// Configure our API client
const client = new Connection("https://node0.smartholdem.io/api");
 

Managers.configManager.setFromPreset("mainnet");
Managers.configManager.setHeight(1500000);
 
(async () => {
    // Step 1: Retrieve the incremental nonce of the sender wallet
    const senderWallet = await client.api("wallets").get("YOUR_SENDER_WALLET_ADDRESS");
    const senderNonce = Utils.BigNumber.make(senderWallet.body.data.nonce).plus(1);
 
    // Step 2: Create the transaction
    const transaction = Transactions.BuilderFactory.multiPayment()
        .version(2)
        .nonce(senderNonce.toFixed())
        .addPayment("Address of Recipient Wallet 1", 1 * 1e8)
        .addPayment("Address of Recipient Wallet 2", 1 * 1e8)
        .addPayment("Address of Recipient Wallet 3", 1 * 1e8)
        .sign("this is a top secret passphrase");
 
    // Step 4: Broadcast the transaction
    const broadcastResponse = await client.api("transactions").create({ transactions: [transaction.build().toJson()] });
 
    // Step 5: Log the response
    console.log(JSON.stringify(broadcastResponse.body.data, null, 4))
})();
```

### Delegate Resignation

```javascript
const { Transactions, Managers, Utils } = require("@smartholdem/crypto");
const { Connection } = require("@smartholdem/client");
 
// Configure our API client
const client = new Connection("https://node0.smartholdem.io/api");

Managers.configManager.setFromPreset("mainnet");
Managers.configManager.setHeight(1500000);
 
(async () => {
    // Step 1: Retrieve the incremental nonce of the sender wallet
    const senderWallet = await client.api("wallets").get("YOUR_SENDER_WALLET_ADDRESS");
    const senderNonce = Utils.BigNumber.make(senderWallet.body.data.nonce).plus(1);
 
    // Step 2: Create the transaction
    const transaction = Transactions.BuilderFactory.delegateResignation()
        .version(2)
        .nonce(senderNonce.toFixed())
        .sign("this is a top secret passphrase");
 
    // Step 4: Broadcast the transaction
    const broadcastResponse = await client.api("transactions").create({ transactions: [transaction.build().toJson()] });
 
    // Step 5: Log the response
    console.log(JSON.stringify(broadcastResponse.body.data, null, 4))
})();
```

> A delegate resignation has to be sent from the delegate wallet itself to verify its identity.

### HTLC Lock

```javascript
const { Transactions, Managers, Utils } = require("@smartholdem/crypto");
const { Connection } = require("@smartholdem/client");

const client = new Connection("https://node0.smartholdem.io/api");

Managers.configManager.setFromPreset("mainnet");
Managers.configManager.setHeight(1500000);
 
(async () => {
    // Step 1: Retrieve the incremental nonce of the sender wallet
    const senderWallet = await client.api("wallets").get("YOUR_SENDER_WALLET_ADDRESS");
    const senderNonce = Utils.BigNumber.make(senderWallet.body.data.nonce).plus(1);
 
    // Step 2: Create the transaction
    const transaction = Transactions.BuilderFactory.htlcLock()
        .version(2)
        .nonce(senderNonce.toFixed())
        .htlcLockAsset({
            secretHash: "035231cc2fccf7fba239b8abb2611def73f0c0a01598164909181eebd544ce114d",
            expiration: {
                type: 1,
                value: Math.floor(Date.now() / 1000),
            },
        })
        .amount(1 * 1e8)
        .sign("this is a top secret passphrase");
 
    // Step 4: Broadcast the transaction
    const broadcastResponse = await client.api("transactions").create({ transactions: [transaction.build().toJson()] });
 
    // Step 5: Log the response
    console.log(JSON.stringify(broadcastResponse.body.data, null, 4))
})();
```

### HTLC Claim

```javascript
const { Transactions, Managers, Utils } = require("@smartholdem/crypto");
const { Connection } = require("@smartholdem/client");
 
// Configure our API client
const client = new Connection("https://node0.smartholdem.io/api");
 

Managers.configManager.setFromPreset("mainnet");
Managers.configManager.setHeight(1500000);
 
(async () => {
    // Step 1: Retrieve the incremental nonce of the sender wallet
    const senderWallet = await client.api("wallets").get("YOUR_SENDER_WALLET_ADDRESS");
    const senderNonce = Utils.BigNumber.make(senderWallet.body.data.nonce).plus(1);
 
    // Step 2: Create the transaction
    const transaction = Transactions.BuilderFactory.htlcClaim()
        .version(2)
        .nonce(senderNonce.toFixed())
        .htlcClaimAsset({
            lockTransactionId: "5631f0807ac68ba3607d52a587a1c3ecc9ad31386effe564e6f4e31b1c0bfa6d",
            unlockSecret: "fe0817c3e33a46a0ceaa24e1de82395eb344731c0a7f375f0844dfc86df76880",
        })
        .sign("this is a top secret passphrase");
 
    // Step 4: Broadcast the transaction
    const broadcastResponse = await client.api("transactions").create({ transactions: [transaction.build().toJson()] });
 
    // Step 5: Log the response
    console.log(JSON.stringify(broadcastResponse.body.data, null, 4))
})();
```

> The **unlockSecret** has to be a SHA256 hash of the plain text secret that you shared with the person that is allowed to claim the transaction.

### HTLC Refund

```javascript
const { Transactions, Managers, Utils } = require("@smartholdem/crypto");
const { Connection } = require("@smartholdem/client");
 
// Configure our API client
const client = new Connection("https://node0.smartholdem.io/api");

Managers.configManager.setFromPreset("mainnet");
Managers.configManager.setHeight(1500000);
 
(async () => {
    // Step 1: Retrieve the incremental nonce of the sender wallet
    const senderWallet = await client.api("wallets").get("YOUR_SENDER_WALLET_ADDRESS");
    const senderNonce = Utils.BigNumber.make(senderWallet.body.data.nonce).plus(1);
 
    // Step 2: Create the transaction
    const transaction = Transactions.BuilderFactory.htlcRefund()
        .version(2)
        .nonce(senderNonce.toFixed())
        .htlcRefundAsset({
            lockTransactionId: "5631f0807ac68ba3607d52a587a1c3ecc9ad31386effe564e6f4e31b1c0bfa6d",
        })
        .sign("this is a top secret passphrase");
 
    // Step 4: Broadcast the transaction
    const broadcastResponse = await client.api("transactions").create({ transactions: [transaction.build().toJson()] });
 
    // Step 5: Log the response
    console.log(JSON.stringify(broadcastResponse.body.data, null, 4))
})();
```

### New wallet

```javascript
const {Identities} = require("@smartholdem/crypto");
const bip39 = require("bip39");

(async () => {
    const mnemonicSecret = bip39.generateMnemonic();
    const addressSTH = Identities.Address.fromPassphrase(mnemonicSecret, 63);
    console.log('Public Address:', addressSTH);
    console.log('BIP39 secret:',mnemonicSecret);
})();
```

**Result example:**

Public Address: *Sg6epK4DXVKVZ2t57kndUZjtjkS2eCYUZ1*

BIP39 secret: *salmon any bracket quit toast add arrow rabbit hidden motor ancient always*

