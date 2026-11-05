---
slug: "debug-transactions-between"
title: "Debug: Transactions in a amount range"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Transactions in a amount range

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the references of transactions whose `amount` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-03", amount: 78, day: 20, category: "salary"},
  {id: 2, reference: "TX-05", amount: 534, day: 27, category: "fun"},
  {id: 3, reference: "TX-06", amount: 645, day: 2, category: "salary"},
  {id: 4, reference: "TX-04", amount: 873, day: 6, category: "salary"},
  {id: 5, reference: "TX-09", amount: 310, day: 25, category: "rent"},
  {id: 6, reference: "TX-07", amount: 815, day: 7, category: "salary"},
  {id: 7, reference: "TX-02", amount: -360, day: 20, category: "travel"},
  {id: 8, reference: "TX-10", amount: 1119, day: 23, category: "travel"}
]
```
