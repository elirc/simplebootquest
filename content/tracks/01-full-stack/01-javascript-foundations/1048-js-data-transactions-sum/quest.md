---
slug: "js-data-transactions-sum"
title: "Data: Total amount of all transactions"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total amount of all transactions

Return the sum of `amount` across all transactions. An empty list totals 0.

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-04", amount: -359, day: 19, category: "food"},
  {id: 2, reference: "TX-09", amount: -70, day: 5, category: "rent"},
  {id: 3, reference: "TX-01", amount: -7, day: 19, category: "salary"},
  {id: 4, reference: "TX-06", amount: -112, day: 3, category: "food"},
  {id: 5, reference: "TX-11", amount: 659, day: 7, category: "salary"},
  {id: 6, reference: "TX-02", amount: 169, day: 12, category: "salary"},
  {id: 7, reference: "TX-05", amount: 786, day: 8, category: "fun"},
  {id: 8, reference: "TX-08", amount: 592, day: 26, category: "food"}
]
```
