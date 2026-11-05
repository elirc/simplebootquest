---
slug: "api-p-query-keys"
title: "Practice: Query Keys and Invalidation"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Write a recursive `stable(value)` that rebuilds objects with sorted keys, then `JSON.stringify` it.", "Store the original key next to the data, so `invalidate` can test each entry against the prefix."]
resources: [{"title": "TanStack Query: Query keys", "url": "https://tanstack.com/query/latest/docs/framework/react/guides/query-keys"}]
---
# Practice: Query Keys and Invalidation

Data libraries identify cached data with **query keys**: arrays like `['todos', { page: 2, done: false }]`. After a mutation you **invalidate** by prefix: `invalidate(['todos'])` marks every todos query stale, whatever the filters.

Keys must be **stable**: `{ page: 2, done: false }` and `{ done: false, page: 2 }` are the same query.

## Your task
1. `hashKey(key)`: a deterministic string for a key array. Object keys are sorted (recursively), and `undefined` values in objects are dropped. A JSON form is fine.
2. `matchesPrefix(key, prefix)`: `true` when every element of `prefix` deep-equals (by `hashKey` of the element) the element at the same position in `key`.
3. `createRegistry()` returning `{ set(key, data), get(key), invalidate(prefix) }`. `invalidate` deletes every matching entry and returns how many were removed.
