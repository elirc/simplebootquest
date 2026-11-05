---
slug: "ts-data-transactions-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `reference` and `day` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-11", amount: 1050, day: 7, category: "food"},
  {id: 2, reference: "TX-03", amount: 533, day: 20, category: "rent"},
  {id: 3, reference: "TX-12", amount: 563, day: 18, category: "rent"},
  {id: 4, reference: "TX-04", amount: 481, day: 17, category: "travel"},
  {id: 5, reference: "TX-02", amount: 986, day: 19, category: "fun"},
  {id: 6, reference: "TX-01", amount: 1118, day: 5, category: "fun"},
  {id: 7, reference: "TX-09", amount: -140, day: 5, category: "fun"},
  {id: 8, reference: "TX-07", amount: 672, day: 4, category: "travel"}
]
```

Type the parameters and the return value. The interface is already written for you.
