---
title: POST /api/mint/public
description: Anchor an existing analysis as a compressed NFT on Solana mainnet
---

Anchor an existing analysis as a compressed NFT on Solana mainnet.

Each analysis can only be minted once.

Request body schema:

```ts
type MintPublicRequest = {
  analysisId: number
}
```

Response schema:

```ts
type MintRecord = {
  id: number
  analysisId: number
  mintAddress: string
  transactionSignature: string
  imageUri: string
  metadataUri: string
  createdAt: string
}
```

Curl example:

```bash
curl -X POST https://opengnome.bio/api/mint/public \
  -H "Content-Type: application/json" \
  -d '{"analysisId": 12345}'
```

Example response:

```json
{
  "id": 678,
  "analysisId": 12345,
  "mintAddress": "ABC123...",
  "transactionSignature": "DEF456...",
  "imageUri": "https://arweave.net/xyz",
  "metadataUri": "https://arweave.net/uvw",
  "createdAt": "2025-08-14T10:35:00.000Z"
}
```

Error cases: 400, 404 (analysis not found), 409 (already minted), 500