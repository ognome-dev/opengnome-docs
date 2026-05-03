---
title: Signal report structure
description: A detailed breakdown of every field in a signal report
---

Every analysis returns a report with the following fields.

## TypeScript type definition

```ts
type Source = {
  id: string
  title: string
  url: string
}

type Report = {
  primarySignal: string
  secondarySignals: string[]
  correlationExplanation: string
  confidenceScore: number     // 0 to 100
  signalStrength: number      // 0 to 100
  sources: Source[]
}
```

## Field-by-field breakdown

- **primarySignal**: The main biomedical signal detected from the evidence.
- **secondarySignals**: Additional signals that appeared in the evidence.
- **correlationExplanation**: A plain-English explanation of why these signals were detected and how they relate to the symptoms described.
- **confidenceScore**: 0-100 integer that reflects strength of evidence support.
- **signalStrength**: 0-100 integer that reflects magnitude of association.
- **sources**: Array of source objects with id, title, and URL.

## Example report

```json
{
  "primarySignal": "Chronic fatigue syndrome",
  "secondarySignals": [
    "Post-infectious fatigue",
    "Autonomic dysfunction"
  ],
  "correlationExplanation": "Three of the retrieved PubMed abstracts describe post-infectious fatigue patterns consistent with the reported symptom duration and severity. One ClinicalTrials.gov study is actively recruiting participants with overlapping symptom profiles. The autonomic dysfunction signal appears in two abstracts discussing heart rate variability in chronic fatigue populations.",
  "confidenceScore": 72,
  "signalStrength": 68,
  "sources": [
    {
      "id": "pmid:38291045",
      "title": "Post-infectious fatigue and autonomic nervous system dysregulation",
      "url": "https://pubmed.ncbi.nlm.nih.gov/38291045/"
    },
    {
      "id": "NCT05812943",
      "title": "Autonomic Function in Chronic Fatigue Syndrome",
      "url": "https://clinicaltrials.gov/study/NCT05812943"
    }
  ]
}
```

## How to read the scores

High confidence with high strength indicates strong evidence of a significant association. High confidence with low strength indicates strong evidence of a minor association. Low confidence with high strength indicates weak evidence of a potentially significant association.