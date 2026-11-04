---
slug: "sd-observability-plan"
title: "Design Doc: Observability & Runbook for Your API"
type: "design"
xp: 40
hints: ["Start from the user: which failures would they actually notice?", "A runbook's first steps should be mitigations that need no understanding of the cause."]
rubric: ["Defines 2–3 SLIs with numeric SLO targets", "Specifies structured logging with request ids, and lists data that must never be logged", "Lists dashboard metrics (RED per endpoint, plus DB and queue health)", "Distinguishes paging alerts (symptom-based) from tickets", "Sets timeouts and fallbacks for external dependencies", "Includes a step-by-step runbook with mitigation steps (rollback, flags) before diagnosis"]
minWords: 200
---
# Design Doc: Observability & Runbook for Your API

Your capstone is about to get its first real users. Write the **observability plan** you'd want in place before launch, plus a **runbook** for the most likely incident.

Cover:

- SLIs and SLOs for your API (pick 2–3 user-facing ones).
- What you log (and what you must never log), with an example log line.
- Which metrics go on the main dashboard.
- Which alerts page someone, and which become tickets.
- Timeouts and fallbacks for each external dependency.
- A runbook for "the API is returning 5xx errors": the steps someone half-asleep could follow.
