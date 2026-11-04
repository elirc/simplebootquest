# Observability plan: Recipe Box

## SLIs & SLOs
- **Availability:** proportion of `/api/*` requests not returning 5xx. SLO 99.5% / 28 days.
- **Latency:** proportion of `GET /api/recipes*` completing in < 300 ms. SLO 95%.
- **Durability:** recipe creates acknowledged with 201 and readable afterwards, checked by a synthetic probe every 5 min. SLO 99.9%.

## Logging
One JSON line per request: `{"time","level","msg":"request","requestId","method","path","status","ms","userId"}`. Errors include the stack and release version. Never logged: request and response bodies, passwords, cookies, Authorization headers, reset tokens, or full emails in error messages. The logger redacts these keys automatically. Retention is 14 days.

## Dashboard
RED per route (rate, 5xx %, p50/p95/p99), instance CPU and memory, Postgres CPU, active connections vs max, slow queries (> 100 ms), job queue depth and age of the oldest job, plus deploy markers on every graph.

## Alerts

| Alert | Condition | Severity | Runbook |
|-------|-----------|----------|---------|
| Fast error-budget burn | Availability burn rate > 14× over 5 min and 1 h | Page | 5xx runbook |
| Slow burn | Burn rate > 2× over 6 h | Ticket | Investigate next day |
| Health check failing | `/api/health` failing on all instances for 2 min | Page | 5xx runbook |
| Stuck jobs | Oldest job > 15 min | Ticket (page if > 1 h) | Queue runbook |
| DB connections | > 85% of max for 10 min | Ticket | Scaling notes |

## Dependencies: timeouts & fallbacks
- **Postgres:** statement timeout 5 s, pool acquire timeout 2 s, and readiness fails if the DB is down, so the balancer drains the instance.
- **Email provider:** 3 s timeout, only from background jobs, with retries and backoff. Signup never waits on email.
- **Image CDN:** if unavailable, show a placeholder image. It's not critical.

## Runbook: API returning 5xx
1. Check the deploy markers. If a deploy happened in the last hour: **roll back now**, then confirm the error rate drops.
2. If a feature flag changed recently, turn it off.
3. Check `/api/health` and DB metrics. If connections are exhausted, restart the instances one at a time and check for long-running queries (`pg_stat_activity`). Kill any runaway query.
4. If the host or region is impaired, check the provider status page and post on our status page.
5. Search the logs for `level=error` grouped by `msg`, and take the top error's requestId to its trace.
6. Post updates every 30 minutes until resolved. Afterwards, open a postmortem doc with the timeline.
