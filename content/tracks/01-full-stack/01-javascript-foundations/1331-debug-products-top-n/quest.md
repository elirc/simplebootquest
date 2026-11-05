---
slug: "debug-products-top-n"
title: "Debug: Top products by stock"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Top products by stock

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes results in the wrong order. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the names of the `n` products with the **highest** `stock`, highest first. Don't mutate the input.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Webcam", price: 32, stock: 20, category: "tech", onSale: true},
  {id: 2, name: "Desk Lamp", price: 48, stock: 6, category: "tech", onSale: false},
  {id: 3, name: "Monitor Arm", price: 42, stock: 49, category: "tech", onSale: true},
  {id: 4, name: "Headphones", price: 18, stock: 57, category: "home", onSale: false},
  {id: 5, name: "USB Hub", price: 11, stock: 2, category: "tech", onSale: true},
  {id: 6, name: "Water Bottle", price: 76, stock: 11, category: "home", onSale: true},
  {id: 7, name: "Notebook", price: 49, stock: 23, category: "home", onSale: false},
  {id: 8, name: "Backpack", price: 119, stock: 48, category: "tech", onSale: true}
]
```
