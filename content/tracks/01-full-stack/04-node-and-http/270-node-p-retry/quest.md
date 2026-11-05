---
slug: "node-p-retry"
title: "Practice: Retrying with Exponential Backoff"
type: "code"
language: "js"
xp: 15
hints: ["`2 ** i` is exponentiation. `Array.from({ length: n }, (_, i) => ...)` builds the list.", "An infinite `for` loop with `return` on success and `throw` when out of retries is the cleanest shape."]
---
# Practice: Retrying with Exponential Backoff

Networks fail. A good client retries **transient** failures, waiting longer each time so it doesn't hammer a struggling server: 100 ms, 200 ms, 400 ms… capped at some maximum.

## Your task
1. `backoffDelays(retries, baseMs, maxMs)` returns the list of waits: `baseMs * 2^i` for `i = 0 … retries-1`, each capped at `maxMs`.
2. `async retry(fn, { retries, shouldRetry = () => true, wait = async () => {} })`:
   - Calls `fn(attempt)` (attempt starts at 1) and returns its result as soon as it succeeds.
   - On failure, if retries are left **and** `shouldRetry(error)` is true, calls `await wait(attempt)` and tries again.
   - Otherwise rethrows the last error.

`retries: 2` means up to 3 calls in total. (`wait` is injected so tests run instantly. In real code it would sleep for `backoffDelays(...)[attempt - 1]`.)
