---
slug: "js-data-transactions-count-cat"
title: "Data: Count transactions by category"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Count transactions by category

Return how many transactions have `category` equal to `value`.

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-06", amount: 502, day: 6, category: "travel"},
  {id: 2, reference: "TX-11", amount: 679, day: 25, category: "food"},
  {id: 3, reference: "TX-10", amount: 645, day: 22, category: "rent"},
  {id: 4, reference: "TX-04", amount: -357, day: 2, category: "food"},
  {id: 5, reference: "TX-05", amount: -126, day: 13, category: "food"},
  {id: 6, reference: "TX-03", amount: 1167, day: 13, category: "food"},
  {id: 7, reference: "TX-02", amount: 168, day: 8, category: "food"},
  {id: 8, reference: "TX-07", amount: -169, day: 18, category: "travel"}
]
```
