---
slug: "js-p-deep-clone"
title: "Practice: Deep Clone"
type: "code"
language: "js"
xp: 15
hints: ["Check the special types (Date, Map, Set, Array) before plain objects."]
---
# Practice: Deep Clone

`structuredClone` exists, but writing a deep clone yourself teaches recursion over data structures.

## Your task
`deepClone(value)` returns a deep copy supporting primitives, arrays, plain objects, `Date`, `Map` and `Set`. Mutating the clone must never affect the original.
