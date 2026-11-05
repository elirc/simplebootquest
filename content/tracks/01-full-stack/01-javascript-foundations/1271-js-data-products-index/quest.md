---
slug: "js-data-products-index"
title: "Data: Index products by id"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Index products by id

Return an object mapping each `id` to the product's name, for fast lookups.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Desk Lamp", price: 32, stock: 6, category: "tech", onSale: true},
  {id: 2, name: "Coffee Mug", price: 66, stock: 21, category: "office", onSale: false},
  {id: 3, name: "Water Bottle", price: 78, stock: 59, category: "office", onSale: true},
  {id: 4, name: "Backpack", price: 6, stock: 50, category: "home", onSale: false},
  {id: 5, name: "Webcam", price: 90, stock: 11, category: "office", onSale: false},
  {id: 6, name: "Notebook", price: 44, stock: 34, category: "home", onSale: true},
  {id: 7, name: "Headphones", price: 37, stock: 12, category: "home", onSale: true},
  {id: 8, name: "USB Hub", price: 112, stock: 42, category: "office", onSale: false}
]
```
