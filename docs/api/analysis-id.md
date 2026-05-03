---
title: GET /api/analysis/:id
description: Fetch a single analysis by numeric ID
---

Fetch a single analysis by numeric ID.

Path parameter: id (integer, required)

Response: full Analysis object plus MintRecord if anchored

```ts
type Analysis = {
  id: number
  symptoms: string
  report: Report
  createdAt: string
  isPublic: boolean
  mintRecord?: MintRecord
}
```

Curl example:

```bash
curl https://opengnome.bio/api/analysis/12345
```

Example response:

```json
{
  "id": 12345,
  "symptoms": "Persistent fatigue lasting 6 months, worsened by exertion",
  "report": {
    "primarySignal": "Chronic fatigue syndrome",
    "secondarySignals": ["Post-viral fatigue"],
    "correlationExplanation": "Retrieved PubMed abstracts describe fatigue patterns consistent with the reported duration and triggers.",
    "confidenceScore": 78,
    "signalStrength": 65,
    "sources": [
      {
        "id": "pmid:38291045",
        "title": "Long-term fatigue following viral infection",
        "url": "https://pubmed.ncbi.nlm.nih.gov/38291045/"
      }
    ]
  },
  "createdAt": "2025-08-14T10:30:00.000Z",
  "isPublic": true,
  "mintRecord": {
    "id": 678,
    "analysisId": 12345,
    "mintAddress": "ABC123...",
    "transactionSignature": "DEF456...",
    "imageUri": "https://arweave.net/xyz",
    "metadataUri": "https://arweave.net/uvw",
    "createdAt": "2025-08-14T10:35:00.000Z"
  }
}
```

Error cases: 400 (invalid id), 404 (not found)