---
slug: "sd-scheduled-jobs"
title: "Scheduled Jobs & Retries"
type: "quiz"
xp: 15
questions: [{"prompt": "Three API instances each use setInterval for a nightly job. The fix is…", "options": ["Use a longer interval", "A single scheduler: platform cron, queue repeatable jobs, or a DB lock", "Run it in the browser"], "answer": 1}, {"prompt": "Which job design survives skipped and doubled runs?", "options": ["\"At 9am, email everyone\"", "\"Email users whose last_digest_at is more than 24h ago, then update it\"", "\"Email users once per process start\""], "answer": 1}, {"prompt": "Should a job retry a 400 Bad Request from a third-party API?", "options": ["Yes, forever", "No: it is a permanent error, so dead-letter it and alert", "Yes, immediately"], "answer": 1}, {"prompt": "Why add jitter to retry backoff?", "options": ["To make retries slower", "So many failed jobs don't all retry at the same moment and overwhelm the dependency", "It is required by HTTP"], "answer": 1}, {"prompt": "How should you schedule \"9am local time\" emails?", "options": ["Use the server's time zone", "Store each user's time zone and compute the UTC send time", "Send at 9am UTC to everyone"], "answer": 1}]
---
# Scheduled Jobs & Retries

Recurring work (nightly cleanup, daily digests, monthly invoices) needs a **scheduler**. With multiple instances, `setInterval` runs once **per instance**. Options:

- The platform's cron (Render cron jobs, Kubernetes CronJob, GitHub Actions on a schedule) calls a protected endpoint or runs a script.
- The job queue's repeatable jobs (BullMQ, pg-boss `schedule`), which ensure a single execution.
- A database **advisory lock** around the job, so only one instance runs it.

### Make jobs safe to re-run

Crons get skipped (during deploys) or doubled (with clock skew, or a retry). Write jobs that work **incrementally**: "send digests to users whose `last_digest_at` is older than 24h", rather than "send to everyone because it's 9am". Then a missed run catches up, and a doubled run does nothing.

### Retries

Retry transient failures (timeouts, 503s) with **exponential backoff and jitter**. Don't retry permanent failures (400 Bad Request, validation errors). Cap the attempts, then dead-letter.

### Time zones

"Send at 9am" is ambiguous. Store each user's time zone, and schedule in UTC.
