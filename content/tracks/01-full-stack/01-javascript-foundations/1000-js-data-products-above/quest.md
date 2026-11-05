---
slug: "js-data-products-above"
title: "Data: Products with a stock above a limit"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Products with a stock above a limit

Return the name of every product whose `stock` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Pen Set", price: 79, stock: 43, category: "home", onSale: false},
  {id: 2, name: "USB Hub", price: 29, stock: 55, category: "office", onSale: false},
  {id: 3, name: "Plant Pot", price: 104, stock: 56, category: "home", onSale: false},
  {id: 4, name: "Headphones", price: 67, stock: 52, category: "tech", onSale: true},
  {id: 5, name: "Water Bottle", price: 10, stock: 19, category: "office", onSale: false},
  {id: 6, name: "Mouse Pad", price: 94, stock: 15, category: "home", onSale: false},
  {id: 7, name: "Monitor Arm", price: 114, stock: 25, category: "tech", onSale: true},
  {id: 8, name: "Coffee Mug", price: 34, stock: 43, category: "home", onSale: false}
]
```
