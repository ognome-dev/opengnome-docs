---
title: POST /api/analyze
description: Submit symptoms and run the full analysis pipeline
---

Submit symptoms and run the full analysis pipeline.

Rate limit: 2 per IP per UTC day.

Request body schema:

```ts
type AnalyzeRequest = {
  symptoms: string  // 1-2000 characters
}
```

Response schema:

```ts
type Analysis = {
  id: number
  symptoms: string
  report: Report
  createdAt: string
  isPublic: boolean
  mintRecord?: MintRecord
}

type Report = {
  primarySignal: string
  secondarySignals: string[]
  correlationExplanation: string
  confidenceScore: number
  signalStrength: number
  sources: Source[]
}

type Source = {
  id: string
  title: string
  url: string
}

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
curl -X POST https://opengnome.bio/api/analyze \
  -H "Content-Type: application/json" \
  -d '{"symptoms": "Persistent fatigue lasting 6 months, worsened by exertion"}'
```

Example response:

```json
{
  "id": 12345,
  "symptoms": "Persistent fatigue lasting 6 months, worsened by exertion",
  "report": {
    "primarySignal": "Chronic fatigue syndrome",
    "secondarySignals": ["Post-viral fatigue"],
    "correlationExplanation": "Retrieved PubMed abstracts describe fatigue patterns consistent with the reported duration and triggers. ClinicalTrials.gov shows active studies in post-viral fatigue syndromes.",
    "confidenceScore": 78,
    "signalStrength": 65,
    "sources": [
      {
        "id": "pmid:38291045",
        "title": "Long-term fatigue following viral infection",
        "url": "https://pubmed.ncbi.nlm.nih.gov/38291045/"
      },
      {
        "id": "NCT05812943",
        "title": "Fatigue Management in Chronic Conditions",
        "url": "https://clinicaltrials.gov/study/NCT05812943"
      }
    ]
  },
  "createdAt": "2025-08-14T10:30:00.000Z",
  "isPublic": false
}
```

Error cases: 400 (invalid body), 429 (rate limit)