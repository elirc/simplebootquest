---
slug: "js-data-transactions-format"
title: "Data: Format transactions as labels"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Format transactions as labels

Return one string per transaction: `"<reference> (<day>)"`, e.g. `"TX-04 (8)"`.

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-04", amount: -331, day: 8, category: "fun"},
  {id: 2, reference: "TX-07", amount: 55, day: 1, category: "salary"},
  {id: 3, reference: "TX-11", amount: 256, day: 25, category: "rent"},
  {id: 4, reference: "TX-10", amount: 1036, day: 24, category: "travel"},
  {id: 5, reference: "TX-02", amount: 264, day: 17, category: "salary"},
  {id: 6, reference: "TX-05", amount: 428, day: 14, category: "rent"},
  {id: 7, reference: "TX-06", amount: 407, day: 16, category: "rent"},
  {id: 8, reference: "TX-09", amount: 645, day: 22, category: "travel"}
]
```
