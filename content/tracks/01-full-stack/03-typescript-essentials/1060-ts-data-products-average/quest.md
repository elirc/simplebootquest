---
slug: "ts-data-products-average"
title: "Data: Average stock"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average stock

Return the average `stock` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Plant Pot", price: 91, stock: 12, category: "office", onSale: true},
  {id: 2, name: "Water Bottle", price: 71, stock: 48, category: "office", onSale: true},
  {id: 3, name: "Backpack", price: 119, stock: 57, category: "office", onSale: true},
  {id: 4, name: "Notebook", price: 35, stock: 11, category: "office", onSale: true},
  {id: 5, name: "Headphones", price: 52, stock: 58, category: "office", onSale: false},
  {id: 6, name: "Mouse Pad", price: 91, stock: 32, category: "office", onSale: false},
  {id: 7, name: "Monitor Arm", price: 93, stock: 51, category: "home", onSale: false},
  {id: 8, name: "Coffee Mug", price: 77, stock: 47, category: "tech", onSale: false}
]
```

Type the parameters and the return value. The interface is already written for you.
