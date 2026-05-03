---
title: API overview
description: Base URL, authentication, content type, and error format
---

The base URL is https://opengnome.bio/api.

Authentication is not required. All endpoints are public.

All request bodies must be application/json. All responses are application/json except /corpus-stream.

Rate limiting applies to POST /analyze requests: 2 per IP per UTC day. All other endpoints are not rate limited.

Errors return a JSON object with an error string field and an optional details field.

```ts
type ErrorResponse = {
  error: string
  details?: any
}
```

```json
{
  "error": "Rate limit exceeded",
  "details": {
    "limit": 2,
    "resetsAt": "2025-08-15T00:00:00.000Z"
  }
}
```

| Code | Meaning |
|---|---|
| 200 | Success |
| 400 | Invalid request body or params |
| 404 | Resource not found |
| 409 | Conflict |
| 429 | Rate limit exceeded |
| 500 | Internal server error |
| 501 | Not implemented |