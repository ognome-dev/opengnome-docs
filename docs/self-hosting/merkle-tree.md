---
title: Merkle tree setup
description: How to create and manage the Solana Merkle tree for compressed NFTs
---

In the context of Solana compressed NFTs, a Merkle tree is an on-chain data structure that stores NFT ownership proofs. Compressed NFTs are far cheaper than standard NFTs because they store data in the Merkle tree rather than in individual accounts.

Tree parameters used by OpenGnome: depth 14 (capacity: 2^14 = 16,384 leaves), buffer size 64, canopy depth 0.

Create the tree:

```bash
ts-node scripts/seed-merkle-tree.ts
```

This prints the tree address. Copy it and update the merkle_trees table:

```sql
INSERT INTO merkle_trees (address, depth, buffer_size, leaves_used)
VALUES ('YOUR_TREE_ADDRESS', 14, 64, 0);
```

Tree lifecycle: the tree is created once and reused for all mints. When the tree reaches 16,384 leaves, create a new one and update the database record to point to the new address.

Check tree status: query the merkle_trees table to see how many leaves have been used:

```sql
SELECT address, depth, leaves_used, (power(2, depth) - leaves_used) AS remaining
FROM merkle_trees
ORDER BY id DESC
LIMIT 1;
```