---
slug: "js-higher-order-functions"
title: "Higher-Order Functions"
type: "code"
language: "js"
xp: 15
hints: ["Start each function with an empty `out` array and `push` into it.", "`not` returns a new arrow function: `(...args) => !predicate(...args)`."]
---
# Higher-Order Functions

A **higher-order function** takes a function as an argument, returns one, or both. This is how `map`, `filter`, Express middleware and React hooks all work.

```js
function repeat(times, action) {
  for (let i = 0; i < times; i++) action(i);
}
repeat(3, (i) => console.log('lap', i));

function not(predicate) {
  return (...args) => !predicate(...args);
}
const isOdd = not((n) => n % 2 === 0);
```

Passing behaviour in as a parameter lets one function handle many situations.

## Your task

1. `myMap(items, fn)` works like `items.map(fn)`, but **write it with a loop**. Call `fn(item, index)`.
2. `myFilter(items, predicate)` works like `.filter`, with a loop.
3. `not(predicate)` returns a function that returns the opposite of `predicate`.
4. `times(n, fn)` returns an array of `fn(0)`, `fn(1)`, … `fn(n - 1)`.
