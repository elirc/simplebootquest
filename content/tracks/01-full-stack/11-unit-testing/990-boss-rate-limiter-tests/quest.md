---
slug: "ut-boss-rate-limiter"
title: "Boss: Test a Rate Limiter"
type: "code"
language: "js"
mode: "write-tests"
xp: 60
boss: true
hints: ["Assert the whole result object with toEqual, so remaining and resetInMs are checked too.", "Test the window boundary at windowMs - 1 and exactly windowMs.", "A blocked hit just before the boundary, then a hit at the boundary, catches the \"blocked requests restart the window\" bug."]
---
# Boss: Test a Rate Limiter

Security-critical code deserves the most thorough tests. Write a test suite for this **fixed-window rate limiter** that catches **every one of 7 hidden bugs**.

`createLimiter({ limit, windowMs, now })` returns `hit(key)` → `{ allowed, remaining, resetInMs }`:

- Each key gets `limit` requests per window. The window **starts at that key's first request**, and lasts `windowMs`.
- `remaining` is how many more requests are allowed in this window after this one (0 when blocked).
- `resetInMs` is the time until this key's window ends.
- Once `now() - windowStart >= windowMs`, a new window starts on the next hit.
- Blocked requests don't extend or reset the window.
- Keys are independent.
- `limit` must be a positive integer, otherwise `createLimiter` throws a `RangeError`.

`now` is injected, so control time with a variable (`let t = 0; const now = () => t;`).

Plan your cases before you write them: the first request, the last allowed one, the first blocked one, the exact window boundary, two keys, and an invalid limit.
