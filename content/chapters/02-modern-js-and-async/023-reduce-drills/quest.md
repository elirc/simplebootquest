---
slug: "js-reduce-drills"
title: "Drill: reduce"
type: "code"
language: "js"
xp: 20
hints: ["Always give `reduce` an initial value: `0`, `{}` or `undefined`.", "`(acc[k] ??= []).push(item)` creates the group array on first use."]
---
# Drill: reduce

`reduce` folds an array into **one value** of any shape: a number, an object, a Map, even another array.

```js
array.reduce((accumulator, item) => nextAccumulator, initialValue);

[1, 2, 3].reduce((sum, n) => sum + n, 0);                     // 6
words.reduce((acc, w) => ({ ...acc, [w]: (acc[w] ?? 0) + 1 }), {}); // counts
```

**Always pass the initial value.** Without it, `reduce` uses the first element, and an empty array throws a `TypeError`.

Readability matters: if a `reduce` is hard to read, a `for...of` loop is perfectly fine.

## Your task

1. `sumBy(items, fn)`: sum of `fn(item)`.
2. `indexBy(records, key)`: object mapping `record[key]` → record.
3. `groupBy(records, key)`: object mapping `record[key]` → array of records.
4. `maxBy(items, fn)`: the item with the largest `fn(item)`, or `undefined`.
5. `pipeline(value, fns)`: applies each function in turn (yes, `reduce` can do that too).
