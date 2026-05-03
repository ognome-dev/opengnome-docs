---
title: Local development
description: How to run the full OpenGnome stack locally
---

Clone the repository:

```bash
git clone https://github.com/ognome-dev/opengnome.git
cd opengnome
```

Install dependencies:

```bash
pnpm install
```

Copy environment variables:

```bash
cp .env.example .env
# Edit .env and fill in required values
```

Push the database schema:

```bash
pnpm --filter @workspace/db run db:push
```

Run the API server (terminal 1):

```bash
pnpm --filter @workspace/api-server run dev
```

Run the frontend (terminal 2):

```bash
pnpm --filter @workspace/opengnome run dev
```

Open `http://localhost:5173` in your browser. The frontend proxies all /api requests to `http://localhost:8080`.

Typecheck everything:

```bash
pnpm run typecheck
```

Build everything:

```bash
pnpm run build
```

Note on NFT minting locally: minting hits Solana mainnet-beta by default. Set SOLANA_RPC_URL to a devnet endpoint and use devnet SOL for testing.