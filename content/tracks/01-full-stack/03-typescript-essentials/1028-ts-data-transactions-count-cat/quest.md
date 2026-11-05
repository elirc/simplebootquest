---
slug: "ts-data-transactions-count-cat"
title: "Data: Count transactions by category"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Count transactions by category

Return how many transactions have `category` equal to `value`.

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-11", amount: 770, day: 9, category: "food"},
  {id: 2, reference: "TX-02", amount: 1172, day: 9, category: "fun"},
  {id: 3, reference: "TX-12", amount: 181, day: 23, category: "food"},
  {id: 4, reference: "TX-03", amount: -7, day: 10, category: "salary"},
  {id: 5, reference: "TX-04", amount: 647, day: 17, category: "rent"},
  {id: 6, reference: "TX-07", amount: -29, day: 15, category: "travel"},
  {id: 7, reference: "TX-09", amount: 857, day: 26, category: "food"},
  {id: 8, reference: "TX-06", amount: 443, day: 1, category: "rent"}
]
```

Type the parameters and the return value. The interface is already written for you.
