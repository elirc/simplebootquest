---
slug: "js-data-orders-format"
title: "Data: Format orders as labels"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Format orders as labels

Return one string per order: `"<code> (<totalCents>)"`, e.g. `"C-300 (5864)"`.

The tests call your function with this data (also available as `ORDERS` in the tests):

```js
const ORDERS = [
  {id: 1, code: "C-300", totalCents: 5864, items: 2, status: "shipped", country: "DE"},
  {id: 2, code: "A-100", totalCents: 21790, items: 5, status: "pending", country: "US"},
  {id: 3, code: "E-500", totalCents: 22997, items: 6, status: "pending", country: "US"},
  {id: 4, code: "B-200", totalCents: 8137, items: 7, status: "shipped", country: "DE"},
  {id: 5, code: "A-102", totalCents: 1685, items: 4, status: "pending", country: "DE"},
  {id: 6, code: "B-201", totalCents: 10129, items: 6, status: "shipped", country: "UK"},
  {id: 7, code: "D-400", totalCents: 24778, items: 6, status: "shipped", country: "US"},
  {id: 8, code: "D-401", totalCents: 20127, items: 3, status: "paid", country: "DE"}
]
```
