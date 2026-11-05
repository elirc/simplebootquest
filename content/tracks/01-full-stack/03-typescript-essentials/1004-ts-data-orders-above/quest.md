---
slug: "ts-data-orders-above"
title: "Data: Orders with a total (in cents) above a limit"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Orders with a total (in cents) above a limit

Return the code of every order whose `totalCents` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `ORDERS` in the tests):

```js
const ORDERS = [
  {id: 1, code: "E-500", totalCents: 18751, items: 2, status: "shipped", country: "DE"},
  {id: 2, code: "D-400", totalCents: 13497, items: 5, status: "paid", country: "US"},
  {id: 3, code: "A-101", totalCents: 17880, items: 6, status: "pending", country: "DE"},
  {id: 4, code: "E-501", totalCents: 24159, items: 9, status: "shipped", country: "UK"},
  {id: 5, code: "A-102", totalCents: 15917, items: 5, status: "paid", country: "UK"},
  {id: 6, code: "A-100", totalCents: 8844, items: 5, status: "cancelled", country: "UK"},
  {id: 7, code: "C-301", totalCents: 19018, items: 8, status: "shipped", country: "UK"},
  {id: 8, code: "C-302", totalCents: 13830, items: 1, status: "cancelled", country: "UK"}
]
```

Type the parameters and the return value. The interface is already written for you.
