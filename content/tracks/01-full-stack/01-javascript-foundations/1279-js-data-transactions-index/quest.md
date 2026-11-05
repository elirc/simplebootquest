---
slug: "js-data-transactions-index"
title: "Data: Index transactions by id"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Index transactions by id

Return an object mapping each `id` to the transaction's reference, for fast lookups.

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-09", amount: 877, day: 13, category: "food"},
  {id: 2, reference: "TX-06", amount: 554, day: 2, category: "salary"},
  {id: 3, reference: "TX-04", amount: 1187, day: 6, category: "food"},
  {id: 4, reference: "TX-07", amount: -214, day: 6, category: "rent"},
  {id: 5, reference: "TX-01", amount: 861, day: 27, category: "rent"},
  {id: 6, reference: "TX-11", amount: 931, day: 13, category: "fun"},
  {id: 7, reference: "TX-05", amount: -143, day: 25, category: "rent"},
  {id: 8, reference: "TX-08", amount: 948, day: 18, category: "salary"}
]
```
