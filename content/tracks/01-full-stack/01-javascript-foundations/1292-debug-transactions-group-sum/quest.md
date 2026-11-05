---
slug: "debug-transactions-group-sum"
title: "Debug: Total day of the month per category"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Total day of the month per category

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes counts that are off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return an object mapping each `category` to the **sum** of `day` for transactions in it.

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-06", amount: 276, day: 23, category: "fun"},
  {id: 2, reference: "TX-03", amount: -239, day: 16, category: "food"},
  {id: 3, reference: "TX-12", amount: 1066, day: 1, category: "food"},
  {id: 4, reference: "TX-10", amount: -329, day: 6, category: "food"},
  {id: 5, reference: "TX-11", amount: -45, day: 1, category: "travel"},
  {id: 6, reference: "TX-04", amount: -124, day: 21, category: "salary"},
  {id: 7, reference: "TX-02", amount: 524, day: 16, category: "rent"},
  {id: 8, reference: "TX-07", amount: 643, day: 7, category: "rent"}
]
```
