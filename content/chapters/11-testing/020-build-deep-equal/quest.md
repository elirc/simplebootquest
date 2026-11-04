---
slug: testing-deep-equal
title: Build toEqual
type: code
language: js
xp: 25
---
# Build toEqual

You've used `expect(x).toEqual(y)` hundreds of times. Let's build the heart of it: **deep equality**.

`===` compares **references** for objects:

```js
{ a: 1 } === { a: 1 } // false: two different objects
```

Deep equality compares **structure**: same keys, and the values are deep-equal, recursively.

Edge cases a real implementation must handle:

- `NaN` should equal `NaN` (but `NaN === NaN` is false! Use `Object.is`).
- Arrays and objects with the same keys aren't equal (`[]` vs `{}`).
- Key order doesn't matter: `{a:1, b:2}` equals `{b:2, a:1}`.
- Dates compare by time value.
- **Circular references** must not cause infinite recursion.

## Your task

Implement `deepEqual(a, b)`. It must support primitives, arrays, plain objects, `Date`, `NaN`, nested structures and circular references.

Then implement `diffKeys(a, b)`, which returns a sorted array of the top-level keys whose values are **not** deep-equal, including keys present in only one of the objects. This is how test runners print a helpful diff.
