---
slug: "debug-products-between"
title: "Debug: Products in a stock range"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Products in a stock range

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the names of products whose `stock` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "USB Hub", price: 5, stock: 4, category: "home", onSale: true},
  {id: 2, name: "Pen Set", price: 68, stock: 59, category: "tech", onSale: false},
  {id: 3, name: "Plant Pot", price: 75, stock: 2, category: "home", onSale: true},
  {id: 4, name: "Headphones", price: 15, stock: 27, category: "home", onSale: false},
  {id: 5, name: "Desk Lamp", price: 58, stock: 24, category: "tech", onSale: false},
  {id: 6, name: "Coffee Mug", price: 12, stock: 22, category: "home", onSale: true},
  {id: 7, name: "Backpack", price: 68, stock: 41, category: "home", onSale: false},
  {id: 8, name: "Monitor Arm", price: 53, stock: 42, category: "tech", onSale: true}
]
```
