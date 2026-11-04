---
slug: "js-retry-backoff"
title: "Retry with Exponential Backoff"
type: "code"
language: "js"
xp: 25
hints: ["A `for (let attempt = 1; ; attempt++)` loop with `return await` inside `try` works neatly.", "Give up when `attempt > retries`."]
resources: [{"title": "AWS: Exponential backoff and jitter", "url": "https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/"}]
---
# Retry with Exponential Backoff

Networks fail transiently. Retrying immediately can make an overloaded server worse, so production clients wait longer between each attempt: **exponential backoff**.

```
attempt 1 fails → wait 100ms
attempt 2 fails → wait 200ms
attempt 3 fails → wait 400ms
```

Real systems also add random **jitter**, so thousands of clients don't all retry in sync. And they only retry errors that might succeed next time (a 503, not a 400).

## Your task

Implement `retry(fn, { retries = 3, baseMs = 10, shouldRetry = () => true, sleep })`:

- Calls `fn(attempt)`, where `attempt` starts at 1.
- On failure, if attempts remain and `shouldRetry(err)` is true, waits `baseMs * 2 ** (attempt - 1)` by calling the injected `await sleep(ms)`, then tries again.
- `retries` is the number of **re**-tries, so there are at most `retries + 1` attempts in total.
- When giving up, rethrow the last error.

`sleep` is injected so the tests can record the delays without actually waiting.
