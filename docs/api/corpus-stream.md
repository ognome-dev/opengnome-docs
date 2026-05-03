---
title: GET /api/corpus-stream
description: Server-sent events stream of simulated corpus tick counts
---

Server-sent events stream of simulated corpus tick counts used by the Crystal Globe visualization on the home page. Data is emitted every 800ms as a Server-Sent Events stream.

Response content-type: text/event-stream

Event format: each event contains a JSON object with pubmed and trials fields.

Example event data:

```
data: {"pubmed":1043,"trials":287}
```

Curl example:

```bash
curl -N https://opengnome.bio/api/corpus-stream
```

This endpoint is for the UI visualization only. It does not reflect real-time PubMed or ClinicalTrials.gov activity.