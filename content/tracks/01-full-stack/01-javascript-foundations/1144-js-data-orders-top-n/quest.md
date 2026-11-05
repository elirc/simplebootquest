---
slug: "js-data-orders-top-n"
title: "Data: Top orders by item count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Top orders by item count

Return the codes of the `n` orders with the **highest** `items`, highest first. Don't mutate the input.

The tests call your function with this data (also available as `ORDERS` in the tests):

```js
const ORDERS = [
  {id: 1, code: "C-300", totalCents: 8581, items: 3, status: "paid", country: "UK"},
  {id: 2, code: "B-200", totalCents: 1496, items: 2, status: "cancelled", country: "UK"},
  {id: 3, code: "D-400", totalCents: 16990, items: 2, status: "paid", country: "UK"},
  {id: 4, code: "A-100", totalCents: 21516, items: 8, status: "pending", country: "DE"},
  {id: 5, code: "C-301", totalCents: 3786, items: 5, status: "pending", country: "UK"},
  {id: 6, code: "D-401", totalCents: 15473, items: 3, status: "cancelled", country: "US"},
  {id: 7, code: "A-101", totalCents: 11827, items: 4, status: "pending", country: "US"},
  {id: 8, code: "C-302", totalCents: 9986, items: 5, status: "paid", country: "UK"}
]
```
