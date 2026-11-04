---
slug: "js-concurrency-limit"
title: "Limiting Concurrency"
type: "code"
language: "js"
xp: 30
hints: ["Start `limit` \"worker\" loops. Each one takes the next index until none are left.", "Write results into `results[index]` so the order is preserved.", "JavaScript is single-threaded, so `next++` is safe between workers."]
resources: [{"title": "p-limit (npm)", "url": "https://github.com/sindresorhus/p-limit"}]
---
# Limiting Concurrency

`Promise.all(ids.map(fetch))` fires **every** request at once. With 5,000 ids you'll hit rate limits, exhaust database connections, or get blocked. Production code limits concurrency: run at most N tasks at a time, and start a new one whenever one finishes.

```js
await mapWithLimit(ids, 5, (id) => fetchUser(id));
```

This is what libraries like `p-limit` do, and a common senior-level interview question.

## Your task

Implement `mapWithLimit(items, limit, fn)`:

- Calls `fn(item, index)`, with **at most** `limit` calls in flight at any moment.
- Resolves to the results **in the original order**.
- If any call rejects, the returned promise rejects with that error.

The tests measure the maximum number of calls running at the same time.
