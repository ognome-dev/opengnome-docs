---
title: Architecture
description: System architecture and design decisions for self-hosters
---

```
Browser
|
|-- React + Vite (artifacts/opengnome, port 5173 in dev)
|     |
|     |-- /api/* --> proxied to Express API
|
|-- Express API (artifacts/api-server, port 8080)
|
|-- PostgreSQL (via Drizzle ORM)
|-- PubMed NCBI E-utilities (HTTPS)
|-- ClinicalTrials.gov v2 API (HTTPS)
|-- Anthropic API (reasoning engine)
|-- OpenAI API (card image generation)
|-- Solana mainnet-beta (compressed NFT minting)
|-- Arweave via Irys (permanent metadata storage)
```

Frontend: React 18, Vite, Wouter (routing), TanStack Query (data fetching), Tailwind v4, Shadcn UI. Built to a static dist/ folder for production.

Backend: Express v5, TypeScript ESM, Drizzle ORM, Pino logging, bundled with esbuild. Stateless except for the PostgreSQL connection.

Shared libraries: pnpm workspace packages in lib/ provide shared Zod schemas (api-zod), the OpenAPI spec and codegen config (api-spec), generated TanStack Query hooks (api-client-react), the database schema and client (db), and the Anthropic SDK wrapper (integrations-anthropic).

Deployment: the frontend builds to a static folder served by any CDN. The backend is a Node.js process that can run on any platform that supports Node.js 20. The two can be deployed independently.

Database: PostgreSQL managed externally. The schema is managed by Drizzle Kit. No ORM migrations are used; the db:push command syncs the schema directly.

External API dependencies: the backend depends on six external APIs. Outages in PubMed, ClinicalTrials.gov, Anthropic, OpenAI, Solana, or Irys will cause partial or full degradation depending on which feature is affected. Analysis requires Anthropic. Card generation requires OpenAI. Minting requires Solana and Irys.