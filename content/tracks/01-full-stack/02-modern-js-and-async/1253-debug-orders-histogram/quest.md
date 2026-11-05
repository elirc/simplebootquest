---
slug: "debug-orders-histogram"
title: "Debug: Bucket orders by item count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Bucket orders by item count

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes counts that are off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Group orders into buckets of width `width` by `items`: the bucket key is `Math.floor(value / width) * width`. Return an object of bucket → count.

The tests call your function with this data (also available as `ORDERS` in the tests):

```js
const ORDERS = [
  {id: 1, code: "E-501", totalCents: 17607, items: 9, status: "shipped", country: "UK"},
  {id: 2, code: "D-400", totalCents: 7699, items: 5, status: "shipped", country: "DE"},
  {id: 3, code: "B-201", totalCents: 7641, items: 3, status: "cancelled", country: "DE"},
  {id: 4, code: "E-500", totalCents: 18403, items: 7, status: "pending", country: "DE"},
  {id: 5, code: "C-302", totalCents: 20334, items: 3, status: "shipped", country: "DE"},
  {id: 6, code: "C-301", totalCents: 5436, items: 7, status: "pending", country: "US"},
  {id: 7, code: "C-300", totalCents: 6060, items: 1, status: "shipped", country: "UK"},
  {id: 8, code: "A-101", totalCents: 16806, items: 3, status: "shipped", country: "DE"}
]
```
