---
slug: "js-data-products-between"
title: "Data: Products in a price range"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Products in a price range

Return the names of products whose `price` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Headphones", price: 4, stock: 56, category: "home", onSale: true},
  {id: 2, name: "Water Bottle", price: 97, stock: 25, category: "tech", onSale: false},
  {id: 3, name: "Monitor Arm", price: 58, stock: 27, category: "tech", onSale: true},
  {id: 4, name: "Backpack", price: 62, stock: 43, category: "home", onSale: false},
  {id: 5, name: "Plant Pot", price: 37, stock: 12, category: "home", onSale: false},
  {id: 6, name: "Desk Lamp", price: 100, stock: 30, category: "office", onSale: true},
  {id: 7, name: "Webcam", price: 50, stock: 4, category: "office", onSale: true},
  {id: 8, name: "Mouse Pad", price: 6, stock: 59, category: "home", onSale: true}
]
```
