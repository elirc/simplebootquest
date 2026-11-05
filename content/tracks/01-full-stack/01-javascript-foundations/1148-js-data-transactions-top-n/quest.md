---
slug: "js-data-transactions-top-n"
title: "Data: Top transactions by day of the month"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Top transactions by day of the month

Return the references of the `n` transactions with the **highest** `day`, highest first. Don't mutate the input.

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-06", amount: -215, day: 14, category: "salary"},
  {id: 2, reference: "TX-12", amount: 1193, day: 9, category: "rent"},
  {id: 3, reference: "TX-02", amount: -155, day: 5, category: "food"},
  {id: 4, reference: "TX-04", amount: 628, day: 15, category: "fun"},
  {id: 5, reference: "TX-08", amount: 558, day: 22, category: "food"},
  {id: 6, reference: "TX-10", amount: -338, day: 24, category: "food"},
  {id: 7, reference: "TX-03", amount: 871, day: 27, category: "fun"},
  {id: 8, reference: "TX-01", amount: 687, day: 13, category: "rent"}
]
```
