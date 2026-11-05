---
slug: "debug-transactions-average"
title: "Debug: Average amount"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Average amount

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes a total that is off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the average `amount` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-06", amount: 762, day: 10, category: "travel"},
  {id: 2, reference: "TX-12", amount: 880, day: 28, category: "fun"},
  {id: 3, reference: "TX-07", amount: 1045, day: 19, category: "food"},
  {id: 4, reference: "TX-04", amount: 789, day: 20, category: "fun"},
  {id: 5, reference: "TX-09", amount: 1113, day: 2, category: "rent"},
  {id: 6, reference: "TX-10", amount: -232, day: 22, category: "travel"},
  {id: 7, reference: "TX-01", amount: 474, day: 5, category: "salary"},
  {id: 8, reference: "TX-05", amount: 585, day: 19, category: "salary"}
]
```
