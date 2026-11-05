---
slug: "js-p-flatten-object"
title: "Practice: Flatten & Unflatten Objects"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Recurse into plain objects, passing the path prefix down."]
---
# Practice: Flatten & Unflatten Objects

Form libraries, config files and analytics tools often use flat "dot path" keys: `{ "address.city": "London" }`.

## Your task
1. `flattenObject(obj)` → `{ a: { b: 1, c: { d: 2 } }, e: 3 }` becomes `{ 'a.b': 1, 'a.c.d': 2, e: 3 }`. Arrays and `null` count as values (they aren't flattened).
2. `unflattenObject(flat)` reverses it.
