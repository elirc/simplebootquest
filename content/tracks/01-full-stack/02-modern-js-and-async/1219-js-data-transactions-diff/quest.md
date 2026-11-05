---
slug: "js-data-transactions-diff"
title: "Data: What changed between two snapshots?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What changed between two snapshots?

Given yesterday's and today's transactions (same ids), return the ids whose `amount` changed, in today's order.

The tests call your function with this data (also available as `BEFORE` / `AFTER` in the tests):

```js
const BEFORE = [
  {id: 1, reference: "TX-03", amount: 47, day: 17, category: "rent"},
  {id: 2, reference: "TX-05", amount: 776, day: 13, category: "travel"},
  {id: 3, reference: "TX-09", amount: 462, day: 7, category: "fun"},
  {id: 4, reference: "TX-08", amount: 1039, day: 15, category: "fun"},
  {id: 5, reference: "TX-06", amount: 432, day: 7, category: "travel"},
  {id: 6, reference: "TX-02", amount: 896, day: 23, category: "food"},
  {id: 7, reference: "TX-01", amount: -256, day: 20, category: "fun"},
  {id: 8, reference: "TX-10", amount: -157, day: 12, category: "fun"}
]
```
