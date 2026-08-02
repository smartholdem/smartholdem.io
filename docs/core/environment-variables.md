---
title: Core Environment Variables
description: Every CORE_* environment variable understood by sth-core — grouped by subsystem (Database, API, P2P, Pool, Manager, Watcher, Webhooks, Forger).
---

# Core Environment Variables

Environment variables configure the runtime of a SmartHoldem Core node. They can be set in the shell, in a `.env` file at the project root, or through your process manager (`pm2 ecosystem`, `systemd`, Docker `--env-file`).

::: tip Precedence
1. Values from **shell environment** override
2. Values from **`.env`** file, which override
3. Defaults hard-coded in the node's `defaults.ts` (per module).
:::

::: warning Never commit secrets
`.env` files often contain `CORE_DB_PASSWORD`, forger BIP-39 mnemonics, and TLS keys. Add `.env` to `.gitignore` and use a secrets manager (Vault, AWS SM, `sops`) for production deployments.
:::

## Database

| Variable | Description |
| --- | --- |
| `CORE_DB_DATABASE` | This variable determines what database will be used for database communication. |
| `CORE_DB_HOST` | This variable determines what host will be used for database communication. |
| `CORE_DB_PASSWORD` | This variable determines what password will be used for database communication. |
| `CORE_DB_PORT` | This variable determines what port will be used for database communication. |
| `CORE_DB_USERNAME` | This variable determines what username will be used for database communication. |


## Public API

| Variable | Description |
| --- | --- |
| `CORE_API_CACHE` | This variable determines if the API makes use of caching to improve performance. |
| `CORE_API_DISABLED` | This variable determines if the API is enabled. |
| `CORE_API_HOST` | This variable determines the host at which the API will listen for traffic. |
| `CORE_API_NO_ESTIMATED_TOTAL_COUNT` | This variable determines if estimated counts should be used. This greatly enhanced performance will yield in inaccurate counts. |
| `CORE_API_PORT` | This variable determines the port at which the API will listen for traffic. |
| `CORE_API_SEMAPHORE_DISABLED` | This variable determines if semaphore plugin is disabled. |


## API — Rate Limiting

| Variable | Description |
| --- | --- |
| `CORE_API_RATE_LIMIT_BLACKLIST` | This variable determines which IP addresses are unable to send any requests to the API. |
| `CORE_API_RATE_LIMIT_DISABLED` | This variable determines if rate limiting is disabled. |
| `CORE_API_RATE_LIMIT_USER_EXPIRES` | This variable determines how long it takes before the rate limiting expires. |
| `CORE_API_RATE_LIMIT_USER_LIMIT` | This variable determines how many requests a user can send for any given period. |
| `CORE_API_RATE_LIMIT_WHITELIST` | This variable determines which user are exempted from rate limiting. |


## API — SSL

| Variable | Description |
| --- | --- |
| `CORE_API_SSL` | This variable determines if SSL (HTTPS) is enabled. |
| `CORE_API_SSL_CERT` | This variable determines where the SSL Certification is located. |
| `CORE_API_SSL_HOST` | This variable determines the host at which the HTTPS API will listen for traffic. |
| `CORE_API_SSL_KEY` | This variable determines where the SSL Key is located. |
| `CORE_API_SSL_PORT` | This variable determines the host at which the HTTPS API will listen for traffic. |


## P2P Network

| Variable | Description |
| --- | --- |
| `CORE_P2P_HOST` | This variable determines the host at which the P2P API will be listening for traffic. |
| `CORE_P2P_MAX_PEERS_SAME_SUBNET` | This variable determines how many peers from the same subnet are allowed to connect. |
| `CORE_P2P_MAX_PEER_SEQUENTIAL_ERRORS` | This variable determines how many errors a peer can cause before it is disconnected. |
| `CORE_P2P_MIN_NETWORK_REACH` | This variable determines minimum number of peers that should be connected. |
| `CORE_P2P_PORT` | This variable determines the port at which the P2P API will be listening for traffic. |
| `CORE_P2P_RATE_LIMIT` | This variable determines how many requests per second can be sent by a peer. |
| `CORE_P2P_RATE_LIMIT_POST_TRANSACTIONS` | This variable determines how many transaction requests per second can be sent by a peer. |


## Transaction Pool

| Variable | Description |
| --- | --- |
| `CORE_MAX_TRANSACTIONS_IN_POOL` | This variable determines how many transactions can be in the transaction pool at any given time. |
| `CORE_TRANSACTION_POOL_DISABLED` | This variable determines if the transaction pool should be disabled. |
| `CORE_TRANSACTION_POOL_MAX_PER_REQUEST` | This variable determines how many transactions can be broadcast in a single request. |
| `CORE_TRANSACTION_POOL_MAX_PER_SENDER` | This variable determines how many transactions can be in the transaction pool by a single sender. |


## Logging

