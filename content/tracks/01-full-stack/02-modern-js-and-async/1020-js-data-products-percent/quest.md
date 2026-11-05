---
slug: "js-data-products-percent"
title: "Data: What share of products are on sale?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What share of products are on sale?

Return the percentage (0–100, rounded to a whole number) of products where `onSale` is true. Return 0 for an empty list.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Coffee Mug", price: 89, stock: 29, category: "office", onSale: true},
  {id: 2, name: "Desk Lamp", price: 91, stock: 6, category: "home", onSale: false},
  {id: 3, name: "Water Bottle", price: 21, stock: 18, category: "office", onSale: false},
  {id: 4, name: "Monitor Arm", price: 67, stock: 37, category: "office", onSale: true},
  {id: 5, name: "Backpack", price: 40, stock: 43, category: "office", onSale: true},
  {id: 6, name: "Plant Pot", price: 28, stock: 39, category: "home", onSale: true},
  {id: 7, name: "Mouse Pad", price: 58, stock: 27, category: "tech", onSale: false},
  {id: 8, name: "Pen Set", price: 106, stock: 46, category: "office", onSale: false}
]
```
