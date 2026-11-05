---
slug: "js-data-products-average"
title: "Data: Average price"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average price

Return the average `price` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Backpack", price: 18, stock: 28, category: "tech", onSale: true},
  {id: 2, name: "Coffee Mug", price: 66, stock: 32, category: "office", onSale: false},
  {id: 3, name: "Webcam", price: 40, stock: 42, category: "office", onSale: true},
  {id: 4, name: "Pen Set", price: 118, stock: 5, category: "home", onSale: true},
  {id: 5, name: "Desk Lamp", price: 69, stock: 28, category: "home", onSale: true},
  {id: 6, name: "Notebook", price: 77, stock: 17, category: "tech", onSale: true},
  {id: 7, name: "Plant Pot", price: 32, stock: 9, category: "home", onSale: false},
  {id: 8, name: "Mouse Pad", price: 72, stock: 28, category: "office", onSale: true}
]
```
