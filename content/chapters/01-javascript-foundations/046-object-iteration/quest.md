---
slug: "js-object-iteration"
title: "Iterating Objects"
type: "code"
language: "js"
xp: 15
hints: ["`Object.values(obj)` gives you an array you can `reduce`.", "`Object.fromEntries(Object.entries(obj).map(...))` maps over an object."]
---
# Iterating Objects

Objects aren't arrays, but you can turn them into arrays and use all your array skills:

```js
const stock = { apples: 5, pears: 0, plums: 12 };

Object.keys(stock);     // ['apples', 'pears', 'plums']
Object.values(stock);   // [5, 0, 12]
Object.entries(stock);  // [['apples', 5], ['pears', 0], ['plums', 12]]

for (const [fruit, count] of Object.entries(stock)) {
  console.log(fruit, count);
}

// …and back again:
Object.fromEntries([['a', 1], ['b', 2]]);  // { a: 1, b: 2 }
```

The `entries → transform → fromEntries` pattern lets you "map over an object":

```js
Object.fromEntries(Object.entries(prices).map(([k, v]) => [k, v * 1.2]));
```

## Your task

1. `totalStock(stock)` sums every value.
2. `inStock(stock)` returns the names (keys) with a count above 0, sorted alphabetically.
3. `mapValues(obj, fn)` returns a new object with `fn(value, key)` applied to each value.
4. `filterObject(obj, predicate)` keeps only the entries where `predicate(value, key)` is true.
