---
slug: "js-data-transactions-average"
title: "Data: Average amount"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average amount

Return the average `amount` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-01", amount: 386, day: 26, category: "rent"},
  {id: 2, reference: "TX-04", amount: -383, day: 23, category: "rent"},
  {id: 3, reference: "TX-02", amount: -364, day: 19, category: "salary"},
  {id: 4, reference: "TX-10", amount: 537, day: 21, category: "food"},
  {id: 5, reference: "TX-05", amount: -238, day: 3, category: "rent"},
  {id: 6, reference: "TX-06", amount: 693, day: 26, category: "food"},
  {id: 7, reference: "TX-07", amount: 1075, day: 14, category: "salary"},
  {id: 8, reference: "TX-08", amount: 792, day: 16, category: "rent"}
]
```
