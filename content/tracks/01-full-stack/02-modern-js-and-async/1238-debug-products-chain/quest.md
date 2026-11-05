---
slug: "debug-products-chain"
title: "Debug: Filter, sort, map: products in one category"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Filter, sort, map: products in one category

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes results in the wrong order. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the names of products whose `category` equals `value`, sorted by `stock` **highest first**. One chain of array methods is enough.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Notebook", price: 22, stock: 9, category: "office", onSale: false},
  {id: 2, name: "Backpack", price: 114, stock: 13, category: "tech", onSale: false},
  {id: 3, name: "Mouse Pad", price: 107, stock: 37, category: "office", onSale: true},
  {id: 4, name: "Water Bottle", price: 79, stock: 39, category: "office", onSale: false},
  {id: 5, name: "Plant Pot", price: 115, stock: 8, category: "office", onSale: true},
  {id: 6, name: "Desk Lamp", price: 58, stock: 40, category: "tech", onSale: true},
  {id: 7, name: "Webcam", price: 93, stock: 50, category: "office", onSale: false},
  {id: 8, name: "Pen Set", price: 90, stock: 32, category: "home", onSale: true}
]
```
