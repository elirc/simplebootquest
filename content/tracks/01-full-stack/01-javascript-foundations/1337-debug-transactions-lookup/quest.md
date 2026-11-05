---
slug: "debug-transactions-lookup"
title: "Debug: Look up a transaction's amount"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Look up a transaction's amount

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the `amount` of the transaction whose reference is `reference`, or `null` if there isn't one.

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-02", amount: -371, day: 21, category: "food"},
  {id: 2, reference: "TX-01", amount: 64, day: 8, category: "food"},
  {id: 3, reference: "TX-07", amount: -40, day: 3, category: "salary"},
  {id: 4, reference: "TX-10", amount: 871, day: 27, category: "rent"},
  {id: 5, reference: "TX-08", amount: -274, day: 4, category: "travel"},
  {id: 6, reference: "TX-05", amount: 1168, day: 10, category: "rent"},
  {id: 7, reference: "TX-09", amount: 1102, day: 2, category: "travel"},
  {id: 8, reference: "TX-04", amount: -295, day: 4, category: "food"}
]
```
