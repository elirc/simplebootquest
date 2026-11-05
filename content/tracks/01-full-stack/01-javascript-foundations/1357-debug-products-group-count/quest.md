---
slug: "debug-products-group-count"
title: "Debug: How many products per category?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: How many products per category?

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes counts that are off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return an object mapping each `category` to the number of products with it. Only include values that appear.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Mouse Pad", price: 13, stock: 12, category: "tech", onSale: true},
  {id: 2, name: "Pen Set", price: 95, stock: 23, category: "tech", onSale: false},
  {id: 3, name: "Desk Lamp", price: 62, stock: 59, category: "tech", onSale: true},
  {id: 4, name: "Notebook", price: 99, stock: 32, category: "home", onSale: true},
  {id: 5, name: "Monitor Arm", price: 32, stock: 1, category: "home", onSale: false},
  {id: 6, name: "Backpack", price: 13, stock: 26, category: "home", onSale: false},
  {id: 7, name: "USB Hub", price: 32, stock: 32, category: "tech", onSale: false},
  {id: 8, name: "Water Bottle", price: 76, stock: 13, category: "office", onSale: true}
]
```
