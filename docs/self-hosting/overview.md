---
title: Self-hosting overview
description: What you need to run OpenGnome on your own infrastructure
---

## Prerequisites

- Node.js 20 or higher
- pnpm 9 or higher
- PostgreSQL 15 or higher
- A Solana wallet with SOL for minting fees (optional, only for NFT anchoring)
- An Irys-compatible Arweave wallet (optional, only for NFT anchoring)
- API keys for Anthropic and OpenAI (required for analysis and card generation)

## Architecture overview

Two processes run in parallel. The frontend proxies /api to the Express backend. The Express backend connects to PostgreSQL and external APIs.

Links to detailed setup pages for each component.