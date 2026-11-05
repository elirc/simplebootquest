---
slug: "js-data-transactions-sort-asc"
title: "Data: Sort transactions by amount"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["`[...array].sort(...)` copies first, so the original stays untouched.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Sort transactions by amount

Return the references sorted by `amount` from **lowest to highest**. Ties keep their original order. Don't mutate the input array.

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-05", amount: -46, day: 20, category: "rent"},
  {id: 2, reference: "TX-11", amount: -14, day: 27, category: "rent"},
  {id: 3, reference: "TX-03", amount: -269, day: 21, category: "fun"},
  {id: 4, reference: "TX-10", amount: 33, day: 20, category: "travel"},
  {id: 5, reference: "TX-04", amount: 1003, day: 6, category: "travel"},
  {id: 6, reference: "TX-08", amount: 411, day: 11, category: "food"},
  {id: 7, reference: "TX-02", amount: 675, day: 1, category: "fun"},
  {id: 8, reference: "TX-12", amount: 1099, day: 7, category: "travel"}
]
```
