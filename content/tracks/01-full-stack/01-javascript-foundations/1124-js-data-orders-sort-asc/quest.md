---
slug: "js-data-orders-sort-asc"
title: "Data: Sort orders by item count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["`[...array].sort(...)` copies first, so the original stays untouched.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Sort orders by item count

Return the codes sorted by `items` from **lowest to highest**. Ties keep their original order. Don't mutate the input array.

The tests call your function with this data (also available as `ORDERS` in the tests):

```js
const ORDERS = [
  {id: 1, code: "E-500", totalCents: 8068, items: 7, status: "shipped", country: "UK"},
  {id: 2, code: "D-400", totalCents: 15378, items: 6, status: "pending", country: "UK"},
  {id: 3, code: "C-302", totalCents: 5666, items: 2, status: "cancelled", country: "UK"},
  {id: 4, code: "B-200", totalCents: 17470, items: 2, status: "paid", country: "UK"},
  {id: 5, code: "B-201", totalCents: 24846, items: 7, status: "paid", country: "US"},
  {id: 6, code: "C-301", totalCents: 18758, items: 5, status: "shipped", country: "UK"},
  {id: 7, code: "E-501", totalCents: 23705, items: 3, status: "paid", country: "UK"},
  {id: 8, code: "A-102", totalCents: 9152, items: 8, status: "pending", country: "DE"}
]
```
