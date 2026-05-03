---
title: How the pipeline works
description: A step-by-step walkthrough of the six-stage analysis pipeline
---

The pipeline runs on every analysis submission.

## Stage 1 - Symptom input

The platform validates the input, limits it to 2000 characters, and sanitizes it.

## Stage 2 - Parallel evidence retrieval

The platform runs two retrieval processes in parallel:

- PubMed NCBI E-utilities: Uses esearch to find up to 8 article IDs, then efetch to retrieve full XML abstracts.
- ClinicalTrials.gov v2: Queries the JSON API for up to 8 trials.

The results are merged into an evidence packet.

## Stage 3 - Reasoning engine

The evidence packet is passed to the constrained reasoning engine. The engine cannot invent citations or identifiers. It can only use sources present in the evidence packet. It returns a strictly typed JSON object.

## Stage 4 - Structured report

The JSON output is validated against a schema. If validation fails, the request returns an error. If it passes, the report is saved to the database and returned to the user.

## Stage 5 - Optional on-chain anchoring

The user can choose to anchor the report. This generates an 800x1120 trading card PNG, uploads the image and metadata to Arweave via Irys, and mints a compressed NFT on Solana mainnet.

## Stage 6 - Public feed

Anchored reports appear on the public feed page with 10-second auto-refresh.

```
Symptom input
     |
     v
Evidence retrieval (PubMed + ClinicalTrials.gov)
     |
     v
Constrained reasoning engine
     |
     v
Structured report validation
     |
     v
Optional NFT anchoring (image gen + Arweave + Solana mint)
     |
     v
Public feed publication
```