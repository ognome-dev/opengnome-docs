---
title: Database setup
description: How to create and migrate the PostgreSQL database
---

Requirements: PostgreSQL 15 or higher.

Create the database:

```sql
CREATE DATABASE opengnome;
```

Set DATABASE_URL in your .env file.

Push the Drizzle schema:

```bash
pnpm --filter @workspace/db run db:push
```

Tables created: analyses, mints, wallet_keys, merkle_trees.

Brief description of each table's purpose: analyses stores symptom inputs and reports, mints stores NFT mint records, wallet_keys stores generated Solana keys, merkle_trees stores Solana Merkle tree addresses.

Schema changes: always update the Drizzle schema files in lib/db/src/schema/ and run db:push. Never edit the database directly.

Drizzle Studio (optional visual browser):

```bash
pnpm --filter @workspace/db run db:studio
```