---
slug: "ts-data-transactions-between"
title: "Data: Transactions in a day of the month range"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Transactions in a day of the month range

Return the references of transactions whose `day` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-01", amount: -163, day: 27, category: "food"},
  {id: 2, reference: "TX-02", amount: 270, day: 17, category: "salary"},
  {id: 3, reference: "TX-03", amount: 1115, day: 4, category: "travel"},
  {id: 4, reference: "TX-05", amount: 1075, day: 16, category: "fun"},
  {id: 5, reference: "TX-09", amount: 922, day: 27, category: "food"},
  {id: 6, reference: "TX-11", amount: 1130, day: 21, category: "fun"},
  {id: 7, reference: "TX-06", amount: 708, day: 16, category: "rent"},
  {id: 8, reference: "TX-08", amount: 712, day: 4, category: "fun"}
]
```

Type the parameters and the return value. The interface is already written for you.
