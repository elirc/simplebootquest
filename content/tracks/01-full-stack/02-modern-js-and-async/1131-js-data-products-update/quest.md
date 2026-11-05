---
slug: "js-data-products-update"
title: "Data: Update products immutably"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Spread to copy: `{ ...x, field: newValue }`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Update products immutably

Return a **new** array where every product with `category` equal to `value` has `stock` increased by `amount`. Other products are unchanged. **Don't mutate** the input objects (React state depends on this).

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Monitor Arm", price: 66, stock: 57, category: "tech", onSale: true},
  {id: 2, name: "Pen Set", price: 67, stock: 38, category: "tech", onSale: true},
  {id: 3, name: "Coffee Mug", price: 72, stock: 47, category: "home", onSale: true},
  {id: 4, name: "Plant Pot", price: 35, stock: 39, category: "tech", onSale: true},
  {id: 5, name: "USB Hub", price: 57, stock: 27, category: "home", onSale: false},
  {id: 6, name: "Backpack", price: 25, stock: 20, category: "office", onSale: true},
  {id: 7, name: "Headphones", price: 30, stock: 13, category: "office", onSale: true},
  {id: 8, name: "Water Bottle", price: 25, stock: 49, category: "home", onSale: true}
]
```
