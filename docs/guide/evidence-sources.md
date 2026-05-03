---
title: Evidence sources
description: How OpenGnome retrieves and uses PubMed and ClinicalTrials.gov data
---

The platform retrieves evidence from two sources in parallel on every analysis.

## PubMed NCBI E-utilities

PubMed is the US National Library of Medicine database of biomedical literature.

The platform uses esearch to find up to 8 article IDs based on the symptom query. It then uses efetch to retrieve full XML abstracts for those IDs.

Some articles have no publicly available abstract. In these cases, the platform falls back to the article title only.

All NCBI requests include the tool=opengnome parameter.

For more information, see the NCBI E-utilities documentation.

## ClinicalTrials.gov v2

ClinicalTrials.gov is the US registry of clinical studies.

The platform uses the v2 JSON API to retrieve up to 8 trials per query.

The fields retrieved include trial ID, title, status, and phase.

For more information, see the ClinicalTrials.gov API documentation.

## Evidence packet

The two sources are merged into a single evidence packet passed to the reasoning engine.

## Limitations of the evidence sources

PubMed coverage is strongest for English-language peer-reviewed literature.

Some articles have no publicly available abstract.

Trial data reflects current registry status, which may lag actual trial progress.

The platform retrieves up to 8 items from each source per query, not the full corpus.