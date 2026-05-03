---
title: Solana wallet setup
description: How to create and configure the platform wallet for NFT minting
---

The platform wallet pays for Solana transaction fees and receives secondary sale royalties.

Generate a new keypair:

```bash
ts-node scripts/generate-keypair.ts
```

Fund the wallet: deposit SOL to the printed public key address. Compressed NFT minting costs approximately 0.001-0.005 SOL per mint. Recommended minimum balance: 1 SOL to start.

Set the environment variable:

```bash
SOLANA_PRIVATE_KEY=your_base58_encoded_secret_key
```

Auto-generation fallback: if SOLANA_PRIVATE_KEY is not set, the platform generates a keypair on first mint and stores it in the wallet_keys table. This is convenient but the keypair is only in your database, not backed up externally. Set SOLANA_PRIVATE_KEY explicitly for production.

Check wallet balance:

```bash
ts-node scripts/check-wallet-balance.ts
```

RPC endpoint: use a dedicated RPC provider for production. Set SOLANA_RPC_URL to a Helius or QuickNode endpoint.