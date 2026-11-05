---
slug: "js-data-products-chain"
title: "Data: Filter, sort, map: products in one category"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Filter, sort, map: products in one category

Return the names of products whose `category` equals `value`, sorted by `stock` **highest first**. One chain of array methods is enough.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Webcam", price: 23, stock: 39, category: "home", onSale: false},
  {id: 2, name: "Headphones", price: 74, stock: 24, category: "office", onSale: false},
  {id: 3, name: "Desk Lamp", price: 68, stock: 18, category: "tech", onSale: true},
  {id: 4, name: "Mouse Pad", price: 23, stock: 49, category: "home", onSale: true},
  {id: 5, name: "Plant Pot", price: 47, stock: 3, category: "tech", onSale: false},
  {id: 6, name: "Notebook", price: 101, stock: 39, category: "tech", onSale: true},
  {id: 7, name: "Monitor Arm", price: 62, stock: 32, category: "tech", onSale: true},
  {id: 8, name: "Water Bottle", price: 9, stock: 6, category: "home", onSale: false}
]
```
