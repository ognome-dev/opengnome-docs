---
title: GET /api/stats
description: Platform-level statistics
---

Platform-level statistics.

No parameters.

Response schema:

```ts
type StatsResponse = {
  totalAnalyses: number
  totalMints: number
}
```

Curl example:

```bash
curl https://opengnome.bio/api/stats
```

Example response:

```json
{ "totalAnalyses": 847, "totalMints": 312 }
```