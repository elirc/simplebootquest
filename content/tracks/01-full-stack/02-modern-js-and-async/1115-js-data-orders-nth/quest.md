---
slug: "js-data-orders-nth"
title: "Data: The n-th order by item count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The n-th order by item count

Return the code of the order ranked `n` (1 = highest `items`), or `null` if `n` is out of range.

The tests call your function with this data (also available as `ORDERS` in the tests):

```js
const ORDERS = [
  {id: 1, code: "C-302", totalCents: 10691, items: 7, status: "shipped", country: "US"},
  {id: 2, code: "E-500", totalCents: 10175, items: 6, status: "pending", country: "DE"},
  {id: 3, code: "A-102", totalCents: 12306, items: 7, status: "paid", country: "UK"},
  {id: 4, code: "C-300", totalCents: 21809, items: 5, status: "cancelled", country: "UK"},
  {id: 5, code: "C-301", totalCents: 6403, items: 6, status: "pending", country: "DE"},
  {id: 6, code: "A-101", totalCents: 24346, items: 1, status: "paid", country: "UK"},
  {id: 7, code: "D-401", totalCents: 6882, items: 4, status: "shipped", country: "DE"},
  {id: 8, code: "B-201", totalCents: 2883, items: 9, status: "paid", country: "US"}
]
```
