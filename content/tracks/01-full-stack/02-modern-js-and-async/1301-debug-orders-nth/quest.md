---
slug: "debug-orders-nth"
title: "Debug: The n-th order by item count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: The n-th order by item count

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the code of the order ranked `n` (1 = highest `items`), or `null` if `n` is out of range.

The tests call your function with this data (also available as `ORDERS` in the tests):

```js
const ORDERS = [
  {id: 1, code: "D-400", totalCents: 16561, items: 2, status: "paid", country: "UK"},
  {id: 2, code: "A-100", totalCents: 17613, items: 3, status: "shipped", country: "US"},
  {id: 3, code: "C-301", totalCents: 7644, items: 7, status: "shipped", country: "DE"},
  {id: 4, code: "E-500", totalCents: 24843, items: 6, status: "cancelled", country: "DE"},
  {id: 5, code: "D-401", totalCents: 564, items: 6, status: "paid", country: "DE"},
  {id: 6, code: "E-501", totalCents: 13142, items: 5, status: "paid", country: "US"},
  {id: 7, code: "A-102", totalCents: 2450, items: 8, status: "paid", country: "US"},
  {id: 8, code: "A-101", totalCents: 21879, items: 5, status: "shipped", country: "UK"}
]
```
