---
slug: "js-data-orders-chain"
title: "Data: Filter, sort, map: orders in one status"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Filter, sort, map: orders in one status

Return the codes of orders whose `status` equals `value`, sorted by `totalCents` **highest first**. One chain of array methods is enough.

The tests call your function with this data (also available as `ORDERS` in the tests):

```js
const ORDERS = [
  {id: 1, code: "A-101", totalCents: 18316, items: 5, status: "shipped", country: "UK"},
  {id: 2, code: "B-200", totalCents: 2848, items: 3, status: "cancelled", country: "UK"},
  {id: 3, code: "C-302", totalCents: 20412, items: 6, status: "pending", country: "US"},
  {id: 4, code: "A-100", totalCents: 24381, items: 7, status: "paid", country: "US"},
  {id: 5, code: "E-501", totalCents: 13756, items: 4, status: "cancelled", country: "DE"},
  {id: 6, code: "C-301", totalCents: 22528, items: 3, status: "shipped", country: "DE"},
  {id: 7, code: "A-102", totalCents: 7930, items: 4, status: "shipped", country: "DE"},
  {id: 8, code: "C-300", totalCents: 21599, items: 1, status: "shipped", country: "DE"}
]
```
