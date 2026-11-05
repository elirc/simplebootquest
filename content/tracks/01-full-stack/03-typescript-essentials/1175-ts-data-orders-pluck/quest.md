---
slug: "ts-data-orders-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `code` and `totalCents` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `ORDERS` in the tests):

```js
const ORDERS = [
  {id: 1, code: "E-501", totalCents: 9369, items: 4, status: "paid", country: "UK"},
  {id: 2, code: "C-302", totalCents: 24001, items: 5, status: "cancelled", country: "DE"},
  {id: 3, code: "D-400", totalCents: 507, items: 6, status: "shipped", country: "DE"},
  {id: 4, code: "E-500", totalCents: 19739, items: 6, status: "cancelled", country: "US"},
  {id: 5, code: "B-201", totalCents: 1989, items: 3, status: "pending", country: "US"},
  {id: 6, code: "A-101", totalCents: 5782, items: 5, status: "cancelled", country: "DE"},
  {id: 7, code: "B-200", totalCents: 19267, items: 1, status: "cancelled", country: "UK"},
  {id: 8, code: "A-100", totalCents: 13214, items: 4, status: "pending", country: "DE"}
]
```

Type the parameters and the return value. The interface is already written for you.
