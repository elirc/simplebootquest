---
slug: "ts-data-transactions-above"
title: "Data: Transactions with a amount above a limit"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Transactions with a amount above a limit

Return the reference of every transaction whose `amount` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-03", amount: -369, day: 21, category: "fun"},
  {id: 2, reference: "TX-10", amount: 565, day: 14, category: "salary"},
  {id: 3, reference: "TX-11", amount: 42, day: 9, category: "rent"},
  {id: 4, reference: "TX-08", amount: 677, day: 22, category: "salary"},
  {id: 5, reference: "TX-06", amount: 794, day: 11, category: "travel"},
  {id: 6, reference: "TX-12", amount: -11, day: 10, category: "salary"},
  {id: 7, reference: "TX-09", amount: 661, day: 16, category: "food"},
  {id: 8, reference: "TX-01", amount: 359, day: 17, category: "food"}
]
```

Type the parameters and the return value. The interface is already written for you.
