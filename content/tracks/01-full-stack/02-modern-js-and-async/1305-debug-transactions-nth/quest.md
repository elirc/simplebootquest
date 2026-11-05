---
slug: "debug-transactions-nth"
title: "Debug: The n-th transaction by amount"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: The n-th transaction by amount

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the reference of the transaction ranked `n` (1 = highest `amount`), or `null` if `n` is out of range.

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-07", amount: 11, day: 3, category: "travel"},
  {id: 2, reference: "TX-03", amount: 714, day: 1, category: "fun"},
  {id: 3, reference: "TX-06", amount: 742, day: 6, category: "rent"},
  {id: 4, reference: "TX-12", amount: 1174, day: 5, category: "travel"},
  {id: 5, reference: "TX-02", amount: 109, day: 16, category: "food"},
  {id: 6, reference: "TX-09", amount: 512, day: 6, category: "food"},
  {id: 7, reference: "TX-08", amount: 910, day: 13, category: "salary"},
  {id: 8, reference: "TX-11", amount: 259, day: 11, category: "travel"}
]
```
