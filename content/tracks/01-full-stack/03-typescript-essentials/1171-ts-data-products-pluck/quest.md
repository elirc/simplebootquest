---
slug: "ts-data-products-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `name` and `price` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Desk Lamp", price: 17, stock: 52, category: "home", onSale: true},
  {id: 2, name: "Mouse Pad", price: 43, stock: 14, category: "office", onSale: false},
  {id: 3, name: "Plant Pot", price: 77, stock: 59, category: "tech", onSale: false},
  {id: 4, name: "Headphones", price: 37, stock: 13, category: "tech", onSale: false},
  {id: 5, name: "USB Hub", price: 109, stock: 21, category: "tech", onSale: true},
  {id: 6, name: "Pen Set", price: 14, stock: 27, category: "home", onSale: false},
  {id: 7, name: "Monitor Arm", price: 36, stock: 10, category: "tech", onSale: true},
  {id: 8, name: "Notebook", price: 118, stock: 51, category: "home", onSale: true}
]
```

Type the parameters and the return value. The interface is already written for you.
