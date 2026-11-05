---
slug: "ts-p-require-fields"
title: "Practice: Partial → Required at Runtime"
type: "code"
language: "ts"
xp: 15
hints: ["Collect the missing keys first, then throw once."]
---
# Practice: Partial → Required at Runtime

Forms build objects gradually (a `Partial<User>`), but you can only save a complete one. Validate and narrow it in a single step.

## Your task
`requireFields(obj, keys)` checks that every listed key is present (not `undefined`, `null` or `""`). It returns the object with a narrowed type (`T & Required<Pick<T, K>>`), or throws an `Error` listing **all** missing keys: `"Missing required fields: email, name"` (in the order given).
