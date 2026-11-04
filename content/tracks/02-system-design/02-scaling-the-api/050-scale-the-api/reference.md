# Scaling plan: 100 → 100,000 DAU

## Today
One VM runs the Express API (a single Node process) and serves the built React app. It connects to a managed Postgres (max 100 connections). Uploads go to `./uploads`, sessions are JWT cookies, and a `setInterval` sends reminder emails. The limits: one CPU core in use, a single point of failure, and local-disk uploads.

## Stage 1: make it stateless (before we need it)
- Move uploads to S3-compatible object storage, served via a CDN with long cache headers.
- Move the reminder job to a scheduled job with a database lock, so only one instance runs it.
- Move the rate limiter to Redis (or the Postgres-backed store from the host).
- JWT cookies are already stateless. Keep them.
- Put static assets (the React build) behind the CDN too.

**Trigger:** do this now; it's cheap and removes the blockers for everything else.

## Stage 2: horizontal scaling (~5–10k DAU, or CPU > 60% at peak)
- 2–4 API instances behind the platform's L7 load balancer, with health checks on `/api/health` (DB check = readiness).
- Pool size per instance = 10, so 4 × 10 = 40 connections, leaving headroom under 100. Add PgBouncer when instances × pool approaches 70% of the limit.
- Zero-downtime deploys via rolling restarts (already handled by graceful SIGTERM shutdown).

## Stage 3: read scaling (~50k+ DAU, DB CPU > 70% or p95 > 200 ms)
- Cache hot, read-heavy endpoints (public recipe pages) in Redis with short TTLs, plus HTTP caching at the CDN for anonymous pages.
- Add a read replica for heavy list/search queries that tolerate a little lag. Writes and read-after-write flows stay on the primary.
- Review slow-query logs and add indexes before buying hardware.

## What we are not doing (yet)
- **Sharding:** ~500 req/s and tens of GB fit comfortably on one primary. Sharding would add huge complexity.
- **Microservices:** one team, one deployable. A modular monolith is faster to change.
- **Multi-region:** our users are mostly in one region; a CDN covers static latency.

## Signals we will monitor
p95/p99 latency per endpoint, error rate, instance CPU and memory, DB CPU, active connections vs max, slow queries (> 100 ms), cache hit ratio, and queue depth once we add jobs.
