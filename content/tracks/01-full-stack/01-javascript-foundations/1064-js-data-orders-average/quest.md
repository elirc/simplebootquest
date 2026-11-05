---
slug: "js-data-orders-average"
title: "Data: Average total (in cents)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average total (in cents)

Return the average `totalCents` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `ORDERS` in the tests):

```js
const ORDERS = [
  {id: 1, code: "E-501", totalCents: 23906, items: 6, status: "shipped", country: "DE"},
  {id: 2, code: "E-500", totalCents: 4946, items: 5, status: "paid", country: "US"},
  {id: 3, code: "C-301", totalCents: 24454, items: 9, status: "paid", country: "US"},
  {id: 4, code: "B-201", totalCents: 12308, items: 5, status: "paid", country: "DE"},
  {id: 5, code: "A-100", totalCents: 8552, items: 2, status: "cancelled", country: "UK"},
  {id: 6, code: "A-101", totalCents: 3394, items: 2, status: "paid", country: "US"},
  {id: 7, code: "C-300", totalCents: 15050, items: 7, status: "paid", country: "US"},
  {id: 8, code: "D-401", totalCents: 17970, items: 4, status: "cancelled", country: "DE"}
]
```
