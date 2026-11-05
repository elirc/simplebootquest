---
slug: "debug-products-count-cat"
title: "Debug: Count products by category"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Count products by category

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return how many products have `category` equal to `value`.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Mouse Pad", price: 82, stock: 29, category: "office", onSale: false},
  {id: 2, name: "Water Bottle", price: 14, stock: 40, category: "office", onSale: false},
  {id: 3, name: "Desk Lamp", price: 26, stock: 33, category: "office", onSale: true},
  {id: 4, name: "Coffee Mug", price: 6, stock: 14, category: "tech", onSale: false},
  {id: 5, name: "USB Hub", price: 83, stock: 57, category: "home", onSale: true},
  {id: 6, name: "Headphones", price: 30, stock: 12, category: "tech", onSale: false},
  {id: 7, name: "Plant Pot", price: 105, stock: 48, category: "home", onSale: true},
  {id: 8, name: "Notebook", price: 23, stock: 53, category: "home", onSale: false}
]
```
