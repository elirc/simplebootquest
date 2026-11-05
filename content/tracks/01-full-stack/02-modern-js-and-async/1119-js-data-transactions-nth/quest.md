---
slug: "js-data-transactions-nth"
title: "Data: The n-th transaction by day of the month"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The n-th transaction by day of the month

Return the reference of the transaction ranked `n` (1 = highest `day`), or `null` if `n` is out of range.

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-09", amount: 759, day: 25, category: "salary"},
  {id: 2, reference: "TX-04", amount: 410, day: 25, category: "fun"},
  {id: 3, reference: "TX-06", amount: -174, day: 23, category: "travel"},
  {id: 4, reference: "TX-08", amount: 946, day: 28, category: "fun"},
  {id: 5, reference: "TX-05", amount: 58, day: 23, category: "rent"},
  {id: 6, reference: "TX-01", amount: 1063, day: 5, category: "food"},
  {id: 7, reference: "TX-12", amount: 549, day: 22, category: "rent"},
  {id: 8, reference: "TX-07", amount: 1010, day: 25, category: "salary"}
]
```
