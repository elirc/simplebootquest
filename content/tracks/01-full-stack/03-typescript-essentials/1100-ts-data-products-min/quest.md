---
slug: "ts-data-products-min"
title: "Data: The product with the lowest stock"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The product with the lowest stock

Return the name of the product with the **lowest** `stock` (first one on ties), or `null` for an empty list.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Notebook", price: 80, stock: 10, category: "office", onSale: true},
  {id: 2, name: "Backpack", price: 23, stock: 20, category: "office", onSale: false},
  {id: 3, name: "USB Hub", price: 74, stock: 9, category: "tech", onSale: true},
  {id: 4, name: "Coffee Mug", price: 4, stock: 6, category: "office", onSale: true},
  {id: 5, name: "Water Bottle", price: 104, stock: 1, category: "tech", onSale: true},
  {id: 6, name: "Desk Lamp", price: 50, stock: 30, category: "home", onSale: true},
  {id: 7, name: "Pen Set", price: 105, stock: 12, category: "tech", onSale: true},
  {id: 8, name: "Webcam", price: 104, stock: 12, category: "office", onSale: true}
]
```

Type the parameters and the return value. The interface is already written for you.
