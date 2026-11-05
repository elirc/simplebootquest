---
slug: "async-p-batch-loader"
title: "Practice: A DataLoader-Style Batcher"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Collect waiters per id in a Map, and dispatch once in a microtask."]
resources: [{"title": "DataLoader", "url": "https://github.com/graphql/dataloader"}]
---
# Practice: A DataLoader-Style Batcher

The N+1 problem also exists in application code: 50 components each call `loadUser(id)`, making 50 API calls. Facebook's **DataLoader** pattern collects all the loads requested in the same tick, and sends **one** batched request.

## Your task
`createLoader(batchFn)` returns `{ load(id) }`:

- `load(id)` returns a promise of that item.
- All `load` calls made synchronously in the same tick are collected, deduplicated, and passed to **one** `batchFn(ids)` call, which resolves to an array of results **in the same order as `ids`**.
- Hint: schedule the dispatch with `queueMicrotask` (or `Promise.resolve().then`) on the first load of a batch.
- If `batchFn` rejects, every pending load in that batch rejects.
