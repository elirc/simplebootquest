---
slug: "debug-transactions-avg-per"
title: "Debug: Average amount per category"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Average amount per category

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes wrong rounding. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return an object mapping each `category` to the average `amount` of its transactions, rounded to a whole number.

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-08", amount: 740, day: 25, category: "rent"},
  {id: 2, reference: "TX-02", amount: -105, day: 26, category: "travel"},
  {id: 3, reference: "TX-05", amount: 984, day: 10, category: "fun"},
  {id: 4, reference: "TX-10", amount: 810, day: 24, category: "food"},
  {id: 5, reference: "TX-04", amount: 286, day: 9, category: "food"},
  {id: 6, reference: "TX-06", amount: 287, day: 4, category: "fun"},
  {id: 7, reference: "TX-03", amount: -349, day: 16, category: "travel"},
  {id: 8, reference: "TX-01", amount: 819, day: 10, category: "salary"}
]
```
