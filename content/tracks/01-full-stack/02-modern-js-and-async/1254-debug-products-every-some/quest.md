---
slug: "debug-products-every-some"
title: "Debug: Are all products under a stock limit?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Are all products under a stock limit?

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return `true` if **every** product has `stock` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Monitor Arm", price: 12, stock: 33, category: "tech", onSale: false},
  {id: 2, name: "Coffee Mug", price: 58, stock: 21, category: "office", onSale: true},
  {id: 3, name: "USB Hub", price: 30, stock: 52, category: "tech", onSale: true},
  {id: 4, name: "Pen Set", price: 27, stock: 20, category: "tech", onSale: true},
  {id: 5, name: "Headphones", price: 71, stock: 37, category: "office", onSale: false},
  {id: 6, name: "Desk Lamp", price: 58, stock: 55, category: "home", onSale: true},
  {id: 7, name: "Water Bottle", price: 113, stock: 7, category: "home", onSale: false},
  {id: 8, name: "Plant Pot", price: 54, stock: 28, category: "tech", onSale: false}
]
```
