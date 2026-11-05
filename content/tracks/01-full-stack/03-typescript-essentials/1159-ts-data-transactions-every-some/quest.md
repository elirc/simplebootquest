---
slug: "ts-data-transactions-every-some"
title: "Data: Are all transactions under a day of the month limit?"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all transactions under a day of the month limit?

Return `true` if **every** transaction has `day` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-09", amount: 768, day: 6, category: "travel"},
  {id: 2, reference: "TX-06", amount: -12, day: 3, category: "travel"},
  {id: 3, reference: "TX-05", amount: 934, day: 25, category: "food"},
  {id: 4, reference: "TX-12", amount: 144, day: 27, category: "fun"},
  {id: 5, reference: "TX-02", amount: 574, day: 20, category: "rent"},
  {id: 6, reference: "TX-01", amount: 375, day: 12, category: "fun"},
  {id: 7, reference: "TX-04", amount: 152, day: 24, category: "salary"},
  {id: 8, reference: "TX-07", amount: 450, day: 19, category: "food"}
]
```

Type the parameters and the return value. The interface is already written for you.
