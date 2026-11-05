---
slug: "js-data-transactions-lookup"
title: "Data: Look up a transaction's day of the month"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Look up a transaction's day of the month

Return the `day` of the transaction whose reference is `reference`, or `null` if there isn't one.

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-06", amount: 633, day: 14, category: "food"},
  {id: 2, reference: "TX-12", amount: 346, day: 5, category: "salary"},
  {id: 3, reference: "TX-10", amount: 675, day: 23, category: "fun"},
  {id: 4, reference: "TX-05", amount: 399, day: 9, category: "fun"},
  {id: 5, reference: "TX-02", amount: 1185, day: 12, category: "fun"},
  {id: 6, reference: "TX-01", amount: 449, day: 17, category: "food"},
  {id: 7, reference: "TX-11", amount: 620, day: 2, category: "food"},
  {id: 8, reference: "TX-09", amount: 817, day: 17, category: "fun"}
]
```
