---
slug: "js-data-transactions-update"
title: "Data: Update transactions immutably"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Spread to copy: `{ ...x, field: newValue }`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Update transactions immutably

Return a **new** array where every transaction with `category` equal to `value` has `amount` increased by `amount`. Other transactions are unchanged. **Don't mutate** the input objects (React state depends on this).

The tests call your function with this data (also available as `TRANSACTIONS` in the tests):

```js
const TRANSACTIONS = [
  {id: 1, reference: "TX-07", amount: 672, day: 27, category: "salary"},
  {id: 2, reference: "TX-05", amount: 993, day: 5, category: "salary"},
  {id: 3, reference: "TX-08", amount: 900, day: 3, category: "fun"},
  {id: 4, reference: "TX-02", amount: 341, day: 10, category: "salary"},
  {id: 5, reference: "TX-01", amount: 212, day: 27, category: "travel"},
  {id: 6, reference: "TX-06", amount: -295, day: 17, category: "salary"},
  {id: 7, reference: "TX-03", amount: 201, day: 8, category: "travel"},
  {id: 8, reference: "TX-11", amount: -298, day: 4, category: "travel"}
]
```
