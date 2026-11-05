---
slug: "ts-data-orders-min"
title: "Data: The order with the lowest total (in cents)"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The order with the lowest total (in cents)

Return the code of the order with the **lowest** `totalCents` (first one on ties), or `null` for an empty list.

The tests call your function with this data (also available as `ORDERS` in the tests):

```js
const ORDERS = [
  {id: 1, code: "C-300", totalCents: 5828, items: 4, status: "cancelled", country: "DE"},
  {id: 2, code: "A-101", totalCents: 1084, items: 2, status: "cancelled", country: "UK"},
  {id: 3, code: "A-102", totalCents: 3047, items: 8, status: "pending", country: "UK"},
  {id: 4, code: "C-301", totalCents: 8320, items: 8, status: "paid", country: "DE"},
  {id: 5, code: "D-400", totalCents: 629, items: 2, status: "shipped", country: "US"},
  {id: 6, code: "A-100", totalCents: 12688, items: 1, status: "pending", country: "US"},
  {id: 7, code: "B-200", totalCents: 21631, items: 4, status: "cancelled", country: "DE"},
  {id: 8, code: "B-201", totalCents: 2848, items: 3, status: "shipped", country: "DE"}
]
```

Type the parameters and the return value. The interface is already written for you.
