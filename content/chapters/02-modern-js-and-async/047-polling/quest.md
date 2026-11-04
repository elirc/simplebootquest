---
slug: "js-polling"
title: "Polling Until Done"
type: "code"
language: "js"
xp: 20
hints: ["A `for (;;)` loop with `return` and `throw` inside is clear here.", "Check `isDone` before sleeping, so the first check happens immediately."]
---
# Polling Until Done

Some operations take a while: video encoding, report generation, a payment being confirmed. The API returns a job id, and you **poll** its status until it's finished:

```js
const job = await api.startExport();
const result = await pollUntil(() => api.getJob(job.id), (j) => j.status === 'done', { intervalMs: 1000, timeoutMs: 60_000 });
```

Good polling has an interval (don't hammer the server), a timeout (don't poll forever), and handles failure states (stop if the job failed).

## Your task

Implement `pollUntil(check, isDone, { intervalMs, timeoutMs, isFailed = () => false })`:

- Calls `check()` immediately, then every `intervalMs` (await `sleep(intervalMs)` between checks; `sleep` is available).
- Resolves with the value once `isDone(value)` is true.
- Rejects with `Error('Job failed')` if `isFailed(value)` is true.
- Rejects with `Error('Timed out')` if the total time exceeds `timeoutMs`, measured with `Date.now()`.
