---
title: Rate limiting
description: How the daily analysis quota works
---

The limit is 2 analyses per IP address per UTC day.

The limit resets at midnight UTC every day.

Enforcement happens at the database layer, not in memory. The count is durable across server restarts.

To check your quota, use GET /api/rate-limit-status. It returns your current usage, limit, remaining, and the exact UTC reset timestamp.

When the limit is reached, the API returns HTTP 429 with a JSON body containing error, limit, and resetsAt fields.

This limit exists because evidence retrieval and reasoning engine calls have real costs. The limit keeps the platform sustainable during beta.

Authenticated tiers with higher limits are on the roadmap.