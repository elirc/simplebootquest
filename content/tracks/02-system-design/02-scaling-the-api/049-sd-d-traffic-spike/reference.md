# TV spike plan

## Expected traffic
- Normal peak: ~20 req/s. Expect **~400 req/s** for an hour, with the first 10 minutes worse (maybe 800 req/s as the segment airs).
- About 70% will be the home page and its static assets, 20% signup and login, and 10% browsing public recipes. Signed-in usage stays roughly normal.
- Signups: perhaps 5,000 in the hour, ~1.5/s on average and spiky. Each signup is a bcrypt hash (~100 ms of CPU).

## Likely bottlenecks
1. **Serving the home page and bundle from Node.** Pure waste. It should come from a CDN.
2. **The database connection pool.** If we add instances, 10 instances × pool 10 = 100 connections, near the managed plan's limit.
3. **bcrypt on signup** blocking the event loop at a high signup rate.
4. Popular public recipe pages hammering the same queries.

## Changes before Tuesday
- Put the built frontend and images behind a **CDN**. Cache `index.html` with a short `s-maxage` (60 s) and the hashed assets as immutable.
- Cache public recipe responses at the CDN for 60 s.
- Scale to **6 instances** ahead of time (don't rely on autoscaling reacting fast enough), and set `connection_limit` per instance so the total stays under the database limit. Add PgBouncer if we need more.
- Check that bcrypt runs asynchronously (`bcrypt.hash`, not `hashSync`). Its async API runs on libuv's thread pool.
- Run a **load test** (k6) at 2× the expected peak against staging, and fix what breaks.
- Add feature flags to turn off non-essential work: the "similar recipes" widget and welcome emails (send those later from a queue).

## On the night
- Dashboard: request rate, p95 latency, 5xx rate, DB connections and CPU, CDN hit ratio.
- Alerts on a 5xx rate above 1% and p95 above 1 s.
- Two engineers on call, from 7:30 to 9:30 pm, with the runbook open.
- Big red buttons: the flags above, plus a static "we're very busy, sign up below" fallback page for the home page.

## Not doing
- No migration to a new hosting platform, no new database, and no caching layer rewrite. They're too risky in a week. All changes are small, reversible and load-tested.
