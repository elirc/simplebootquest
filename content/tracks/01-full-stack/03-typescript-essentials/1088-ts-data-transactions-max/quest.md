---
slug: "ts-data-transactions-max"
title: "Data: The transaction with the highest amount"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The transaction with the highest amount

Return the reference of the transaction with the **highest** `amount`. If several tie, return the first. Return `null` for an empty list.

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-09", amount: -71, day: 15, category: "fun"},
  {id: 2, reference: "TX-10", amount: -280, day: 18, category: "salary"},
  {id: 3, reference: "TX-07", amount: -353, day: 23, category: "food"},
  {id: 4, reference: "TX-03", amount: 1001, day: 9, category: "salary"},
  {id: 5, reference: "TX-11", amount: 464, day: 10, category: "rent"},
  {id: 6, reference: "TX-01", amount: 614, day: 19, category: "rent"},
  {id: 7, reference: "TX-08", amount: -270, day: 9, category: "travel"},
  {id: 8, reference: "TX-12", amount: 1190, day: 21, category: "food"}
]
```

Type the parameters and the return value. The interface is already written for you.
