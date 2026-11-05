---
slug: "react-p-cart-reducer"
title: "Practice: A Shopping Cart Reducer"
type: "code"
language: "jsx"
xp: 15
optional: true
section: "Practice"
hints: ["Return new objects with spread (`{ ...i, qty: i.qty + 1 }`) and new arrays with `map` and `filter`."]
---
# Practice: A Shopping Cart Reducer

`useReducer` keeps state logic in a **pure function** `(state, action) => newState`. Because it's pure, you can test every rule without rendering anything.

The tests render your component with `render()` and inspect the result with `find`, `findAll` and `text`, just like React Testing Library queries but without a browser.

## Your task
1. `cartReducer(state, action)`, where the state is `{ items: [{ id, name, priceCents, qty }] }`:
   - `{ type: 'add', product }`: adds with qty 1, or increments the qty if it's already in the cart.
   - `{ type: 'setQty', id, qty }`: sets the quantity. Qty 0 or less removes the item.
   - `{ type: 'remove', id }` and `{ type: 'clear' }`.
   - Unknown actions return the **same** state object. Never mutate the state.
2. `cartTotals(state)` returns `{ count, totalCents }`.
3. `<CartSummary state />` renders `<p>Your cart is empty</p>` for an empty cart, else `<p>{count} item(s): ${total}</p>`, with the total formatted as dollars with 2 decimals (`"3 item(s): $12.50"`).
