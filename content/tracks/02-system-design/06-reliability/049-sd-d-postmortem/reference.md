# Postmortem: dashboard latency incident

## Summary
For **47 minutes** (14:05–14:52 UTC), about **30% of API requests failed** with 504s, and the rest were very slow (p95 8 s). Every signed-in user was affected, as the dashboard is the landing page after login. No data was lost.

## Timeline
- 14:00 Deploy of v412 (activity feed and a migration adding `events.kind`).
- 14:05 p95 latency climbs and 504s begin.
- 14:12 The on-call engineer is paged (5-minute threshold plus 2-minute alert delay).
- 14:12–14:30 Investigation. The CPU looks normal, so the database is suspected.
- 14:30 Pool timeout errors spotted in the logs and linked to the new feed query.
- 14:35 Decision to roll back, delayed by uncertainty about rolling back the migration.
- 14:45 It's confirmed that the migration only added a nullable column (backwards compatible).
- 14:52 Rollback complete, and latency is back to normal.

## Root cause
The new feed query filters `events` by `user_id` with no index, so each call scanned a large part of a 40M-row table (~2 s). Because the dashboard is the most-requested endpoint, these slow queries **held most of the database pool's connections**, so every other request queued for a connection and timed out.

## Contributing factors
- No index review was done for new queries on large tables, and staging has only 50k events, so the query was fast there.
- No load test on production-sized data.
- The migration shipped in the same deploy as the code. Its rollback safety wasn't documented, which slowed the rollback.
- Alerting took 7 minutes. There's no alert on pool saturation.
- The new feed had no feature flag, so it couldn't be switched off without a deploy.

## What went well / badly
- Well: the rollback restored service fully, and the logs had clear pool timeout errors.
- Badly: detection was slow, the rollback decision was slow, and nothing could switch the feature off.

## Action items
| Action | Owner | Priority |
|--------|-------|----------|
| Add index `events(user_id, created_at DESC)` (CONCURRENTLY) before re-enabling the feed | Backend lead | P0 |
| Ship new dashboard features behind feature flags | Team | P1 |
| Seed staging with production-scale event data (anonymised) | Platform | P1 |
| Add an `EXPLAIN` check for new queries on tables over 1M rows to the PR template | Backend lead | P2 |
| Alert on DB pool wait time > 100 ms, and reduce the latency alert window to 2 minutes | On-call owner | P1 |
| Deploy migrations separately from code, with a "rollback-safe?" field in the PR | Team | P2 |
