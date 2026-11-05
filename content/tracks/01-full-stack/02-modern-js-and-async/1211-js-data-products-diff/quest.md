---
slug: "js-data-products-diff"
title: "Data: What changed between two snapshots?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What changed between two snapshots?

Given yesterday's and today's products (same ids), return the ids whose `price` changed, in today's order.

The tests call your function with this data (also available as `BEFORE` / `AFTER` in the tests):

```js
const BEFORE = [
  {id: 1, name: "USB Hub", price: 28, stock: 18, category: "home", onSale: false},
  {id: 2, name: "Notebook", price: 6, stock: 44, category: "office", onSale: true},
  {id: 3, name: "Mouse Pad", price: 46, stock: 59, category: "tech", onSale: true},
  {id: 4, name: "Webcam", price: 53, stock: 24, category: "home", onSale: true},
  {id: 5, name: "Pen Set", price: 84, stock: 4, category: "tech", onSale: false},
  {id: 6, name: "Backpack", price: 97, stock: 34, category: "office", onSale: true},
  {id: 7, name: "Desk Lamp", price: 112, stock: 41, category: "tech", onSale: false},
  {id: 8, name: "Coffee Mug", price: 117, stock: 11, category: "office", onSale: false}
]
```
