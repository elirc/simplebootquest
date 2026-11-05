---
slug: "js-data-transactions-group-count"
title: "Data: How many transactions per category?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# How many transactions per category?

Return an object mapping each `category` to the number of transactions with it. Only include values that appear.

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-07", amount: 396, day: 3, category: "fun"},
  {id: 2, reference: "TX-08", amount: 458, day: 17, category: "fun"},
  {id: 3, reference: "TX-05", amount: 929, day: 21, category: "salary"},
  {id: 4, reference: "TX-11", amount: 538, day: 12, category: "rent"},
  {id: 5, reference: "TX-09", amount: 606, day: 3, category: "fun"},
  {id: 6, reference: "TX-06", amount: 469, day: 26, category: "fun"},
  {id: 7, reference: "TX-04", amount: 413, day: 12, category: "rent"},
  {id: 8, reference: "TX-03", amount: 39, day: 28, category: "food"}
]
```
