---
slug: "debug-orders-update"
title: "Debug: Update orders immutably"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Update orders immutably

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return a **new** array where every order with `country` equal to `value` has `totalCents` increased by `amount`. Other orders are unchanged. **Don't mutate** the input objects (React state depends on this).

The tests call your function with this data (also available as `ORDERS` in the tests):

```js
const ORDERS = [
  {id: 1, code: "D-401", totalCents: 10262, items: 5, status: "paid", country: "DE"},
  {id: 2, code: "C-302", totalCents: 1388, items: 8, status: "pending", country: "DE"},
  {id: 3, code: "A-101", totalCents: 7980, items: 5, status: "shipped", country: "US"},
  {id: 4, code: "A-100", totalCents: 19286, items: 6, status: "pending", country: "DE"},
  {id: 5, code: "E-500", totalCents: 8415, items: 4, status: "pending", country: "UK"},
  {id: 6, code: "D-400", totalCents: 4457, items: 8, status: "pending", country: "UK"},
  {id: 7, code: "C-300", totalCents: 17651, items: 5, status: "cancelled", country: "UK"},
  {id: 8, code: "A-102", totalCents: 17331, items: 1, status: "cancelled", country: "UK"}
]
```
