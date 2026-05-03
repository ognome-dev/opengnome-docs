---
title: GET /api/healthz
description: Health check endpoint
---

Returns 200 when the API server is running.

No parameters.

Response:

```json
{ "status": "ok", "timestamp": "2025-08-14T12:34:56.789Z" }
```

Curl example:

```bash
curl https://opengnome.bio/api/healthz
```

Use case: uptime monitoring, load balancer health checks.