# Recipe Box: Architecture

## Context & requirements
Recipe Box lets home cooks store, organise and share recipes. There are ~2k DAU today, and the target is 200k within 18 months. Key requirements: p95 API latency < 200 ms, 99.5% availability, and no data loss (an RPO of 5 minutes).

## Current architecture
```
browser ─▶ CDN (static assets, photos) ─▶ Node/Express (1 instance, also serves the React build)
                                            ├─▶ Postgres (managed, PITR enabled)
                                            ├─▶ S3-compatible storage (photos)
                                            └─▶ pg-boss jobs (emails, thumbnails)
```
A TypeScript monorepo: React + Vite frontend, Express 5 API, Prisma, shared types package.

## Data model
`users`, `recipes(owner_id, title, ingredients JSONB, steps, visibility)`, `tags`, `recipe_tags`, `photos`, `favorites`, `share_links`, and `audit_log`. All foreign keys are indexed. `(owner_id, updated_at)` serves the main list.

## Key decisions

| Decision | Alternatives considered | Why |
|----------|------------------------|-----|
| Modular monolith | Microservices | One small team; one deploy is faster to change and debug |
| Postgres for everything (incl. the job queue) | Redis + BullMQ, MongoDB | Fewer moving parts; transactional enqueue |
| JWT in an httpOnly cookie | Server sessions in Redis | Stateless instances; we accept the lack of instant revocation (14-day expiry) |
| Presigned direct uploads | Uploads through the API | Large files never touch the API |
| Cursor pagination | Offset | Stable under inserts; fast at depth |

## Known weaknesses & risks
- A single API instance is a single point of failure (restarts cause brief downtime).
- The in-memory rate limiter won't work once we scale out.
- No read replica; heavy search uses `ILIKE`, which will degrade.
- Restores have been tested only once; there's no runbook for a regional outage.

## Evolution plan (100×)
1. **Now:** 2 instances behind the load balancer, rate limiting moved to Redis, scheduled restore drills. Trigger: launch.
2. **~20k DAU** (p95 > 200 ms on list endpoints): Redis caching for public recipe pages, CDN HTTP caching, connection pooler.
3. **~80k DAU** (DB CPU > 60%): a read replica for search and public pages, Postgres FTS → Meilisearch with outbox sync.
4. **~200k DAU:** autoscaling, background jobs on dedicated workers, partitioning of the `audit_log` and `events` tables.
Not planned: sharding or microservices. The estimates (≈ 2k req/s peak, < 200 GB of data) fit a single primary.

## Operations
OpenTelemetry traces plus JSON logs with request ids; SLO burn-rate alerts; PITR with 14-day retention and quarterly restore drills; CI (typecheck, tests, migration check) gating deploys; rolling deploys with graceful shutdown; feature flags for risky changes; dependency and secret scanning in CI.
