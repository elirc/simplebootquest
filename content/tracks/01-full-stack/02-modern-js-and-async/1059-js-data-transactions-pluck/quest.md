---
slug: "js-data-transactions-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `reference` and `day` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-05", amount: 741, day: 1, category: "travel"},
  {id: 2, reference: "TX-06", amount: 82, day: 16, category: "food"},
  {id: 3, reference: "TX-02", amount: 242, day: 7, category: "fun"},
  {id: 4, reference: "TX-09", amount: -387, day: 16, category: "fun"},
  {id: 5, reference: "TX-07", amount: 43, day: 27, category: "food"},
  {id: 6, reference: "TX-12", amount: 1031, day: 20, category: "salary"},
  {id: 7, reference: "TX-01", amount: -270, day: 11, category: "fun"},
  {id: 8, reference: "TX-04", amount: 119, day: 2, category: "food"}
]
```
