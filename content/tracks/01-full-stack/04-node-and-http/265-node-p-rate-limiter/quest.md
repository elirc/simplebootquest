---
slug: "node-p-rate-limiter"
title: "Practice: A Fixed-Window Rate Limiter"
type: "code"
language: "js"
xp: 15
hints: ["Store `{ count, resetAt }` per key in a `Map`.", "Start a new window when there is none yet, or when `now() >= resetAt`."]
---
# Practice: A Fixed-Window Rate Limiter

`express-rate-limit` protects login endpoints from brute force. The simplest algorithm is a **fixed window**: each key (an IP address, a user id) gets `limit` requests per `windowMs`. When the window ends, the count resets.

To make it testable, the clock is **injected**: pass a `now()` function instead of calling `Date.now()` directly.

## Your task
Write `createRateLimiter({ limit, windowMs, now = Date.now })` returning `{ hit(key) }`. Each call to `hit` returns:
- `allowed`: whether this request is within the limit
- `remaining`: requests left in the current window (never negative)
- `resetAt`: the timestamp when the window for this key ends

A key's window starts at its first hit. Each key is counted separately.
