---
slug: "debug-transactions-histogram"
title: "Debug: Bucket transactions by amount"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Bucket transactions by amount

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes counts that are off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Group transactions into buckets of width `width` by `amount`: the bucket key is `Math.floor(value / width) * width`. Return an object of bucket → count.

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-01", amount: 539, day: 24, category: "travel"},
  {id: 2, reference: "TX-02", amount: 109, day: 8, category: "fun"},
  {id: 3, reference: "TX-11", amount: 492, day: 9, category: "travel"},
  {id: 4, reference: "TX-10", amount: 545, day: 23, category: "food"},
  {id: 5, reference: "TX-12", amount: -12, day: 7, category: "rent"},
  {id: 6, reference: "TX-06", amount: 3, day: 7, category: "travel"},
  {id: 7, reference: "TX-04", amount: 370, day: 26, category: "fun"},
  {id: 8, reference: "TX-05", amount: -194, day: 8, category: "fun"}
]
```
