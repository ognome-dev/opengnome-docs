---
title: Known limitations
description: Current technical and operational limitations of the platform
---

## Solana RPC reliability

The public Solana RPC endpoint can be slow under load. Setting a dedicated SOLANA_RPC_URL improves mint reliability.

## PubMed abstract availability

Some PubMed articles have no publicly available abstract. In these cases, the reasoning engine uses only the article title, which reduces output quality for those sources.

## Card image generation timeouts

Generating the trading card image can occasionally time out. When this happens, the mint continues with the static fallback image. The fallback image is not unique to the report.

## Merkle tree capacity

The current Merkle tree has depth 14, which supports up to 16,384 compressed NFT leaves. Once full, a new tree must be created manually and the database record updated. This is a manual operational step.

## Evidence coverage

PubMed coverage is strongest for English-language peer-reviewed literature. Non-English sources and grey literature are not included. The platform retrieves up to 8 items per source per query.

## Rate limit

2 analyses per IP per UTC day. Shared IPs share this quota.