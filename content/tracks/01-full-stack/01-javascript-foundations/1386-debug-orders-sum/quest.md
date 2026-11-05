---
slug: "debug-orders-sum"
title: "Debug: Total item count of all orders"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Total item count of all orders

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes a total that is off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the sum of `items` across all orders. An empty list totals 0.

The tests call your function with this data (also available as `ORDERS` in the tests):

```js
const ORDERS = [
  {id: 1, code: "C-301", totalCents: 2539, items: 5, status: "cancelled", country: "US"},
  {id: 2, code: "B-201", totalCents: 10368, items: 4, status: "cancelled", country: "DE"},
  {id: 3, code: "C-300", totalCents: 19143, items: 5, status: "cancelled", country: "DE"},
  {id: 4, code: "E-501", totalCents: 17819, items: 7, status: "shipped", country: "UK"},
  {id: 5, code: "A-101", totalCents: 1726, items: 1, status: "pending", country: "US"},
  {id: 6, code: "C-302", totalCents: 20811, items: 9, status: "paid", country: "UK"},
  {id: 7, code: "E-500", totalCents: 6912, items: 3, status: "paid", country: "UK"},
  {id: 8, code: "A-100", totalCents: 17229, items: 3, status: "shipped", country: "UK"}
]
```
