---
slug: "async-p-deferred"
title: "Practice: Deferred Promises"
type: "code"
language: "js"
xp: 15
hints: ["Capture resolve/reject in variables inside the executor.", "Use `.finally` for cleanup that runs either way."]
resources: [{"title": "MDN: Promise.withResolvers", "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/withResolvers"}]
---
# Practice: Deferred Promises

Sometimes you need to resolve a promise from **outside** its executor: in event-driven code, test helpers and queues. That's a **deferred**. Modern JavaScript even ships `Promise.withResolvers()` for this.

## Your task
1. `createDeferred()` returns `{ promise, resolve, reject, settled }`, where `settled()` returns whether resolve or reject has been called.
2. `waitForEvent(emitter, event, timeoutMs)` returns a promise that resolves with the first payload of `event` (from an `emitter` with `on(event, fn)` returning an unsubscribe function). It rejects with `Error('Timed out waiting for <event>')` after `timeoutMs`, and always unsubscribes.
