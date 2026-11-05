---
slug: "js-data-orders-paginate"
title: "Data: Paginate orders"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Paginate orders

Return `{ items, page, totalPages }` where `items` are the codes on page `page` (1-based) of size `size`. Out-of-range pages return an empty `items` array.

The tests call your function with this data (also available as `ORDERS` in the tests):

```js
const ORDERS = [
  {id: 1, code: "A-101", totalCents: 19833, items: 1, status: "shipped", country: "US"},
  {id: 2, code: "A-102", totalCents: 19189, items: 7, status: "paid", country: "US"},
  {id: 3, code: "E-501", totalCents: 19068, items: 5, status: "paid", country: "UK"},
  {id: 4, code: "C-300", totalCents: 5060, items: 6, status: "pending", country: "US"},
  {id: 5, code: "C-301", totalCents: 790, items: 8, status: "shipped", country: "DE"},
  {id: 6, code: "C-302", totalCents: 10681, items: 6, status: "paid", country: "DE"},
  {id: 7, code: "B-200", totalCents: 2720, items: 8, status: "cancelled", country: "DE"},
  {id: 8, code: "B-201", totalCents: 7268, items: 6, status: "paid", country: "UK"}
]
```
