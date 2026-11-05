---
slug: "ut-testing-reducers"
title: "Testing a Reducer"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
hints: ["Deep-freeze your input states, and mutation bugs will throw.", "Use `toBe` (not `toEqual`) for the \"same object\" check."]
---
# Testing a Reducer

Reducers are pure functions, which makes them the easiest thing in a React app to test, and one of the most valuable (they hold your state logic).

For each action, test:

1. The new state is correct.
2. The old state was **not mutated** (freeze it!).
3. Unrelated parts of the state are unchanged.
4. Unknown actions return the **same** state object.

`cartReducer(state, action)`, with state `{ items: [{ sku, qty }], coupon: null }`:

| Action | Effect |
|--------|--------|
| `{ type: 'add', sku }` | adds `{ sku, qty: 1 }`, or increments `qty` if the sku is already there |
| `{ type: 'remove', sku }` | removes the item |
| `{ type: 'setQty', sku, qty }` | sets `qty`; `qty <= 0` removes the item |
| `{ type: 'applyCoupon', code }` | sets `coupon` to the code in upper case |
| anything else | returns `state` unchanged (same object) |
