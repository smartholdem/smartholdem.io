---
title: API Reference — Overview
description: Introduction to the SmartHoldem Public API, list of mainnet nodes, and getting started guide.
---

# API Reference

This is the reference guide for the **Public API**. It exposes all resources and data provided by a SmartHoldem Core node and is the preferred way of interacting with the network.

You can use public nodes to interact with the blockchain without installing and synchronizing your own node from [github.com/smartholdem/sth-core](https://github.com/smartholdem/sth-core).

::: tip Production mode
For production workloads it is highly recommended to install and synchronize **your own node** from [github.com/smartholdem/sth-core](https://github.com/smartholdem/sth-core). Public nodes are best-effort and rate-limited.
:::

## Public Mainnet Nodes

Any of these endpoints can be used as a drop-in replacement for `https://node0.smartholdem.io/api/` in every example throughout the docs.

<ul class="nodes-list">
  <li>https://node0.smartholdem.io/api/</li>
  <li>https://node1.smartholdem.io/api/</li>
  <li>https://node2.smartholdem.io/api/</li>
  <li>https://node3.smartholdem.io/api/</li>
  <li>https://node4.smartholdem.io/api/</li>
  <li>https://node5.smartholdem.io/api/</li>
</ul>

## Base URL & Versioning

All endpoints below are relative to the node base URL (`/api/`). The Public API is versionless — breaking changes are announced in advance via GitHub releases and the [community forum](https://community.smartholdem.io).

```http
GET https://node0.smartholdem.io/api/blockchain
```

## Method Badges Used In This Reference

<span class="badge badge-get">GET</span> — Read-only resource retrieval. Safe & idempotent.

<span class="badge badge-post">POST</span> — Broadcast transactions, submit filters. Includes a JSON body.

## Quick Start

1. **Pick a node** from the list above (or run your own).
2. **Hit the state endpoint** to confirm connectivity:

```bash
curl -s https://node0.smartholdem.io/api/blockchain | jq
```

3. **Explore the [full endpoints reference](./endpoints)** — every resource, parameter, and payload documented.

## Response Envelope

All paginated endpoints return a consistent envelope:

```json
{
  "meta": {
    "count": 100,
    "pageCount": 138542,
    "totalCount": 13854200,
    "next": "/api/blocks?page=2&limit=100",
    "previous": null,
    "self": "/api/blocks?page=1&limit=100",
    "first": "/api/blocks?page=1&limit=100",
    "last": "/api/blocks?page=138542&limit=100"
  },
  "data": [ /* … */ ]
}
```

Single-resource endpoints omit the `meta` field.

## Rate Limits

Public mainnet nodes apply generous but not unlimited rate limits. If you need heavy throughput — e.g. indexing every block — please **run your own node**.

## Next Steps

<div class="quick-grid">
  <a class="quick-card" href="./endpoints">
    <h3>→ Endpoints Reference</h3>
    <p>Every URL, parameter, and payload for the 9 API sections — with cURL examples ready to paste.</p>
  </a>
  <a class="quick-card" href="../sdk/installation">
    <h3>→ SDK Guides</h3>
    <p>Skip raw HTTP — use the official client to sign & broadcast in a few lines.</p>
  </a>
</div>
