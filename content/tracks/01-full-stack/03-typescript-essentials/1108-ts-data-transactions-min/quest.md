---
slug: "ts-data-transactions-min"
title: "Data: The transaction with the lowest amount"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The transaction with the lowest amount

Return the reference of the transaction with the **lowest** `amount` (first one on ties), or `null` for an empty list.

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-05", amount: 476, day: 7, category: "food"},
  {id: 2, reference: "TX-11", amount: 70, day: 9, category: "rent"},
  {id: 3, reference: "TX-03", amount: 79, day: 20, category: "food"},
  {id: 4, reference: "TX-09", amount: -257, day: 17, category: "food"},
  {id: 5, reference: "TX-10", amount: 1077, day: 18, category: "food"},
  {id: 6, reference: "TX-04", amount: 446, day: 26, category: "travel"},
  {id: 7, reference: "TX-02", amount: 618, day: 22, category: "food"},
  {id: 8, reference: "TX-06", amount: 519, day: 11, category: "food"}
]
```

Type the parameters and the return value. The interface is already written for you.
