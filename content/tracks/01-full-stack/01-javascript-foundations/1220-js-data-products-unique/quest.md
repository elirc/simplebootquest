---
slug: "js-data-products-unique"
title: "Data: Distinct category values"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Distinct category values

Return every distinct `category` that appears, sorted alphabetically.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Coffee Mug", price: 9, stock: 36, category: "tech", onSale: true},
  {id: 2, name: "Monitor Arm", price: 108, stock: 56, category: "home", onSale: false},
  {id: 3, name: "Pen Set", price: 79, stock: 43, category: "home", onSale: false},
  {id: 4, name: "Backpack", price: 117, stock: 59, category: "tech", onSale: false},
  {id: 5, name: "Notebook", price: 33, stock: 46, category: "home", onSale: true},
  {id: 6, name: "Mouse Pad", price: 97, stock: 57, category: "office", onSale: true},
  {id: 7, name: "Water Bottle", price: 16, stock: 37, category: "office", onSale: false},
  {id: 8, name: "USB Hub", price: 16, stock: 35, category: "office", onSale: true}
]
```
