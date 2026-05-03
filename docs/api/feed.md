---
title: GET /api/feed
description: Paginated list of publicly anchored reports
---

Paginated list of publicly anchored reports.

Query parameters: page (default 1), limit (default 20, max 100)

Response schema:

```ts
type FeedResponse = {
  items: FeedItem[]
  total: number
  page: number
  limit: number
}

type FeedItem = {
  id: number
  report: Report
  mintRecord: MintRecord
  createdAt: string
}
```

Curl example:

```bash
curl "https://opengnome.bio/api/feed?page=1&limit=20"
```

Example response:

```json
{
  "items": [
    {
      "id": 12345,
      "report": {
        "primarySignal": "Chronic fatigue syndrome",
        "secondarySignals": ["Post-viral fatigue"],
        "correlationExplanation": "Retrieved abstracts describe fatigue patterns...",
        "confidenceScore": 78,
        "signalStrength": 65,
        "sources": [...]
      },
      "mintRecord": {
        "id": 678,
        "analysisId": 12345,
        "mintAddress": "ABC123...",
        "transactionSignature": "DEF456...",
        "imageUri": "https://arweave.net/xyz",
        "metadataUri": "https://arweave.net/uvw",
        "createdAt": "2025-08-14T10:35:00.000Z"
      },
      "createdAt": "2025-08-14T10:30:00.000Z"
    },
    {
      "id": 12346,
      "report": { ... },
      "mintRecord": { ... },
      "createdAt": "2025-08-14T09:15:00.000Z"
    }
  ],
  "total": 312,
  "page": 1,
  "limit": 20
}
```

Only reports where isPublic = true appear in the feed.