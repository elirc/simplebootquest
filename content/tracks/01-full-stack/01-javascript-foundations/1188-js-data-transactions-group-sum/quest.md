---
slug: "js-data-transactions-group-sum"
title: "Data: Total amount per category"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total amount per category

Return an object mapping each `category` to the **sum** of `amount` for transactions in it.

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-05", amount: 295, day: 12, category: "travel"},
  {id: 2, reference: "TX-10", amount: 54, day: 11, category: "food"},
  {id: 3, reference: "TX-02", amount: -260, day: 16, category: "travel"},
  {id: 4, reference: "TX-11", amount: -90, day: 12, category: "rent"},
  {id: 5, reference: "TX-07", amount: 298, day: 21, category: "food"},
  {id: 6, reference: "TX-09", amount: 1142, day: 2, category: "food"},
  {id: 7, reference: "TX-12", amount: 575, day: 15, category: "fun"},
  {id: 8, reference: "TX-06", amount: 1084, day: 25, category: "travel"}
]
```
