---
slug: "ts-data-products-between"
title: "Data: Products in a stock range"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Products in a stock range

Return the names of products whose `stock` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Mouse Pad", price: 74, stock: 34, category: "tech", onSale: false},
  {id: 2, name: "Coffee Mug", price: 116, stock: 33, category: "tech", onSale: false},
  {id: 3, name: "Headphones", price: 41, stock: 15, category: "tech", onSale: true},
  {id: 4, name: "Desk Lamp", price: 42, stock: 15, category: "home", onSale: false},
  {id: 5, name: "Monitor Arm", price: 102, stock: 25, category: "home", onSale: true},
  {id: 6, name: "Water Bottle", price: 116, stock: 39, category: "office", onSale: true},
  {id: 7, name: "Plant Pot", price: 72, stock: 44, category: "tech", onSale: false},
  {id: 8, name: "USB Hub", price: 96, stock: 1, category: "home", onSale: false}
]
```

Type the parameters and the return value. The interface is already written for you.
