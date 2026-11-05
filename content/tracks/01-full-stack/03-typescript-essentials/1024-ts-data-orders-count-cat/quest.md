---
slug: "ts-data-orders-count-cat"
title: "Data: Count orders by country"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Count orders by country

Return how many orders have `country` equal to `value`.

The tests call your function with this data (also available as `ORDERS` in the tests):

```js
const ORDERS = [
  {id: 1, code: "D-400", totalCents: 9624, items: 4, status: "cancelled", country: "US"},
  {id: 2, code: "C-302", totalCents: 1321, items: 7, status: "shipped", country: "US"},
  {id: 3, code: "C-301", totalCents: 3489, items: 5, status: "pending", country: "UK"},
  {id: 4, code: "D-401", totalCents: 21806, items: 4, status: "cancelled", country: "UK"},
  {id: 5, code: "C-300", totalCents: 10772, items: 2, status: "paid", country: "DE"},
  {id: 6, code: "E-500", totalCents: 23894, items: 5, status: "shipped", country: "UK"},
  {id: 7, code: "A-101", totalCents: 15152, items: 7, status: "pending", country: "UK"},
  {id: 8, code: "B-200", totalCents: 3523, items: 2, status: "paid", country: "DE"}
]
```

Type the parameters and the return value. The interface is already written for you.
