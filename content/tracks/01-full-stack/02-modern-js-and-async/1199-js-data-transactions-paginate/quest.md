---
slug: "js-data-transactions-paginate"
title: "Data: Paginate transactions"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Paginate transactions

Return `{ items, page, totalPages }` where `items` are the references on page `page` (1-based) of size `size`. Out-of-range pages return an empty `items` array.

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-08", amount: -262, day: 21, category: "rent"},
  {id: 2, reference: "TX-04", amount: -244, day: 4, category: "rent"},
  {id: 3, reference: "TX-12", amount: -296, day: 13, category: "food"},
  {id: 4, reference: "TX-06", amount: 379, day: 1, category: "food"},
  {id: 5, reference: "TX-07", amount: 746, day: 11, category: "rent"},
  {id: 6, reference: "TX-10", amount: 10, day: 2, category: "food"},
  {id: 7, reference: "TX-05", amount: 1052, day: 9, category: "rent"},
  {id: 8, reference: "TX-11", amount: 1125, day: 17, category: "travel"}
]
```
