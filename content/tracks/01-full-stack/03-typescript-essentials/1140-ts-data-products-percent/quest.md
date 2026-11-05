---
slug: "ts-data-products-percent"
title: "Data: What share of products are on sale?"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What share of products are on sale?

Return the percentage (0–100, rounded to a whole number) of products where `onSale` is true. Return 0 for an empty list.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Water Bottle", price: 26, stock: 50, category: "office", onSale: false},
  {id: 2, name: "Backpack", price: 36, stock: 42, category: "office", onSale: true},
  {id: 3, name: "Coffee Mug", price: 58, stock: 27, category: "home", onSale: false},
  {id: 4, name: "Webcam", price: 102, stock: 40, category: "office", onSale: true},
  {id: 5, name: "Plant Pot", price: 75, stock: 29, category: "tech", onSale: false},
  {id: 6, name: "Monitor Arm", price: 19, stock: 8, category: "office", onSale: true},
  {id: 7, name: "Headphones", price: 72, stock: 53, category: "office", onSale: false},
  {id: 8, name: "Mouse Pad", price: 89, stock: 20, category: "home", onSale: false}
]
```

Type the parameters and the return value. The interface is already written for you.
