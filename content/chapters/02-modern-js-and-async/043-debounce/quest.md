---
slug: "js-debounce"
title: "Debounce"
type: "code"
language: "js"
xp: 20
hints: ["Keep `timer` and the latest args in the closure.", "Functions are objects, so you can attach `debounced.cancel = ...`."]
---
# Debounce

A search box that fires a request on **every keystroke** hammers your API. **Debouncing** waits until the user stops typing for a moment:

```
keystrokes: h  e  l  l  o ............
debounced:                    ↑ one call with "hello"
```

```js
const debouncedSearch = debounce((q) => api.search(q), 300);
input.addEventListener('input', (e) => debouncedSearch(e.target.value));
```

Each new call **cancels the pending timer** and starts a new one. Only the last call survives.

## Your task

1. `debounce(fn, ms)` returns a debounced function that calls `fn` with the **latest** arguments, `ms` after the last call.
2. Add a `.cancel()` method to the returned function that cancels any pending call.
3. Add a `.flush()` method that immediately runs a pending call (if there is one) and cancels the timer.
