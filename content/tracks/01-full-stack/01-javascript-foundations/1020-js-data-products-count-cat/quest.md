---
slug: "js-data-products-count-cat"
title: "Data: Count products by category"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Count products by category

Return how many products have `category` equal to `value`.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Mouse Pad", price: 120, stock: 2, category: "home", onSale: true},
  {id: 2, name: "Notebook", price: 99, stock: 26, category: "tech", onSale: true},
  {id: 3, name: "Backpack", price: 107, stock: 27, category: "office", onSale: true},
  {id: 4, name: "Headphones", price: 17, stock: 11, category: "office", onSale: false},
  {id: 5, name: "Coffee Mug", price: 37, stock: 19, category: "home", onSale: false},
  {id: 6, name: "Water Bottle", price: 44, stock: 44, category: "office", onSale: true},
  {id: 7, name: "Monitor Arm", price: 47, stock: 37, category: "tech", onSale: true},
  {id: 8, name: "Plant Pot", price: 65, stock: 26, category: "home", onSale: false}
]
```
