---
slug: "async-p-cancellable"
title: "Practice: Ignoring Stale Results"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["A counter of the latest call id is enough for latestOnly."]
---
# Practice: Ignoring Stale Results

Promises can't be cancelled, but you can **ignore** their result. That fixes the classic search-box race, where an older, slower response overwrites a newer one.

## Your task
1. `makeCancellable(promise)` returns `{ promise, cancel }`. After `cancel()`, the returned promise rejects with an error whose `name` is `'CancelError'` (even if the original resolves later).
2. `latestOnly(asyncFn)` returns a wrapped function. Each call's promise resolves only if it's still the **latest** call when it settles. Otherwise it resolves to `undefined`.
