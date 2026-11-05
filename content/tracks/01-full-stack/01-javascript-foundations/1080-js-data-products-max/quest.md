---
slug: "js-data-products-max"
title: "Data: The product with the highest stock"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The product with the highest stock

Return the name of the product with the **highest** `stock`. If several tie, return the first. Return `null` for an empty list.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Webcam", price: 56, stock: 29, category: "tech", onSale: false},
  {id: 2, name: "Mouse Pad", price: 31, stock: 44, category: "tech", onSale: true},
  {id: 3, name: "Monitor Arm", price: 60, stock: 5, category: "office", onSale: true},
  {id: 4, name: "Coffee Mug", price: 16, stock: 10, category: "office", onSale: false},
  {id: 5, name: "Water Bottle", price: 26, stock: 45, category: "office", onSale: true},
  {id: 6, name: "Notebook", price: 118, stock: 40, category: "office", onSale: false},
  {id: 7, name: "Backpack", price: 72, stock: 6, category: "office", onSale: true},
  {id: 8, name: "Headphones", price: 90, stock: 35, category: "office", onSale: false}
]
```
