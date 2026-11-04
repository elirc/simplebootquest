---
slug: "js-slice-vs-splice"
title: "Copying, Slicing & Inserting"
type: "code"
language: "js"
xp: 15
hints: ["Build the new array from slices: `[...array.slice(0, i), item, ...array.slice(i)]`.", "`move` can be written as a remove followed by an insert."]
resources: [{"title": "MDN: Array.prototype.toSorted", "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted"}]
---
# Copying, Slicing & Inserting

Two names that sound alike but behave very differently:

| | `slice(start, end)` | `splice(start, count, ...items)` |
|-|---------------------|----------------------------------|
| Mutates? | ❌ no, returns a copy | ✅ **yes**, changes the array |
| Returns | the selected items | the removed items |

Modern JavaScript has non-mutating versions of the mutating methods:

```js
const a = [3, 1, 2];
a.toSorted();            // [1, 2, 3]  (a unchanged)
a.toReversed();          // [2, 1, 3]
a.toSpliced(1, 1);       // [3, 2]
a.with(0, 99);           // [99, 1, 2] — replace one index
```

In React state and reducers, **always** use the non-mutating versions.

## Your task

Write **non-mutating** helpers (the tests freeze the input arrays):

1. `insertAt(array, index, item)` returns a new array with the item inserted at `index`.
2. `removeAt(array, index)` returns a new array without the element at `index`.
3. `replaceAt(array, index, item)` returns a new array with the element at `index` replaced.
4. `move(array, from, to)` moves an element from one index to another (as in drag-to-reorder).
