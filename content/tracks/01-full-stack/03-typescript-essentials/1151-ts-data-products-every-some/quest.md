---
slug: "ts-data-products-every-some"
title: "Data: Are all products under a price limit?"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all products under a price limit?

Return `true` if **every** product has `price` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Plant Pot", price: 92, stock: 22, category: "office", onSale: false},
  {id: 2, name: "USB Hub", price: 89, stock: 54, category: "office", onSale: false},
  {id: 3, name: "Backpack", price: 31, stock: 37, category: "office", onSale: true},
  {id: 4, name: "Headphones", price: 85, stock: 20, category: "office", onSale: true},
  {id: 5, name: "Webcam", price: 44, stock: 24, category: "home", onSale: true},
  {id: 6, name: "Coffee Mug", price: 60, stock: 51, category: "office", onSale: true},
  {id: 7, name: "Desk Lamp", price: 41, stock: 55, category: "home", onSale: true},
  {id: 8, name: "Water Bottle", price: 57, stock: 16, category: "office", onSale: false}
]
```

Type the parameters and the return value. The interface is already written for you.
