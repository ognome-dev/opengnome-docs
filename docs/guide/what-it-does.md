---
title: What it does
description: An overview of what OpenGnome does and why it exists
---

OpenGnome is an anonymous biomedical research instrument. Users enter a free-text description of symptoms. The platform retrieves real published evidence, processes it through a constrained reasoning engine, and returns a structured signal report.

## What a signal report contains

A signal report includes the following fields:

- **Primary signal**: The main biomedical signal detected from the evidence.
- **Secondary signals**: Additional signals that appeared in the evidence.
- **Correlation explanation**: A plain-English explanation of why these signals were detected and how they relate to the symptoms described.
- **Confidence score**: A number from 0 to 100 that reflects how strongly the retrieved evidence supports the primary signal.
- **Signal strength**: A number from 0 to 100 that reflects the magnitude of the association described in the evidence.
- **Sources**: A list of sources with links to the original PubMed abstracts or ClinicalTrials.gov trial pages.

## What OpenGnome is not

OpenGnome is not a diagnostic tool. It is not a substitute for a doctor. It is not a symptom checker in the consumer app sense. It is research tooling only.

## Who it is for

OpenGnome is for researchers, curious individuals, and people who want to understand the published evidence behind a set of symptoms before seeing a professional.

## How it differs from a search engine

OpenGnome retrieves structured evidence and synthesizes a graded signal from it, rather than returning a list of links.