---
slug: "debug-products-above"
title: "Debug: Products with a price above a limit"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Products with a price above a limit

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the name of every product whose `price` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Backpack", price: 52, stock: 53, category: "tech", onSale: true},
  {id: 2, name: "Plant Pot", price: 43, stock: 26, category: "home", onSale: false},
  {id: 3, name: "Coffee Mug", price: 19, stock: 8, category: "office", onSale: false},
  {id: 4, name: "Headphones", price: 50, stock: 29, category: "tech", onSale: true},
  {id: 5, name: "Water Bottle", price: 99, stock: 45, category: "tech", onSale: true},
  {id: 6, name: "Notebook", price: 61, stock: 47, category: "office", onSale: false},
  {id: 7, name: "Pen Set", price: 33, stock: 44, category: "office", onSale: false},
  {id: 8, name: "Desk Lamp", price: 109, stock: 38, category: "office", onSale: false}
]
```
