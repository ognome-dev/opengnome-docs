---
title: Privacy and anonymity
description: How OpenGnome handles user data and protects privacy
---

The platform has no account system. No registration, no login, no email address.

No wallet requirement. No wallet connection needed to analyze or anchor.

The symptom text is stored in the database as part of the analysis record. Unanchored analyses are not surfaced publicly. Anchored analyses appear on the public feed with structured report fields but the raw symptom text is not shown publicly.

The client IP is read from req.ip via Express trust proxy = 1, derived from X-Forwarded-For with exactly one hop. Raw header values are never read directly. IP is stored as a hash for rate limiting purposes only.

The IP hash is used only to enforce the daily quota. It is not used for tracking, analytics, or profiling.

Evidence retrieval sends queries to PubMed NCBI and ClinicalTrials.gov. The symptom text is included in these query strings. Users should be aware of the privacy policies of these public APIs.

Anchored reports include structured fields as NFT trait attributes. This data is permanently public. The raw symptom text is never included in on-chain metadata.