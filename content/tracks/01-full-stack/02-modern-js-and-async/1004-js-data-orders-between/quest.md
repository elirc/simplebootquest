---
slug: "js-data-orders-between"
title: "Data: Orders in a total (in cents) range"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Orders in a total (in cents) range

Return the codes of orders whose `totalCents` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `ORDERS` in the tests):

```js
const ORDERS = [
  {id: 1, code: "A-100", totalCents: 19663, items: 8, status: "shipped", country: "DE"},
  {id: 2, code: "C-301", totalCents: 20032, items: 9, status: "paid", country: "US"},
  {id: 3, code: "A-102", totalCents: 669, items: 2, status: "shipped", country: "US"},
  {id: 4, code: "A-101", totalCents: 5979, items: 8, status: "shipped", country: "UK"},
  {id: 5, code: "D-401", totalCents: 12030, items: 7, status: "paid", country: "UK"},
  {id: 6, code: "D-400", totalCents: 787, items: 3, status: "paid", country: "US"},
  {id: 7, code: "C-302", totalCents: 3846, items: 3, status: "paid", country: "UK"},
  {id: 8, code: "C-300", totalCents: 1066, items: 9, status: "shipped", country: "US"}
]
```
