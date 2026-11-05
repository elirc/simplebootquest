---
slug: "ts-data-orders-between"
title: "Data: Orders in a total (in cents) range"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Orders in a total (in cents) range

Return the codes of orders whose `totalCents` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `ORDERS` in the tests):

```js
const ORDERS = [
  {id: 1, code: "C-302", totalCents: 6285, items: 4, status: "paid", country: "US"},
  {id: 2, code: "B-200", totalCents: 15734, items: 8, status: "paid", country: "DE"},
  {id: 3, code: "A-101", totalCents: 21031, items: 5, status: "cancelled", country: "UK"},
  {id: 4, code: "E-501", totalCents: 10288, items: 8, status: "paid", country: "DE"},
  {id: 5, code: "D-401", totalCents: 7388, items: 8, status: "pending", country: "UK"},
  {id: 6, code: "A-102", totalCents: 17662, items: 7, status: "cancelled", country: "UK"},
  {id: 7, code: "A-100", totalCents: 10671, items: 6, status: "pending", country: "UK"},
  {id: 8, code: "B-201", totalCents: 15240, items: 3, status: "paid", country: "DE"}
]
```

Type the parameters and the return value. The interface is already written for you.
