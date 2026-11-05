---
slug: "js-data-products-partition"
title: "Data: Split products by \"on sale\""
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Split products by "on sale"

Return `{ yes, no }`: the names of products where `onSale` is true, and those where it's false. Keep the original order.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Mouse Pad", price: 78, stock: 38, category: "home", onSale: true},
  {id: 2, name: "Water Bottle", price: 119, stock: 15, category: "office", onSale: false},
  {id: 3, name: "Webcam", price: 37, stock: 60, category: "home", onSale: false},
  {id: 4, name: "Notebook", price: 74, stock: 20, category: "home", onSale: false},
  {id: 5, name: "Plant Pot", price: 115, stock: 20, category: "home", onSale: true},
  {id: 6, name: "Monitor Arm", price: 111, stock: 32, category: "tech", onSale: false},
  {id: 7, name: "USB Hub", price: 70, stock: 45, category: "home", onSale: true},
  {id: 8, name: "Desk Lamp", price: 51, stock: 50, category: "tech", onSale: false}
]
```
