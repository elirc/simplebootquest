---
slug: "js-data-products-avg-per"
title: "Data: Average stock per category"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average stock per category

Return an object mapping each `category` to the average `stock` of its products, rounded to a whole number.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "USB Hub", price: 115, stock: 32, category: "office", onSale: true},
  {id: 2, name: "Webcam", price: 98, stock: 29, category: "tech", onSale: true},
  {id: 3, name: "Headphones", price: 81, stock: 30, category: "tech", onSale: false},
  {id: 4, name: "Desk Lamp", price: 52, stock: 2, category: "home", onSale: true},
  {id: 5, name: "Backpack", price: 31, stock: 18, category: "office", onSale: true},
  {id: 6, name: "Notebook", price: 4, stock: 52, category: "home", onSale: false},
  {id: 7, name: "Monitor Arm", price: 62, stock: 46, category: "tech", onSale: true},
  {id: 8, name: "Pen Set", price: 89, stock: 47, category: "tech", onSale: false}
]
```
