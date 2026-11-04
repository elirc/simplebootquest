# Notification pipeline

## Flow overview
`POST /comments` → (one DB transaction: insert comment + enqueue `comment.created` job in pg-boss) → **fan-out worker** creates notification rows → **email worker** sends immediate emails → **digest scheduler** sends daily summaries.

## Synchronous path (in the request)
Inside a single transaction: insert the comment, and enqueue `comment.created { commentId }` using pg-boss, which lives in the same Postgres. If the transaction rolls back, the job never exists. If it commits, the job is durable. The request returns 201 in ~20 ms, with no provider calls.

## Asynchronous processing
1. **Fan-out worker:** loads the comment, finds the recipients (the recipe owner, minus the commenter), and inserts `notifications(id, user_id, comment_id, type, read_at)` rows with a **unique constraint on (user_id, comment_id, type)**, so a re-run is a no-op (`ON CONFLICT DO NOTHING`). For each recipient whose preference is `email: immediate`, it enqueues `email.send { notificationId }` with singletonKey = notificationId.
2. **Email worker:** concurrency is capped so total throughput stays ≤ 80/s (headroom under the provider's 100/s). It calls the provider with `Idempotency-Key: notification-{id}` and marks `emailed_at`, skipping if it's already set.

## Reliability: no lost or duplicate notifications
- Nothing is lost: the job is committed with the comment, and pg-boss redelivers if a worker dies mid-job.
- Duplicates are prevented: the unique constraint on notification rows, the `emailed_at` check, and the provider idempotency key.

## Preferences, digests & rate limits
Preferences per user: `off | immediate | daily`. The digest runs as a pg-boss scheduled job (a single execution across instances), every hour. It selects users whose local time is 09:00–09:59 and whose `last_digest_at` is more than 20 h ago, sends one email each, then updates `last_digest_at`. A skipped hour is caught by the next one, and a doubled run is a no-op.

## Failure handling & monitoring
Retries: up to 6 attempts with exponential backoff and jitter (30 s → ~30 min) on 5xx and timeouts. 4xx responses (an invalid address) mark the notification `email_failed` with no retry. Exhausted jobs go to a dead-letter queue and alert on-call if more than 50 arrive in an hour. Dashboards: queue depth, age of the oldest job (alert at > 10 min), send rate vs limit, failure rate by provider status, and DLQ count.
