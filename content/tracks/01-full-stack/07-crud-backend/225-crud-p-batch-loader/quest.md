---
slug: "crud-p-batch-loader"
title: "Practice: Batching to Avoid N+1 Queries"
type: "code"
language: "js"
xp: 15
hints: ["Keep a `Map<id, waiters[]>` for the current batch. The first `load` of a batch schedules a flush with `queueMicrotask`.", "Resolve from a `Map` of the returned rows by id, since the batch function may return them in any order."]
resources: [{"title": "DataLoader on GitHub", "url": "https://github.com/graphql/dataloader"}]
---
# Practice: Batching to Avoid N+1 Queries

The **N+1 problem**: load 50 posts (1 query), then each post's author (50 more queries). It's fast with 5 rows locally and painfully slow in production.

A **batch loader** (like Facebook's DataLoader) collects every `load(id)` made in the same tick and fetches them with **one** query (`WHERE id IN (...)`).

## Your task
Write `createLoader(batchFn)`. `batchFn(ids)` is async and returns an array of records (in any order, possibly missing some), each with an `id`. Return `{ load(id) }`:
- `load(id)` returns a promise of the record with that id, or `null` if the batch didn't return it.
- All `load` calls made before the next microtask are combined into **one** `batchFn` call, with **unique** ids in first-requested order.
- If `batchFn` rejects, every pending `load` in that batch rejects with the same error.
- Later calls (after the batch was sent) start a new batch.
