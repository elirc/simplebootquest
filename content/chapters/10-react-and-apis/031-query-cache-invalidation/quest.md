---
slug: "react-api-query-keys"
title: "Query Keys & Invalidation"
type: "code"
language: "ts"
xp: 25
hints: ["Recursively sort object keys before `JSON.stringify`.", "Compare prefix parts by hashing each one."]
resources: [{"title": "TanStack Query: Query keys", "url": "https://tanstack.com/query/latest/docs/framework/react/guides/query-keys"}, {"title": "TanStack Query: Invalidation", "url": "https://tanstack.com/query/latest/docs/framework/react/guides/query-invalidation"}]
---
# Query Keys & Invalidation

TanStack Query caches responses under **query keys**, which are arrays describing what was fetched:

```ts
useQuery({ queryKey: ['todos', { done: false, page: 2 }], queryFn: ... });
useQuery({ queryKey: ['todos', 42], queryFn: ... });
```

After a mutation (say, creating a todo), you **invalidate** related keys by prefix, so any matching cached query refetches:

```ts
queryClient.invalidateQueries({ queryKey: ['todos'] });   // every key starting with 'todos'
```

Matching is by **prefix**, and objects inside keys are compared by value, not reference.

## Your task

1. `hashKey(key)` returns a stable string for a key. Object keys must be sorted, so `{a:1,b:2}` and `{b:2,a:1}` hash the same.
2. `matchesPrefix(key, prefix)` returns true if `prefix` is a prefix of `key`, element by element, using deep equality via `hashKey`.
3. `createQueryCache()` returns `{ set(key, data), get(key), invalidate(prefix), isStale(key) }`. `invalidate` marks every matching entry stale and returns the number of entries it marked. `get` returns the data (stale data is still returned: stale-while-revalidate).
