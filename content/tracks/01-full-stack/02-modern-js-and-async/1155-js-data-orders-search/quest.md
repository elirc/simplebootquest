---
slug: "js-data-orders-search"
title: "Data: Search orders by code"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Search orders by code

Return the codes that **contain** `query`, ignoring case. An empty (or whitespace-only) query returns every code.

The tests call your function with this data (also available as `ORDERS` in the tests):

```js
const ORDERS = [
  {id: 1, code: "E-500", totalCents: 6272, items: 1, status: "cancelled", country: "US"},
  {id: 2, code: "C-300", totalCents: 5596, items: 3, status: "pending", country: "DE"},
  {id: 3, code: "A-101", totalCents: 9079, items: 8, status: "cancelled", country: "DE"},
  {id: 4, code: "A-100", totalCents: 7111, items: 6, status: "cancelled", country: "US"},
  {id: 5, code: "E-501", totalCents: 18987, items: 3, status: "pending", country: "DE"},
  {id: 6, code: "B-200", totalCents: 4111, items: 5, status: "pending", country: "US"},
  {id: 7, code: "C-301", totalCents: 5177, items: 8, status: "pending", country: "DE"},
  {id: 8, code: "D-400", totalCents: 9693, items: 5, status: "paid", country: "US"}
]
```