| Variable | Description |
| --- | --- |
| `CORE_LOG_LEVEL` | This variable determines the severity of messages that are logged. |
| `CORE_LOG_LEVEL_FILE` | This variable determines where the log files are stored. |


## Manager

| Variable | Description |
| --- | --- |
| `CORE_MANAGER_ARCHIVE_FORMAT` | This variable determines which archive format is used for storing logs. |
| `CORE_MANAGER_DISABLED` | This variable determines if the Manager API is disabled. |
| `CORE_MANAGER_HOST` | This variable determines the host at which the Manager API will be listening for traffic. |
| `CORE_MANAGER_PORT` | This variable determines the port at which the Manager API will be listening for traffic. |
| `CORE_MANAGER_PUBLIC_IP` | This variable determines the public ip of host. |
| `CORE_MANAGER_SSL` | This variable determines if SSL (HTTPS) is enabled for the Manager API. |
| `CORE_MANAGER_SSL_CERT` | This variable determines where the SSL Certification is located. |
| `CORE_MANAGER_SSL_HOST` | This variable determines the host at which the HTTPS Manager API will be listening for traffic. |
| `CORE_MANAGER_SSL_KEY` | This variable determines where the SSL Key is located. |
| `CORE_MANAGER_SSL_PORT` | This variable determines the port at which the HTTPS Manager API will be listening for traffic. |


## Watcher

| Variable | Description |
| --- | --- |
| `CORE_WATCHER_ENABLED` | This variable determines if monitoring is enabled. |


## Webhooks

| Variable | Description |
| --- | --- |
| `CORE_WEBHOOKS_ENABLED` | This variable determines if webhooks are enabled. |
| `CORE_WEBHOOKS_HOST` | This variable determines the host at which the Webhook API will be listening for traffic. |
| `CORE_WEBHOOKS_PORT` | This variable determines the port at which the Webhook API will be listening for traffic. |
| `CORE_WEBHOOKS_TIMEOUT` | This variable determines how long it will take for a request to timeout when trying to transmit a webhook payload. |


## Other

| Variable | Description |
| --- | --- |
| `CORE_NETWORK_NAME` | > This variable is exposed by core and cannot be manually configured. This variable exposes the name of the network that has been configured. |
| `CORE_NPM_REGISTRY` | This variable determines which NPM registry url should be used. |
| `CORE_PATH_DATA` | > This variable is exposed by core and cannot be manually configured. This variable exposes the path at which core stores application data. |
| `CORE_RESET_DATABASE` | This variable determines if database should be truncated at boot. |
| `CORE_TOKEN` | > This variable is exposed by core and cannot be manually configured. This variable determines the name of the token. |
| `CORE_WALLET_SYNC_ENABLED` | This variable determines if wallets should be synced to the database. |
| `CORE_WATCH_BLOCKS_DISABLED` | This variable determines if monitoring of blocks is disabled. |
| `CORE_WATCH_ERRORS_DISABLED` | This variable determines if monitoring of errors is disabled. |
| `CORE_WATCH_LOGS_DISABLED` | This variable determines if monitoring of logs is disabled. |
| `CORE_WATCH_QUERIES_DISABLED` | This variable determines if monitoring of queries is disabled. |
| `CORE_WATCH_QUEUES_DISABLED` | This variable determines if monitoring of queues is disabled. |
| `CORE_WATCH_ROUNDS_DISABLED` | This variable determines if monitoring of rounds is disabled. |
| `CORE_WATCH_SCHEDULES_DISABLED` | This variable determines if monitoring of schedules is disabled. |
| `CORE_WATCH_TRANSACTIONS_DISABLED` | This variable determines if monitoring of transactions is disabled. |
| `CORE_WATCH_WALLETS_DISABLED` | This variable determines if monitoring of wallets is disabled. |
| `CORE_WATCH_WEBHOOKS_DISABLED` | This variable determines if monitoring of webhooks is disabled. |



## Loading `.env`

```bash
# Example .env for a mainnet relay node
CORE_DB_HOST=127.0.0.1
CORE_DB_PORT=5432
CORE_DB_DATABASE=sth_mainnet
CORE_DB_USERNAME=sth
CORE_DB_PASSWORD=change_me

CORE_API_HOST=0.0.0.0
CORE_API_PORT=6100
CORE_API_RATE_LIMIT_DISABLED=false
CORE_API_RATE_LIMIT_USER_LIMIT=300

CORE_P2P_HOST=0.0.0.0
CORE_P2P_PORT=6101
CORE_P2P_MIN_NETWORK_REACH=5

CORE_LOG_LEVEL=info
```

Start the node with:

```bash
sth-core relay:start --env=.env
# or via pm2
pm2 start sth-core -- relay:start
```

## See Also

- [github.com/smartholdem/sth-core](https://github.com/smartholdem/sth-core) — canonical `defaults.ts` for every module.
- [Data Models](./data-models) — the shape of what your node will serve.
- [API Reference](/api/endpoints) — how consumers will talk to your node.
