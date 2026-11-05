# Debugging postmortem: 5% of requests return 500 under load after upgrading the Postgres driver

## Symptom
After bumping `pg` and the Prisma adapter, about 5% of API requests returned 500 under the load test (200 req/s), never in manual testing. Logs showed `Error: timeout exceeded when trying to connect` from the pool, with no pattern by endpoint.

## Hypotheses & experiments
| # | Hypothesis | Experiment | Result |
|---|-----------|------------|--------|
| 1 | The new driver has a bug | Read the changelog; reproduce with the old version | The old version is fine, so it's version-related ✔ |
| 2 | Slow queries hold connections | `pg_stat_activity` during load; slow-query log | Queries are fast (< 10 ms) ✘ |
| 3 | Pool size changed | Compared effective config between versions | The new adapter ignored our `connection_limit` URL param and defaulted to a pool of 5 ✔ |
| 4 | Connection leak | Counted checkouts and releases with debug logging | No leak ✘ |

## Root cause
The upgrade changed how the pool size is configured: the old URL parameter was silently ignored, so each instance ran with 5 connections instead of 20. At 200 req/s, requests waited for a connection beyond the 2 s acquire timeout.

## Fix & verification
Set the pool size explicitly in the adapter options and log the effective pool configuration at startup. Re-ran the load test: 0 errors and p95 back to 80 ms. Added a startup test asserting the configured pool size, so a future upgrade can't silently change it.

## Where the agent helped / misled
**Helped:** it wrote the load-test script, ran `pg_stat_activity` queries during the test, and found the changelog entry once I pointed it at `node_modules`. **Misled:** its first suggestion was to raise the timeout to 30 s, which would have hidden the symptom. It also initially claimed the URL parameter was still supported, from outdated knowledge, until it read the installed source.

## Lessons
- Load-test after any database driver upgrade.
- Log the effective configuration at startup.
- Treat "increase the timeout" as a smell, not a fix.
- Make agents verify version-specific claims against installed code.
