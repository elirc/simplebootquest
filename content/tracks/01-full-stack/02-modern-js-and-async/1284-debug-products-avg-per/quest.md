---
slug: "debug-products-avg-per"
title: "Debug: Average stock per category"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Average stock per category

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes wrong rounding. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return an object mapping each `category` to the average `stock` of its products, rounded to a whole number.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Mouse Pad", price: 35, stock: 43, category: "office", onSale: false},
  {id: 2, name: "Pen Set", price: 37, stock: 59, category: "office", onSale: true},
  {id: 3, name: "Coffee Mug", price: 34, stock: 18, category: "office", onSale: true},
  {id: 4, name: "Plant Pot", price: 65, stock: 25, category: "tech", onSale: false},
  {id: 5, name: "Desk Lamp", price: 47, stock: 30, category: "tech", onSale: false},
  {id: 6, name: "Backpack", price: 58, stock: 57, category: "office", onSale: true},
  {id: 7, name: "Notebook", price: 48, stock: 27, category: "office", onSale: false},
  {id: 8, name: "Water Bottle", price: 115, stock: 40, category: "office", onSale: true}
]
```
