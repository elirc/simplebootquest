---
slug: "js-data-products-group-sum"
title: "Data: Total price per category"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total price per category

Return an object mapping each `category` to the **sum** of `price` for products in it.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Backpack", price: 72, stock: 44, category: "home", onSale: true},
  {id: 2, name: "Webcam", price: 42, stock: 8, category: "tech", onSale: false},
  {id: 3, name: "USB Hub", price: 48, stock: 3, category: "home", onSale: true},
  {id: 4, name: "Water Bottle", price: 10, stock: 4, category: "office", onSale: true},
  {id: 5, name: "Headphones", price: 81, stock: 48, category: "tech", onSale: true},
  {id: 6, name: "Plant Pot", price: 47, stock: 4, category: "office", onSale: false},
  {id: 7, name: "Pen Set", price: 17, stock: 28, category: "office", onSale: false},
  {id: 8, name: "Mouse Pad", price: 7, stock: 21, category: "office", onSale: false}
]
```
