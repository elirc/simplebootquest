---
slug: "js-data-orders-update"
title: "Data: Update orders immutably"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Spread to copy: `{ ...x, field: newValue }`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Update orders immutably

Return a **new** array where every order with `country` equal to `value` has `items` increased by `amount`. Other orders are unchanged. **Don't mutate** the input objects (React state depends on this).

The tests call your function with this data (also available as `ORDERS` in the tests):

```js
const ORDERS = [
  {id: 1, code: "C-300", totalCents: 9535, items: 4, status: "cancelled", country: "US"},
  {id: 2, code: "C-302", totalCents: 18822, items: 4, status: "shipped", country: "US"},
  {id: 3, code: "D-400", totalCents: 24181, items: 3, status: "pending", country: "DE"},
  {id: 4, code: "A-100", totalCents: 20750, items: 4, status: "pending", country: "DE"},
  {id: 5, code: "E-501", totalCents: 9664, items: 8, status: "pending", country: "DE"},
  {id: 6, code: "A-101", totalCents: 22961, items: 2, status: "shipped", country: "UK"},
  {id: 7, code: "B-200", totalCents: 3170, items: 8, status: "pending", country: "UK"},
  {id: 8, code: "D-401", totalCents: 13709, items: 8, status: "shipped", country: "US"}
]
```
