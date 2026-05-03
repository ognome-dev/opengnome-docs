---
title: NFT minting pipeline
description: A technical walkthrough of how a report becomes a compressed NFT
---

The pipeline has four steps from report to on-chain NFT.

## Step 1 - Trading card image generation

An 800x1120 pixel PNG trading card is generated. The card shows the primary signal, confidence score, signal strength, rarity tier, and a QR code linking to the report. It uses a dark biotech visual design. On generation failure, the mint continues with a static fallback image.

## Step 2 - Arweave upload via Irys

The card image is uploaded to Arweave via the Irys SDK. The NFT metadata JSON is also uploaded to Arweave via Irys. Both uploads return permanent Arweave URIs. These URIs are stored in the mints table.

## Step 3 - Compressed NFT mint via mpl-bubblegum

A compressed NFT is minted to the platform Merkle tree. The tree has depth 14, capacity 16,384 leaves. The NFT is minted with 500 bps creator royalty. The mint address and transaction signature are stored.

## Step 4 - Record and return

The mint record is saved to the database. The analysis isPublic flag is set to true. The report appears on the public feed. The user receives the mint address, explorer URL, and image URI.

| Failure point | Fallback behavior |
|---|---|
| Card image generation fails | Mint continues with static og-nft.png |
| Arweave upload fails | Metadata served from /api/metadata/:id fallback endpoint |
| Solana RPC slow | Retry with exponential backoff, up to 3 attempts |
| Mint already exists | Returns 409 Conflict with existing mint record |