---
slug: "js-data-orders-max"
title: "Data: The order with the highest total (in cents)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The order with the highest total (in cents)

Return the code of the order with the **highest** `totalCents`. If several tie, return the first. Return `null` for an empty list.

The tests call your function with this data (also available as `ORDERS` in the tests):

```js
const ORDERS = [
  {id: 1, code: "E-500", totalCents: 18535, items: 4, status: "cancelled", country: "US"},
  {id: 2, code: "C-300", totalCents: 3822, items: 6, status: "pending", country: "UK"},
  {id: 3, code: "C-302", totalCents: 686, items: 1, status: "shipped", country: "US"},
  {id: 4, code: "B-200", totalCents: 17819, items: 9, status: "paid", country: "DE"},
  {id: 5, code: "D-400", totalCents: 12481, items: 5, status: "cancelled", country: "DE"},
  {id: 6, code: "E-501", totalCents: 6994, items: 8, status: "cancelled", country: "US"},
  {id: 7, code: "A-102", totalCents: 10322, items: 6, status: "cancelled", country: "US"},
  {id: 8, code: "A-100", totalCents: 1144, items: 1, status: "shipped", country: "DE"}
]
```
