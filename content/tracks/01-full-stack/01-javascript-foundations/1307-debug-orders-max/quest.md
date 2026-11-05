---
slug: "debug-orders-max"
title: "Debug: The order with the highest item count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: The order with the highest item count

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the code of the order with the **highest** `items`. If several tie, return the first. Return `null` for an empty list.

The tests call your function with this data (also available as `ORDERS` in the tests):

```js
const ORDERS = [
  {id: 1, code: "D-401", totalCents: 14219, items: 6, status: "paid", country: "US"},
  {id: 2, code: "A-102", totalCents: 23283, items: 2, status: "cancelled", country: "UK"},
  {id: 3, code: "A-100", totalCents: 6462, items: 3, status: "shipped", country: "UK"},
  {id: 4, code: "D-400", totalCents: 18145, items: 7, status: "cancelled", country: "DE"},
  {id: 5, code: "E-501", totalCents: 19784, items: 6, status: "pending", country: "US"},
  {id: 6, code: "C-301", totalCents: 12110, items: 2, status: "pending", country: "US"},
  {id: 7, code: "A-101", totalCents: 7768, items: 7, status: "pending", country: "US"},
  {id: 8, code: "C-302", totalCents: 7670, items: 7, status: "shipped", country: "UK"}
]
```
