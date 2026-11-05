---
slug: "debug-transactions-count-cat"
title: "Debug: Count transactions by category"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Count transactions by category

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return how many transactions have `category` equal to `value`.

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-07", amount: 591, day: 8, category: "rent"},
  {id: 2, reference: "TX-09", amount: 653, day: 12, category: "salary"},
  {id: 3, reference: "TX-05", amount: 1143, day: 7, category: "salary"},
  {id: 4, reference: "TX-11", amount: 725, day: 7, category: "travel"},
  {id: 5, reference: "TX-08", amount: 689, day: 15, category: "salary"},
  {id: 6, reference: "TX-02", amount: 573, day: 28, category: "rent"},
  {id: 7, reference: "TX-04", amount: 484, day: 18, category: "food"},
  {id: 8, reference: "TX-01", amount: 803, day: 6, category: "food"}
]
```
