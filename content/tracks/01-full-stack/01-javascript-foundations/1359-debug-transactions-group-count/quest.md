---
slug: "debug-transactions-group-count"
title: "Debug: How many transactions per category?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: How many transactions per category?

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes counts that are off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return an object mapping each `category` to the number of transactions with it. Only include values that appear.

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-07", amount: 389, day: 24, category: "rent"},
  {id: 2, reference: "TX-01", amount: 779, day: 21, category: "food"},
  {id: 3, reference: "TX-10", amount: 139, day: 9, category: "rent"},
  {id: 4, reference: "TX-05", amount: 548, day: 27, category: "food"},
  {id: 5, reference: "TX-11", amount: 356, day: 11, category: "salary"},
  {id: 6, reference: "TX-09", amount: 422, day: 16, category: "food"},
  {id: 7, reference: "TX-12", amount: 22, day: 12, category: "rent"},
  {id: 8, reference: "TX-03", amount: 532, day: 5, category: "fun"}
]
```
