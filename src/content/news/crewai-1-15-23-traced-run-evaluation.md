---
title: "CrewAI 1.15.23 links traced runs to AMP evaluation"
description: "The CLI evaluates the last traced run through AMP, while richer task spans and TUI fixes make the trace-to-evaluation handoff more explicit."
date: "2026-09-28T21:14:32Z"
playerSlug: "crewai"
sourceName: "CrewAI official GitHub release"
sourceUrl: "https://github.com/crewAIInc/crewAI/releases/tag/1.15.23"
category: "Release"
tags: ["orchestration", "release", "crewai"]
draft: false
ogImage: "/images/news/crewai-1-15-23-traced-run-evaluation.webp"
---

CrewAI 1.15.23 connects `crewai eval` to evaluation of the last traced run through AMP. It also records that run rather than only printing it, enriches task trace spans and adds an Evaluate button in the TUI. The news is a tighter path from a captured run to evaluation, not a demonstrated increase in agent quality.

![Conceptual editorial illustration of a traced agent run feeding an evaluation workspace, not a product screenshot.](/images/news/crewai-1-15-23-traced-run-evaluation.webp)

## A trace becomes evaluation input

The release lists two related CLI changes: support for evaluating the last traced run through AMP, and recording the run for `crewai eval` instead of printing it. Task spans now include their declared output format and results, giving the trace more of the information needed to inspect what a task was expected to return and what it actually produced.

The TUI gains an Evaluate button alongside fixes for turning tracing on and for visibility of the trace-view panel. The CLI also prints the areas graded by evaluation, and a fix ensures the trace link is shown after finalization.

For builders iterating on crews, the practical implication is a more direct handoff between observing a specific execution and grading it. A useful upgrade check is to run a representative crew with tracing enabled, confirm the intended last run was captured, and inspect the evaluation's graded areas before using the result to justify a prompt or workflow change.

## Reliability fixes alongside the evaluation path

The same release retries throttled provider calls and lets Bedrock's `acall` fall back to synchronous calls. It also lists resource-handling fixes, including closing SQLite connections in flow persistence and the SQLite provider, and closing S3 response bodies properly. These are maintenance changes relevant to running repeated evaluations, but the notes provide no measured throughput or reliability improvement.

## Upgrade boundaries

The evaluation integration is explicitly through **AMP**. The release of the CrewAI code does not establish that AMP evaluation is an open-source service or that it works without platform setup. Check the relevant platform configuration and access before assuming the CLI path is usable in a particular environment.

There is no benchmark in these release notes showing better crew output, nor has this article independently tested the evaluation or provider fallbacks. Treat the release as new inspection and integration functionality; validate scores against your own task requirements rather than equating the presence of an Evaluate button with correctness.

GitHub published 1.15.23 on September 28 at 21:14:32 UTC.

## Primary sources

- [1.15.23](https://github.com/crewAIInc/crewAI/releases/tag/1.15.23) — published `2026-09-28T21:14:32Z`.
