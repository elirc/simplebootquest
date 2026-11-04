---
slug: "js-pure-functions"
title: "Pure Functions & Side Effects"
type: "code"
language: "js"
xp: 15
hints: ["Spread the cart (`{ ...cart }`) and replace `items` with a new array.", "`filter` and `map` always return new arrays.", "In `applyDiscount`, spread each item too: `({ ...item, price: ... })`."]
---
# Pure Functions & Side Effects

A **pure function**:

1. Returns the same output for the same input.
2. Has **no side effects**: it doesn't modify its arguments or outside variables, and does no I/O.

```js
// ❌ impure: mutates its input
function addItem(cart, item) {
  cart.items.push(item);
  return cart;
}

// ✅ pure: returns a new cart
function addItem(cart, item) {
  return { ...cart, items: [...cart.items, item] };
}
```

Pure functions are easy to test, safe to reuse, and they're what React expects for rendering and reducers. Keep the impure parts (network, database, `Date.now()`, `Math.random()`) at the edges of your program.

## Your task

The starter functions **mutate their inputs**. Rewrite them as pure functions with the same results:

1. `addItem(cart, item)`: returns a new cart with the item appended.
2. `removeItem(cart, id)`: returns a new cart without the item with that id.
3. `applyDiscount(cart, percent)`: returns a new cart where every item's `price` is reduced by `percent`% (rounded to 2 decimals).

The tests freeze the inputs, so any mutation throws an error.
