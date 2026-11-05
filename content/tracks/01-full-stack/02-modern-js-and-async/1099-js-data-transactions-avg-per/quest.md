---
slug: "js-data-transactions-avg-per"
title: "Data: Average day of the month per category"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average day of the month per category

Return an object mapping each `category` to the average `day` of its transactions, rounded to a whole number.

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-01", amount: 1106, day: 15, category: "fun"},
  {id: 2, reference: "TX-12", amount: 469, day: 15, category: "rent"},
  {id: 3, reference: "TX-10", amount: 119, day: 23, category: "rent"},
  {id: 4, reference: "TX-07", amount: -106, day: 21, category: "food"},
  {id: 5, reference: "TX-05", amount: -151, day: 25, category: "rent"},
  {id: 6, reference: "TX-04", amount: 1082, day: 4, category: "travel"},
  {id: 7, reference: "TX-02", amount: 877, day: 6, category: "food"},
  {id: 8, reference: "TX-08", amount: 768, day: 13, category: "fun"}
]
```
