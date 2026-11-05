---
slug: "debug-products-lookup"
title: "Debug: Look up a product's stock"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Look up a product's stock

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the `stock` of the product whose name is `name`, or `null` if there isn't one.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Pen Set", price: 75, stock: 40, category: "tech", onSale: true},
  {id: 2, name: "Mouse Pad", price: 38, stock: 26, category: "office", onSale: false},
  {id: 3, name: "Notebook", price: 8, stock: 31, category: "home", onSale: false},
  {id: 4, name: "Coffee Mug", price: 19, stock: 46, category: "tech", onSale: true},
  {id: 5, name: "Backpack", price: 72, stock: 15, category: "tech", onSale: false},
  {id: 6, name: "Desk Lamp", price: 66, stock: 41, category: "office", onSale: true},
  {id: 7, name: "USB Hub", price: 75, stock: 51, category: "office", onSale: false},
  {id: 8, name: "Monitor Arm", price: 57, stock: 25, category: "office", onSale: true}
]
```
