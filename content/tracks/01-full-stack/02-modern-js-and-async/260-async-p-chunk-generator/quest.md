---
slug: "async-p-chunk-generator"
title: "Practice: Lazy Chunks & IDs"
type: "code"
language: "js"
xp: 15
hints: ["Yield a batch as soon as it is full, and the leftovers at the end."]
---
## Your task
1. `function* chunks(iterable, size)` lazily yields arrays of up to `size` items from **any** iterable, including infinite generators.
2. `function* idGenerator(prefix)` yields `"<prefix>-1"`, `"<prefix>-2"`, … forever.
3. `takeN(iterable, n)` collects the first `n` values.
