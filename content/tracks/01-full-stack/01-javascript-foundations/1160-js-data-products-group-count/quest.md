---
slug: "js-data-products-group-count"
title: "Data: How many products per category?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# How many products per category?

Return an object mapping each `category` to the number of products with it. Only include values that appear.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "USB Hub", price: 7, stock: 57, category: "home", onSale: true},
  {id: 2, name: "Coffee Mug", price: 12, stock: 59, category: "tech", onSale: false},
  {id: 3, name: "Pen Set", price: 12, stock: 0, category: "home", onSale: false},
  {id: 4, name: "Monitor Arm", price: 52, stock: 39, category: "office", onSale: false},
  {id: 5, name: "Backpack", price: 8, stock: 14, category: "tech", onSale: true},
  {id: 6, name: "Water Bottle", price: 17, stock: 16, category: "home", onSale: false},
  {id: 7, name: "Plant Pot", price: 76, stock: 55, category: "home", onSale: true},
  {id: 8, name: "Headphones", price: 70, stock: 35, category: "tech", onSale: true}
]
```
