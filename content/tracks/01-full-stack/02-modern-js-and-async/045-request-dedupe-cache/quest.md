---
slug: "js-request-cache"
title: "Real-World: Caching & Deduplicating Requests"
type: "code"
language: "js"
xp: 30
hints: ["Store the *promise* in the cache, not just the value, and you get deduplication for free.", "On rejection, delete the entry so the next call retries.", "Track whether an entry is still pending, so in-flight requests never \"expire\"."]
resources: [{"title": "TanStack Query: caching", "url": "https://tanstack.com/query/latest/docs/framework/react/guides/caching"}]
---
# Real-World: Caching & Deduplicating Requests

Three components mount at the same time and all request `/api/me`. Without care, that's three identical network calls. A small cache fixes two problems:

1. **Deduplication:** while a request is in flight, later callers get the *same promise*.
2. **Caching:** once it resolves, reuse the result for `ttlMs` milliseconds.

Failed requests must **not** be cached, so the next call retries. This is the core of what TanStack Query and SWR do.

## Your task

Implement `createCache(fetcher, { ttlMs, now = Date.now })`, which returns:

- `get(key)` → a promise of `fetcher(key)`, deduplicated while in flight and cached for `ttlMs` after it resolves.
- `invalidate(key)` → removes the key, so the next `get` refetches.

`now` is injected for testing.
