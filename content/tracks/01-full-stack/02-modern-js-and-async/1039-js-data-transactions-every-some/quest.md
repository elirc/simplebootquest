---
slug: "js-data-transactions-every-some"
title: "Data: Are all transactions under a day of the month limit?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all transactions under a day of the month limit?

Return `true` if **every** transaction has `day` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-07", amount: 355, day: 4, category: "travel"},
  {id: 2, reference: "TX-10", amount: -100, day: 15, category: "food"},
  {id: 3, reference: "TX-04", amount: 518, day: 10, category: "fun"},
  {id: 4, reference: "TX-08", amount: 1034, day: 25, category: "fun"},
  {id: 5, reference: "TX-05", amount: 965, day: 2, category: "rent"},
  {id: 6, reference: "TX-01", amount: 209, day: 11, category: "travel"},
  {id: 7, reference: "TX-11", amount: -17, day: 5, category: "salary"},
  {id: 8, reference: "TX-12", amount: -318, day: 17, category: "food"}
]
```
