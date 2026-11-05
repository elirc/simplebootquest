---
slug: "ts-data-products-max"
title: "Data: The product with the highest price"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The product with the highest price

Return the name of the product with the **highest** `price`. If several tie, return the first. Return `null` for an empty list.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Coffee Mug", price: 102, stock: 12, category: "home", onSale: false},
  {id: 2, name: "Monitor Arm", price: 118, stock: 14, category: "home", onSale: false},
  {id: 3, name: "Notebook", price: 48, stock: 11, category: "home", onSale: false},
  {id: 4, name: "Pen Set", price: 51, stock: 51, category: "office", onSale: false},
  {id: 5, name: "Desk Lamp", price: 27, stock: 26, category: "office", onSale: true},
  {id: 6, name: "Headphones", price: 112, stock: 7, category: "home", onSale: false},
  {id: 7, name: "Webcam", price: 44, stock: 29, category: "tech", onSale: true},
  {id: 8, name: "Mouse Pad", price: 39, stock: 51, category: "office", onSale: false}
]
```

Type the parameters and the return value. The interface is already written for you.
