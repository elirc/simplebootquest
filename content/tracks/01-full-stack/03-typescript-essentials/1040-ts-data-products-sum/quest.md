---
slug: "ts-data-products-sum"
title: "Data: Total price of all products"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total price of all products

Return the sum of `price` across all products. An empty list totals 0.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Notebook", price: 72, stock: 39, category: "office", onSale: false},
  {id: 2, name: "Backpack", price: 10, stock: 43, category: "office", onSale: true},
  {id: 3, name: "USB Hub", price: 104, stock: 37, category: "office", onSale: true},
  {id: 4, name: "Desk Lamp", price: 64, stock: 23, category: "office", onSale: false},
  {id: 5, name: "Pen Set", price: 70, stock: 11, category: "office", onSale: false},
  {id: 6, name: "Headphones", price: 55, stock: 44, category: "office", onSale: false},
  {id: 7, name: "Webcam", price: 49, stock: 43, category: "home", onSale: false},
  {id: 8, name: "Monitor Arm", price: 100, stock: 58, category: "tech", onSale: true}
]
```

Type the parameters and the return value. The interface is already written for you.
