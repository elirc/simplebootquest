---
slug: "js-data-products-min"
title: "Data: The product with the lowest price"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The product with the lowest price

Return the name of the product with the **lowest** `price` (first one on ties), or `null` for an empty list.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Headphones", price: 110, stock: 47, category: "office", onSale: false},
  {id: 2, name: "Backpack", price: 118, stock: 51, category: "office", onSale: false},
  {id: 3, name: "Monitor Arm", price: 63, stock: 5, category: "tech", onSale: false},
  {id: 4, name: "Plant Pot", price: 99, stock: 57, category: "office", onSale: false},
  {id: 5, name: "Webcam", price: 106, stock: 49, category: "home", onSale: false},
  {id: 6, name: "Coffee Mug", price: 49, stock: 59, category: "home", onSale: false},
  {id: 7, name: "Desk Lamp", price: 56, stock: 15, category: "home", onSale: false},
  {id: 8, name: "Water Bottle", price: 79, stock: 46, category: "home", onSale: true}
]
```
