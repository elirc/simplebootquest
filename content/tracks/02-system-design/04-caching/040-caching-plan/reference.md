# Caching plan: product catalogue

## Access patterns
2,000 req/s at peak, 200:1 reads to writes. Listing and detail pages are identical for all anonymous users. Logged-in users see the same product data plus a personalised recommendations block.

## What we cache, where, and for how long

| Data | Layer | TTL | Invalidation |
|------|-------|-----|--------------|
| JS/CSS/images | CDN + browser | 1 year (hashed URLs) | New deploy = new URLs |
| Product images | CDN | 30 days | Versioned image URLs on change |
| Product detail JSON (public) | CDN `s-maxage=60, stale-while-revalidate=300` + Redis | 60 s / 10 min | Price or stock change → `DEL product:{id}` + CDN purge by surrogate key |
| Listing pages (category, page, sort) | Redis | 60 s ± jitter | Short TTL; listings tolerate a minute of staleness |
| Category tree | In-process memory | 5 min | Rarely changes; TTL only |

## Personalised content
The page shell and product data are public and cacheable. Recommendations are loaded by a separate `/api/me/recommendations` call with `Cache-Control: private, no-store` and keys scoped by user id in Redis (`recs:{userId}`, 15 min). Requests with session cookies bypass the CDN cache for that endpoint. This split means one user's recommendations can never leak to another through a shared cache.

## Never cached
Stock and price **at checkout**: read from the primary database inside the order transaction, with `SELECT ... FOR UPDATE` on the stock row. Cart, payment and account endpoints are `no-store`.

## Cold start & stampede protection
- Warm Redis 10 minutes before the sale by requesting the top 2,000 products and the first pages of every category.
- Request coalescing in the API: a single in-flight load per key, while other requests await it.
- stale-while-revalidate at the CDN, plus TTL jitter (±10%) so keys don't expire in sync.
- Rate-limit cache-miss recomputation per key as a last resort.

## Metrics
CDN hit ratio (target > 90% for anonymous traffic), Redis hit ratio (> 95%), DB QPS and CPU before/after, p95 latency of detail and listing endpoints, and a count of checkout failures caused by stock mismatches (should be ~0).
