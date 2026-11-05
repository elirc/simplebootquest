---
slug: "js-data-products-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `name` and `stock` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Water Bottle", price: 37, stock: 10, category: "home", onSale: false},
  {id: 2, name: "Headphones", price: 68, stock: 40, category: "tech", onSale: false},
  {id: 3, name: "Mouse Pad", price: 93, stock: 3, category: "office", onSale: false},
  {id: 4, name: "Monitor Arm", price: 97, stock: 24, category: "home", onSale: true},
  {id: 5, name: "Notebook", price: 58, stock: 45, category: "tech", onSale: false},
  {id: 6, name: "Pen Set", price: 79, stock: 5, category: "home", onSale: true},
  {id: 7, name: "USB Hub", price: 16, stock: 26, category: "home", onSale: true},
  {id: 8, name: "Webcam", price: 61, stock: 34, category: "home", onSale: true}
]
```
