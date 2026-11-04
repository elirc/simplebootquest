---
slug: "js-throttle"
title: "Throttle"
type: "code"
language: "js"
xp: 20
hints: ["Remember the time of the last run. Start it at `-Infinity` so the first call always runs.", "Use the injected `now()`, not `Date.now()`."]
---
# Throttle

**Throttling** guarantees a function runs **at most once per interval**, no matter how often it's triggered. It's ideal for scroll handlers, resize events, and "save progress" pings.

| | Debounce | Throttle |
|-|----------|----------|
| Fires | after activity *stops* | regularly *during* activity |
| Good for | search-as-you-type, autosave | scroll position, rate-limiting clicks |

## Your task

Implement `throttle(fn, ms, now = Date.now)`:

- The first call runs immediately.
- Further calls within `ms` of the last run are **ignored** (a leading-edge throttle).
- Returns the result of `fn` when it runs, otherwise `undefined`.

`now` is injected so the tests control time. Use it instead of `Date.now()`.
