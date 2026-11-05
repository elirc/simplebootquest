---
slug: "ts-data-orders-sum"
title: "Data: Total total (in cents) of all orders"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total total (in cents) of all orders

Return the sum of `totalCents` across all orders. An empty list totals 0.

The tests call your function with this data (also available as `ORDERS` in the tests):

```js
const ORDERS = [
  {id: 1, code: "C-301", totalCents: 9994, items: 4, status: "cancelled", country: "DE"},
  {id: 2, code: "E-501", totalCents: 24750, items: 4, status: "pending", country: "UK"},
  {id: 3, code: "C-302", totalCents: 6880, items: 1, status: "paid", country: "US"},
  {id: 4, code: "C-300", totalCents: 13502, items: 5, status: "shipped", country: "DE"},
  {id: 5, code: "D-401", totalCents: 9752, items: 3, status: "paid", country: "DE"},
  {id: 6, code: "A-100", totalCents: 3880, items: 2, status: "shipped", country: "US"},
  {id: 7, code: "B-200", totalCents: 19801, items: 6, status: "shipped", country: "UK"},
  {id: 8, code: "B-201", totalCents: 6146, items: 7, status: "pending", country: "UK"}
]
```

Type the parameters and the return value. The interface is already written for you.
