---
slug: auth-rate-limiting
title: Rate Limiting
type: code
language: ts
xp: 25
hints: ["Filter out timestamps older than the window on every hit.", "Retry-after is `oldest + windowMs - now`."]
---
# Rate Limiting

Without limits, an attacker can try millions of passwords against your login endpoint (**credential stuffing**), or flood your API until it falls over. A rate limiter caps how many requests a client can make in a time window.

```ts
import rateLimit from 'express-rate-limit';
app.use('/api/auth/login', rateLimit({ windowMs: 15 * 60_000, limit: 10 }));
```

### Sliding window

The **sliding window log** algorithm keeps a timestamp for each recent request per key (an IP address or user id). On each request:

1. Drop timestamps older than `now - windowMs`.
2. If `limit` or more remain → reject with `429 Too Many Requests`.
3. Otherwise → record `now` and allow.

When rejecting, tell the client when to come back with a `Retry-After` header: the time until the oldest timestamp leaves the window.

Note that an in-memory limiter only works with **one server process**. With several instances you need shared storage such as Redis.

## Your task

Implement `createRateLimiter({ limit, windowMs, now })`, where `now()` returns the current time in ms (injected so the tests can control time). It returns:

- `hit(key)` → `{ allowed: boolean, remaining: number, retryAfterMs: number }`
  - `remaining` is how many more requests are allowed in the current window after this one (`0` when rejected).
  - `retryAfterMs` is `0` when allowed. When rejected, it's the ms until the oldest request in the window expires.
  - Rejected requests are **not** recorded.
- `reset(key)` clears a key (e.g. after a successful login).
