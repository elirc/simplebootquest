---
slug: "async-p-retry-until"
title: "Practice: Retry Until a Condition"
type: "code"
language: "js"
xp: 15
hints: ["`new Error(message, { cause })` attaches the underlying error."]
---
## Your task
`retryUntil(fn, isDone, { attempts, delayMs })` calls `fn()` until `isDone(result)` is true, waiting `delayMs` (with `sleep`) between attempts. Errors from `fn` count as failed attempts. Once out of attempts, it rejects with `Error('Gave up after <n> attempts')`, with the last error (if any) as the `cause`.
