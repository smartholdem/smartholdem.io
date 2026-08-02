---
title: SDK Installation
description: Install the official @smartholdem/client and @smartholdem/crypto SDKs — Node.js, Yarn, and NVM setup.
---

# SDK Installation

Set up the toolchain required to consume the official SmartHoldem SDKs (`@smartholdem/client` for the REST wrapper and `@smartholdem/crypto` for local signing).

::: tip Prerequisites
- **Node.js 16 LTS** or newer (we recommend managing versions with **NVM**)
- **Yarn** package manager (npm and pnpm work too, but every example in these docs uses Yarn)
:::

## 1. Install Node.js

You have three options:

1. **Direct download** — grab an installer from the [official downloads page](https://nodejs.org/en/download/).
2. **OS package manager** — follow the [package-manager guide](https://nodejs.org/en/download/package-manager/).
3. **NVM (recommended)** — install [Node Version Manager](https://github.com/nvm-sh/nvm) so multiple Node versions can coexist on the same machine.

### One-liner (NVM + Node 16 + globals)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

nvm install 16.13.2
nvm use 16.13.2

npm install -g yarn pm2 forever grunt-cli
```

Verify the install:

```bash
node --version   # v16.13.2
yarn --version   # 1.22.x
```

## 2. Install Yarn

> Yarn is a package manager for your code. It allows you to use and share code with other developers quickly, securely, and reliably.

If Yarn is not already installed as part of the one-liner above, follow the [official install guide](https://yarnpkg.com/en/docs/install) or install it via npm:

```bash
npm install -g yarn
```

## 3. Add the SDK Packages

Inside your project directory:

```bash
yarn add @smartholdem/client @smartholdem/crypto
```

<details>
<summary>Alternative package managers</summary>

```bash
# pnpm
pnpm add @smartholdem/client @smartholdem/crypto

# npm
npm install @smartholdem/client @smartholdem/crypto
```

</details>

## 4. Verify

Create `test.js`:

```javascript
const { Connection } = require('@smartholdem/client')
const { Identities } = require('@smartholdem/crypto')

const client = new Connection('https://node0.smartholdem.io/api')
const address = Identities.Address.fromPassphrase('this is a top secret passphrase')

console.log('Derived address:', address)
client.api('node').status().then(r => console.log('Node status:', r.body.data))
```

Run it:

```bash
node test.js
```

If you see the derived address and the node's syncing status, you're ready to go.

## Next Steps

- [Crypto SDK](./crypto) — local key derivation, signing, serialization.
- [Client SDK](./client) — high-level HTTP wrappers around every endpoint.
- [Real-World Examples](./examples) — end-to-end recipes: Transfer, Vote, HTLC, Multi-Payment.
