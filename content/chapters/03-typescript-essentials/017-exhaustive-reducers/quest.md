---
slug: "ts-exhaustive-reducers"
title: "Exhaustive Reducers with never"
type: "code"
language: "ts"
xp: 20
hints: ["Define a `CartAction` union and switch on `action.type`.", "In the `default` branch, assign `action` to a `never`-typed variable."]
---
# Exhaustive Reducers with `never`

Discriminated unions plus a `never` check means the compiler **forces** you to handle every case:

```ts
type Action =
  | { type: 'add'; title: string }
  | { type: 'remove'; id: number };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'add': ...
    case 'remove': ...
    default: {
      const unreachable: never = action;   // ❌ compile error if a case is missing
      return state;
    }
  }
}
```

Add `{ type: 'rename' }` to the union later, and every reducer that forgot it lights up red. That's refactoring with confidence.

## Your task

Implement a typed `cartReducer(state, action)` for `{ items: { sku, qty, price }[], coupon: string | null }`:

| Action | Effect |
|--------|--------|
| `{ type: 'added', sku, price }` | adds the item with qty 1, or increments qty if it's present |
| `{ type: 'qtyChanged', sku, qty }` | sets qty; `qty <= 0` removes the item |
| `{ type: 'removed', sku }` | removes it |
| `{ type: 'couponApplied', code }` | sets the coupon |
| `{ type: 'cleared' }` | empties the items and coupon |

Also implement `cartTotal(state)`: the sum of `price * qty`, minus 10% if the coupon is `"SAVE10"`, rounded to 2 decimals.
