---
slug: "js-data-transactions-max"
title: "Data: The transaction with the highest amount"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The transaction with the highest amount

Return the reference of the transaction with the **highest** `amount`. If several tie, return the first. Return `null` for an empty list.

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-11", amount: -30, day: 18, category: "travel"},
  {id: 2, reference: "TX-03", amount: -70, day: 25, category: "travel"},
  {id: 3, reference: "TX-07", amount: -229, day: 15, category: "travel"},
  {id: 4, reference: "TX-05", amount: -151, day: 10, category: "fun"},
  {id: 5, reference: "TX-06", amount: 759, day: 1, category: "food"},
  {id: 6, reference: "TX-10", amount: 992, day: 11, category: "food"},
  {id: 7, reference: "TX-08", amount: 268, day: 7, category: "rent"},
  {id: 8, reference: "TX-01", amount: 88, day: 20, category: "travel"}
]
```
