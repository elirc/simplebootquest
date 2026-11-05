---
slug: "node-p-build-query"
title: "Practice: Building Query Strings"
type: "code"
language: "js"
xp: 15
hints: ["`Object.entries` gives you `[key, value]` pairs in insertion order.", "Normalise every value to an array first: `Array.isArray(v) ? v : [v]`. Then there is only one code path."]
---
# Practice: Building Query Strings

The reverse job: turning an object into `?q=...`. You need this whenever your frontend calls an API with filters.

```js
buildQuery({ q: 'hello world', tags: ['a', 'b'], page: 2 })
// "q=hello%20world&tags=a&tags=b&page=2"
```

## Your task
Write `buildQuery(params)`:
- Encode keys and values with `encodeURIComponent`.
- Arrays repeat the key once per item.
- Skip keys whose value is `undefined` or `null` (a very common source of `?page=undefined` bugs).
- Numbers and booleans become strings.
- Return `""` when nothing is left.
