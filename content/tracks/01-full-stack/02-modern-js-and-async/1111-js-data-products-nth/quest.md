---
slug: "js-data-products-nth"
title: "Data: The n-th product by stock"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The n-th product by stock

Return the name of the product ranked `n` (1 = highest `stock`), or `null` if `n` is out of range.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Headphones", price: 70, stock: 36, category: "home", onSale: true},
  {id: 2, name: "USB Hub", price: 36, stock: 51, category: "home", onSale: false},
  {id: 3, name: "Notebook", price: 4, stock: 12, category: "tech", onSale: false},
  {id: 4, name: "Webcam", price: 22, stock: 7, category: "office", onSale: true},
  {id: 5, name: "Mouse Pad", price: 104, stock: 44, category: "tech", onSale: true},
  {id: 6, name: "Pen Set", price: 73, stock: 25, category: "home", onSale: false},
  {id: 7, name: "Water Bottle", price: 81, stock: 49, category: "home", onSale: true},
  {id: 8, name: "Desk Lamp", price: 64, stock: 32, category: "home", onSale: false}
]
```
