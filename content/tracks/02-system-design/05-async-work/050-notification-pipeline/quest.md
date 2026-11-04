---
slug: "sd-notification-pipeline"
title: "Design Doc: A Notification Pipeline"
type: "design"
xp: 40
hints: ["Start from \"what if the process crashes right here?\" at every arrow in your diagram.", "Idempotency belongs at every step that could run twice."]
rubric: ["Keeps the request path fast: only the comment and a durable event are written synchronously", "Avoids the dual-write problem (outbox or a DB-backed queue in the same transaction)", "Makes consumers idempotent (dedup keys or provider idempotency keys)", "Respects user preferences and the provider rate limit (throttling / concurrency limits)", "Runs the digest from a single scheduler, safely re-runnable", "Defines retries with backoff, a dead-letter queue, and alerts", "Lists monitoring metrics (queue depth, age of oldest job, failure rate)"]
minWords: 200
---
# Design Doc: A Notification Pipeline

Your capstone needs notifications: when someone comments on a user's recipe (or task), the owner gets an **in-app notification** and, depending on their preferences, an **email** (immediately, or batched into a daily digest). Expect 200k notifications/day, with bursts when popular content goes viral. The email provider allows 100 sends/second and occasionally returns 503s.

Design the pipeline:

- What happens synchronously in the "create comment" request, and what happens asynchronously.
- How you guarantee a notification is never lost if a process crashes.
- How you avoid duplicate emails.
- How you respect user preferences and the provider's rate limit.
- How the daily digest works with multiple instances.
- What you monitor, and what happens to jobs that keep failing.
