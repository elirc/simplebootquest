---
slug: "async-p-memoize-args"
title: "Practice: Memoizing Multi-Argument Functions"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["On a hit, delete and re-insert the key, so it moves to the end of the Map."]
---
## Your task
`memoize(fn, { maxSize = Infinity } = {})` caches results for **any number** of primitive arguments (use `JSON.stringify(args)` as the key). When the cache exceeds `maxSize`, evict the **least recently used** entry. (A `Map` remembers insertion order, so deleting and re-setting a key on access makes it "recent".) Expose `cache.size` as `.size()`.
