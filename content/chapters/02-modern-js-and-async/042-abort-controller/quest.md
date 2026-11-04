---
slug: "js-abort-controller"
title: "Cancelling with AbortController"
type: "code"
language: "js"
xp: 25
hints: ["Check `signal.aborted` before starting the timer.", "In `createSearcher`, keep the current `AbortController` in a closure variable."]
resources: [{"title": "MDN: AbortController", "url": "https://developer.mozilla.org/en-US/docs/Web/API/AbortController"}]
---
# Cancelling with AbortController

Users navigate away, type a new search, or close a dialog, and the old request is no longer needed. `AbortController` cancels work, and `fetch` supports it natively:

```js
const controller = new AbortController();
fetch('/api/search?q=re', { signal: controller.signal })
  .catch((err) => { if (err.name === 'AbortError') return; throw err; });
controller.abort();            // cancels the request
```

There's also a shortcut for timeouts: `AbortSignal.timeout(5000)`.

Your own async functions can support cancellation too, by listening for the signal:

```js
signal.addEventListener('abort', () => reject(signal.reason), { once: true });
```

In React, the cleanup of an effect is the perfect place to call `controller.abort()`.

## Your task

1. `sleep(ms, signal)` resolves after `ms`, but rejects with an `Error` whose `name` is `'AbortError'` as soon as the signal aborts (or immediately, if it's already aborted).
2. `createSearcher(searchFn)` returns `search(query)`. Each call **aborts the previous in-flight search** by passing a fresh `signal` to `searchFn(query, signal)`. An aborted search resolves to `null` instead of rejecting.
