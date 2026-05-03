---
title: GET /api/metadata/:id
description: Fallback Metaplex-standard NFT metadata JSON
---

Fallback Metaplex-standard NFT metadata JSON.

This endpoint serves as a fallback when Arweave upload fails during minting. Metaplex-compatible metadata is served live from this endpoint.

Path parameter: id (integer)

Response: Metaplex-standard NFT metadata JSON

Full example response:

```json
{
  "name": "OpenGnome Signal Report #12345",
  "description": "Verifiable biomedical signal report anchored on Solana mainnet",
  "image": "https://arweave.net/xyz",
  "attributes": [
    {
      "trait_type": "Primary Signal",
      "value": "Chronic fatigue syndrome"
    },
    {
      "trait_type": "Confidence Score",
      "value": 78
    },
    {
      "trait_type": "Signal Strength",
      "value": 65
    },
    {
      "trait_type": "Rarity",
      "value": "Epic"
    }
  ]
}
```

Prefer the Arweave metadataUri when available. This endpoint is a fallback.