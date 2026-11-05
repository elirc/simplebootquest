---
slug: "test-p-match-object"
title: "Practice: Build toMatchObject"
type: "code"
language: "js"
xp: 15
resources: [{"title": "Vitest: toMatchObject", "url": "https://vitest.dev/api/expect.html#tomatchobject"}]
---
# Practice: Build toMatchObject

`expect(user).toMatchObject({ name: 'Ada' })` passes if `user` has **at least** those properties, so extra fields are fine. It's ideal for API responses that include ids and timestamps you don't care about.

## Your task
Write `matchObject(actual, expected)` returning `true` or `false`:
- When `expected` is a plain object: `actual` must be a non-null object, and every key in `expected` must match **recursively**. Extra keys in `actual` are fine.
- When `expected` is an array: `actual` must be an array of the **same length**, and each element must match recursively (elements that are objects may have extra keys).
- A `RegExp` in `expected` matches a string that it tests true against.
- `Date`s match by time.
- Everything else uses `Object.is` (so `NaN` matches `NaN`, and `0` does not match `-0`).
