---
slug: "ts-data-transactions-sum"
title: "Data: Total day of the month of all transactions"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total day of the month of all transactions

Return the sum of `day` across all transactions. An empty list totals 0.

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-03", amount: 958, day: 5, category: "food"},
  {id: 2, reference: "TX-08", amount: 4, day: 13, category: "travel"},
  {id: 3, reference: "TX-09", amount: -2, day: 19, category: "fun"},
  {id: 4, reference: "TX-06", amount: 390, day: 15, category: "salary"},
  {id: 5, reference: "TX-01", amount: 55, day: 14, category: "travel"},
  {id: 6, reference: "TX-04", amount: 1078, day: 25, category: "fun"},
  {id: 7, reference: "TX-02", amount: -45, day: 5, category: "food"},
  {id: 8, reference: "TX-10", amount: -387, day: 15, category: "food"}
]
```

Type the parameters and the return value. The interface is already written for you.
