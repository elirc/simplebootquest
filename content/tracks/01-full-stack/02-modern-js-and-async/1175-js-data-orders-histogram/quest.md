---
slug: "js-data-orders-histogram"
title: "Data: Bucket orders by item count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Bucket orders by item count

Group orders into buckets of width `width` by `items`: the bucket key is `Math.floor(value / width) * width`. Return an object of bucket → count.

The tests call your function with this data (also available as `ORDERS` in the tests):

```js
const ORDERS = [
  {id: 1, code: "B-200", totalCents: 22492, items: 1, status: "paid", country: "UK"},
  {id: 2, code: "C-301", totalCents: 17178, items: 7, status: "shipped", country: "UK"},
  {id: 3, code: "A-101", totalCents: 3428, items: 5, status: "cancelled", country: "US"},
  {id: 4, code: "E-501", totalCents: 13186, items: 5, status: "cancelled", country: "UK"},
  {id: 5, code: "A-100", totalCents: 24738, items: 5, status: "cancelled", country: "DE"},
  {id: 6, code: "E-500", totalCents: 19595, items: 7, status: "paid", country: "DE"},
  {id: 7, code: "D-400", totalCents: 11017, items: 3, status: "cancelled", country: "UK"},
  {id: 8, code: "D-401", totalCents: 5708, items: 6, status: "pending", country: "DE"}
]
```
