---
slug: "js-recursion"
title: "Recursion"
type: "code"
language: "js"
xp: 20
hints: ["The last digit of `n` is `n % 10`, and the rest is `Math.floor(n / 10)`.", "In `flatten`, when an item is an array, push the *flattened* version of it with spread."]
---
# Recursion

A **recursive** function calls itself on a smaller version of the problem, until it reaches a **base case** it can answer directly.

```js
function factorial(n) {
  if (n <= 1) return 1;          // base case
  return n * factorial(n - 1);   // recursive case
}
```

Recursion shines on **nested data**: folder trees, comment threads, menus and JSON. Each level looks like the whole thing.

```js
const comment = { text: 'hi', replies: [{ text: 'yo', replies: [] }] };
function countComments(c) {
  return 1 + c.replies.reduce((sum, r) => sum + countComments(r), 0);
}
```

⚠️ Forget the base case and you get `RangeError: Maximum call stack size exceeded`.

## Your task

1. `sumDigits(n)` sums the digits of a non-negative integer recursively (`1234` → `10`).
2. `flatten(array)` flattens arbitrarily nested arrays (`[1, [2, [3, [4]]]]` → `[1, 2, 3, 4]`). Don't use `.flat()`!
3. `countFiles(node)` counts files in a tree where a node is either `{ type: 'file', name }` or `{ type: 'folder', name, children: [...] }`.
