---
slug: "js-data-products-every-some"
title: "Data: Are all products under a price limit?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all products under a price limit?

Return `true` if **every** product has `price` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Webcam", price: 53, stock: 55, category: "tech", onSale: true},
  {id: 2, name: "Notebook", price: 19, stock: 42, category: "home", onSale: false},
  {id: 3, name: "Backpack", price: 30, stock: 37, category: "office", onSale: false},
  {id: 4, name: "Headphones", price: 54, stock: 44, category: "tech", onSale: true},
  {id: 5, name: "Coffee Mug", price: 65, stock: 53, category: "home", onSale: false},
  {id: 6, name: "Mouse Pad", price: 46, stock: 34, category: "tech", onSale: true},
  {id: 7, name: "Monitor Arm", price: 34, stock: 37, category: "office", onSale: true},
  {id: 8, name: "Plant Pot", price: 102, stock: 41, category: "office", onSale: true}
]
```
