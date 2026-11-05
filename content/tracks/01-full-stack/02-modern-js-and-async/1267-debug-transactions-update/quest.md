---
slug: "debug-transactions-update"
title: "Debug: Update transactions immutably"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Update transactions immutably

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return a **new** array where every transaction with `category` equal to `value` has `day` increased by `amount`. Other transactions are unchanged. **Don't mutate** the input objects (React state depends on this).

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-05", amount: 602, day: 27, category: "fun"},
  {id: 2, reference: "TX-12", amount: -177, day: 6, category: "rent"},
  {id: 3, reference: "TX-10", amount: 234, day: 25, category: "travel"},
  {id: 4, reference: "TX-04", amount: -44, day: 8, category: "salary"},
  {id: 5, reference: "TX-03", amount: -99, day: 20, category: "fun"},
  {id: 6, reference: "TX-02", amount: -18, day: 23, category: "rent"},
  {id: 7, reference: "TX-07", amount: -249, day: 7, category: "salary"},
  {id: 8, reference: "TX-08", amount: 515, day: 23, category: "fun"}
]
```
