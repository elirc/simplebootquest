---
slug: "js-data-transactions-histogram"
title: "Data: Bucket transactions by day of the month"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Bucket transactions by day of the month

Group transactions into buckets of width `width` by `day`: the bucket key is `Math.floor(value / width) * width`. Return an object of bucket → count.

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-05", amount: -381, day: 15, category: "rent"},
  {id: 2, reference: "TX-04", amount: -18, day: 26, category: "travel"},
  {id: 3, reference: "TX-12", amount: 497, day: 10, category: "fun"},
  {id: 4, reference: "TX-11", amount: 1089, day: 19, category: "salary"},
  {id: 5, reference: "TX-10", amount: 1101, day: 14, category: "salary"},
  {id: 6, reference: "TX-08", amount: -287, day: 1, category: "salary"},
  {id: 7, reference: "TX-07", amount: 968, day: 6, category: "salary"},
  {id: 8, reference: "TX-03", amount: -202, day: 5, category: "rent"}
]
```
