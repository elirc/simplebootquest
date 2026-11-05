---
slug: "async-p-map-series"
title: "Practice: Async map, filter & reduce"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["For asyncFilter, resolve all the booleans first with `Promise.all`, then filter by index."]
---
# Practice: Async map, filter & reduce

`array.map(async fn)` gives you an array of **promises**, and `array.filter(async fn)` doesn't work at all (a promise is always truthy!). You need async-aware helpers.

## Your task
1. `mapSeries(items, fn)` awaits `fn(item, i)` one at a time and returns the results in order.
2. `asyncFilter(items, predicate)` runs the predicates **in parallel**, and keeps the items whose predicate resolved truthy, in order.
3. `asyncReduce(items, fn, initial)` awaits `fn(acc, item)` sequentially.
