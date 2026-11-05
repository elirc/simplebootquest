# URL shortener

## Requirements
- **Functional:** create a short link (optionally a custom alias); redirect; view click stats; delete my links.
- **Non-functional:** redirect p95 < 50 ms, 99.95% availability for redirects, links never break.
- **Scale:** 1M creates/month ≈ 0.4/s. 100M redirects/month ≈ 40/s average, ~400/s peak. 5 years × 12M links × ~500 bytes ≈ 30 GB. One Postgres is fine.

## High-level design
```
client → CDN/edge → redirect service → Redis (code → url) → Postgres (on a miss)
                                    └→ click events → queue → aggregator → stats table
```

## Data model
`links(code PK, url, owner_id, created_at, disabled_at)`, `link_stats(code, day, clicks, PRIMARY KEY (code, day))`.

## API
`POST /api/links {url, alias?}` → 201 `{code, shortUrl}`, `GET /:code` → 302, `GET /api/links/:code/stats`.

## Deep dive: codes, redirects and counting
- **Codes:** 7 random base62 characters (62^7 ≈ 3.5 trillion), inserted with `ON CONFLICT DO NOTHING` and regenerated on a collision (rare). Random codes aren't enumerable, unlike counters, which leak volume and make scraping easy.
- **Redirect:** **302** (not 301), so browsers don't cache permanently: we keep counting clicks and can disable abusive links. The mapping is cached in Redis (and at the edge for 60 s). Links are immutable, so caching is safe, and disabling one purges the key.
- **Clicks:** the redirect path only publishes an event (or increments a Redis counter). A worker flushes the aggregates to `link_stats` every minute. Counting never blocks a redirect.
- **Abuse:** check URLs against Google Safe Browsing on creation, rate-limit creation per user, and allow fast disabling.

## Trade-offs & alternatives
- Random codes vs a counter: random is slightly longer and needs collision handling, but isn't enumerable.
- 302 vs 301: 302 costs an extra hop on repeat visits, but keeps analytics and control.
- Approximate click counts (a flush every minute) instead of exact real-time counts, to keep redirects fast.
