---
title: The reasoning engine
description: How the constrained reasoning engine processes evidence into a signal report
---

The reasoning engine is a constrained schema processing step that takes the evidence packet and produces a structured JSON output. It is constrained, not open-ended.

## Constraints

The engine can only cite sources present in the evidence packet.

It cannot invent PubMed IDs, trial IDs, or any other identifiers.

It must return a strictly typed JSON object matching the report schema.

Output is validated against the schema after generation. If invalid, the request fails rather than returning bad data.

Output is sanitized server-side to remove any disallowed terms.

## What the engine produces

The engine produces a JSON object with these fields: primarySignal, secondarySignals, correlationExplanation, confidenceScore, signalStrength, and sources.

## Confidence score vs signal strength

The confidence score reflects how strongly the retrieved evidence supports the primary signal. The signal strength reflects the magnitude of the association described in the evidence, independent of how much evidence there is.

## What the engine does not do

It does not diagnose. It does not recommend treatment. It does not produce medical advice. It synthesizes retrieved evidence into a graded signal.