---
title: Trading card generation
description: How the 800x1120 NFT trading card image is generated
---

Every anchored report gets a unique 800x1120 PNG trading card.

The card composition includes a base image generated from a prompt describing the primary signal in a dark biotech style. An SVG overlay is composited on top containing the signal name, confidence score, signal strength bar, rarity badge, and QR code linking to the report URL.

The visual design uses a dark near-black background, sage green accents, and monospace typography for data labels.

The QR code encodes the full report URL. Scanning the QR code on any anchored NFT leads to the live report.

If card generation fails or times out, the mint continues using the static fallback image at /api/static/og-nft.png.