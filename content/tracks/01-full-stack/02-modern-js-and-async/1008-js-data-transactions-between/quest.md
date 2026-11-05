---
slug: "js-data-transactions-between"
title: "Data: Transactions in a day of the month range"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Transactions in a day of the month range

Return the references of transactions whose `day` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-01", amount: 306, day: 3, category: "food"},
  {id: 2, reference: "TX-08", amount: -75, day: 27, category: "salary"},
  {id: 3, reference: "TX-12", amount: -261, day: 5, category: "food"},
  {id: 4, reference: "TX-02", amount: -197, day: 8, category: "fun"},
  {id: 5, reference: "TX-09", amount: 74, day: 23, category: "salary"},
  {id: 6, reference: "TX-06", amount: 447, day: 6, category: "travel"},
  {id: 7, reference: "TX-05", amount: 150, day: 2, category: "rent"},
  {id: 8, reference: "TX-10", amount: -92, day: 18, category: "salary"}
]
```
