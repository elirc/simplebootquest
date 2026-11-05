---
slug: "js-data-products-lookup"
title: "Data: Look up a product's stock"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Look up a product's stock

Return the `stock` of the product whose name is `name`, or `null` if there isn't one.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Notebook", price: 19, stock: 8, category: "home", onSale: false},
  {id: 2, name: "Headphones", price: 111, stock: 43, category: "tech", onSale: true},
  {id: 3, name: "Monitor Arm", price: 104, stock: 59, category: "tech", onSale: true},
  {id: 4, name: "USB Hub", price: 19, stock: 22, category: "home", onSale: false},
  {id: 5, name: "Webcam", price: 92, stock: 22, category: "tech", onSale: false},
  {id: 6, name: "Coffee Mug", price: 110, stock: 46, category: "office", onSale: true},
  {id: 7, name: "Pen Set", price: 93, stock: 59, category: "home", onSale: true},
  {id: 8, name: "Mouse Pad", price: 81, stock: 7, category: "tech", onSale: true}
]
```
