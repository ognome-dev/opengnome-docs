---
title: Environment variables
description: Complete reference for all environment variables
---

| Variable | Required | Default | Description |
|---|---|---|---|
| DATABASE_URL | Yes | none | PostgreSQL connection string |
| SOLANA_PRIVATE_KEY | Yes for minting | none | Base58-encoded 64-byte Solana secret key |
| SOLANA_RPC_URL | No | https://api.mainnet-beta.solana.com | Custom Solana RPC endpoint |
| IRYS_ADDRESS | No | https://node1.irys.xyz | Irys node for Arweave uploads |
| AI_INTEGRATIONS_ANTHROPIC_BASE_URL | Yes | none | Anthropic API base URL |
| AI_INTEGRATIONS_ANTHROPIC_API_KEY | Yes | none | Anthropic API key |
| AI_INTEGRATIONS_OPENAI_BASE_URL | Yes for card gen | none | OpenAI API base URL |
| AI_INTEGRATIONS_OPENAI_API_KEY | Yes for card gen | none | OpenAI API key |
| PORT | No | 8080 | Port for the Express API server |

Full .env.example file content:

```bash
DATABASE_URL=postgresql://user:password@localhost:5432/opengnome
SOLANA_PRIVATE_KEY=your_base58_encoded_secret_key_here
SOLANA_RPC_URL=https://api.mainnet-beta.solana.com
IRYS_ADDRESS=https://node1.irys.xyz
AI_INTEGRATIONS_ANTHROPIC_BASE_URL=https://api.anthropic.com
AI_INTEGRATIONS_ANTHROPIC_API_KEY=your_anthropic_api_key
AI_INTEGRATIONS_OPENAI_BASE_URL=https://api.openai.com/v1
AI_INTEGRATIONS_OPENAI_API_KEY=your_openai_api_key
PORT=8080
```