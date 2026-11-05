---
slug: "js-data-transactions-search"
title: "Data: Search transactions by reference"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Search transactions by reference

Return the references that **contain** `query`, ignoring case. An empty (or whitespace-only) query returns every reference.

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-11", amount: 232, day: 15, category: "food"},
  {id: 2, reference: "TX-05", amount: -175, day: 12, category: "fun"},
  {id: 3, reference: "TX-09", amount: -323, day: 5, category: "travel"},
  {id: 4, reference: "TX-02", amount: 1129, day: 5, category: "travel"},
  {id: 5, reference: "TX-10", amount: 507, day: 2, category: "fun"},
  {id: 6, reference: "TX-04", amount: 97, day: 4, category: "rent"},
  {id: 7, reference: "TX-07", amount: 604, day: 9, category: "food"},
  {id: 8, reference: "TX-08", amount: -113, day: 5, category: "rent"}
]
```
