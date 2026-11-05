---
slug: "ts-p-typed-tally"
title: "Practice: Typed Grouping Helpers"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice"
hints: ["A Map preserves non-string keys like numbers and booleans."]
---
## Your task
1. `countBy<T, K extends string>(items, keyFn): Partial<Record<K, number>>` counts items per key.
2. `groupByKey<T, K extends keyof T>(items, key)` groups items by the value of a property, returning a `Map<T[K], T[]>` (a Map, so the keys can be numbers, booleans, anything).
3. `topKey(counts)` returns the key with the highest count, or `undefined`.
