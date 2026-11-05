---
slug: "js-data-orders-count-cat"
title: "Data: Count orders by status"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Count orders by status

Return how many orders have `status` equal to `value`.

The tests call your function with this data (also available as `ORDERS` in the tests):

```js
const ORDERS = [
  {id: 1, code: "D-400", totalCents: 22168, items: 9, status: "cancelled", country: "UK"},
  {id: 2, code: "A-102", totalCents: 23318, items: 4, status: "cancelled", country: "UK"},
  {id: 3, code: "C-302", totalCents: 3078, items: 6, status: "pending", country: "UK"},
  {id: 4, code: "E-501", totalCents: 4552, items: 5, status: "pending", country: "US"},
  {id: 5, code: "A-100", totalCents: 7131, items: 7, status: "paid", country: "US"},
  {id: 6, code: "E-500", totalCents: 16548, items: 9, status: "cancelled", country: "UK"},
  {id: 7, code: "D-401", totalCents: 14585, items: 7, status: "cancelled", country: "US"},
  {id: 8, code: "B-200", totalCents: 4068, items: 9, status: "cancelled", country: "US"}
]
```
