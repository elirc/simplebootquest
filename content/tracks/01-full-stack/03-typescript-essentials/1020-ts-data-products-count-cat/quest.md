---
slug: "ts-data-products-count-cat"
title: "Data: Count products by category"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Count products by category

Return how many products have `category` equal to `value`.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Backpack", price: 117, stock: 49, category: "home", onSale: false},
  {id: 2, name: "Water Bottle", price: 40, stock: 3, category: "tech", onSale: true},
  {id: 3, name: "Webcam", price: 54, stock: 33, category: "tech", onSale: false},
  {id: 4, name: "Headphones", price: 102, stock: 17, category: "tech", onSale: false},
  {id: 5, name: "Monitor Arm", price: 94, stock: 59, category: "tech", onSale: true},
  {id: 6, name: "Notebook", price: 78, stock: 31, category: "office", onSale: false},
  {id: 7, name: "Coffee Mug", price: 85, stock: 51, category: "tech", onSale: false},
  {id: 8, name: "Mouse Pad", price: 42, stock: 59, category: "office", onSale: false}
]
```

Type the parameters and the return value. The interface is already written for you.
