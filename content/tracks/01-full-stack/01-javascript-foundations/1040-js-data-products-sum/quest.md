---
slug: "js-data-products-sum"
title: "Data: Total price of all products"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total price of all products

Return the sum of `price` across all products. An empty list totals 0.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Notebook", price: 27, stock: 2, category: "tech", onSale: false},
  {id: 2, name: "Pen Set", price: 46, stock: 26, category: "home", onSale: false},
  {id: 3, name: "Coffee Mug", price: 111, stock: 52, category: "office", onSale: false},
  {id: 4, name: "Headphones", price: 98, stock: 22, category: "office", onSale: false},
  {id: 5, name: "Backpack", price: 29, stock: 55, category: "tech", onSale: false},
  {id: 6, name: "USB Hub", price: 57, stock: 57, category: "tech", onSale: true},
  {id: 7, name: "Water Bottle", price: 115, stock: 25, category: "home", onSale: true},
  {id: 8, name: "Desk Lamp", price: 70, stock: 23, category: "home", onSale: false}
]
```
