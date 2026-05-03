---
title: GET /api/rate-limit-status
description: Check your current daily analysis quota
---

Check your current daily analysis quota.

No parameters.

Response schema:

```ts
type RateLimitStatus = {
  used: number
  limit: number
  remaining: number
  resetsAt: string
}
```

Curl example:

```bash
curl https://opengnome.bio/api/rate-limit-status
```

Example response:

```json
{
  "used": 1,
  "limit": 2,
  "remaining": 1,
  "resetsAt": "2025-08-15T00:00:00.000Z"
}
```