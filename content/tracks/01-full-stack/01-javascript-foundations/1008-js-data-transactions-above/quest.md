---
slug: "js-data-transactions-above"
title: "Data: Transactions with a amount above a limit"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Transactions with a amount above a limit

Return the reference of every transaction whose `amount` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-06", amount: 207, day: 25, category: "rent"},
  {id: 2, reference: "TX-10", amount: -89, day: 1, category: "food"},
  {id: 3, reference: "TX-11", amount: 799, day: 1, category: "salary"},
  {id: 4, reference: "TX-02", amount: 432, day: 12, category: "rent"},
  {id: 5, reference: "TX-03", amount: 566, day: 6, category: "food"},
  {id: 6, reference: "TX-04", amount: 619, day: 5, category: "food"},
  {id: 7, reference: "TX-01", amount: 1068, day: 10, category: "salary"},
  {id: 8, reference: "TX-12", amount: 337, day: 18, category: "travel"}
]
```
