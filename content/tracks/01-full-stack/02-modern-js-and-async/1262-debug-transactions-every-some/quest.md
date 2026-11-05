---
slug: "debug-transactions-every-some"
title: "Debug: Are all transactions under a day of the month limit?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Are all transactions under a day of the month limit?

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return `true` if **every** transaction has `day` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-02", amount: 148, day: 17, category: "salary"},
  {id: 2, reference: "TX-12", amount: 798, day: 22, category: "salary"},
  {id: 3, reference: "TX-03", amount: 8, day: 8, category: "salary"},
  {id: 4, reference: "TX-07", amount: 107, day: 12, category: "salary"},
  {id: 5, reference: "TX-10", amount: 1179, day: 16, category: "rent"},
  {id: 6, reference: "TX-05", amount: 950, day: 24, category: "salary"},
  {id: 7, reference: "TX-08", amount: 1197, day: 16, category: "travel"},
  {id: 8, reference: "TX-01", amount: -70, day: 20, category: "travel"}
]
```
