---
slug: "js-data-products-histogram"
title: "Data: Bucket products by price"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Bucket products by price

Group products into buckets of width `width` by `price`: the bucket key is `Math.floor(value / width) * width`. Return an object of bucket → count.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Desk Lamp", price: 110, stock: 49, category: "office", onSale: true},
  {id: 2, name: "Monitor Arm", price: 19, stock: 59, category: "tech", onSale: true},
  {id: 3, name: "Mouse Pad", price: 93, stock: 47, category: "home", onSale: true},
  {id: 4, name: "Plant Pot", price: 100, stock: 55, category: "office", onSale: true},
  {id: 5, name: "Webcam", price: 81, stock: 12, category: "tech", onSale: true},
  {id: 6, name: "Backpack", price: 10, stock: 11, category: "office", onSale: true},
  {id: 7, name: "Coffee Mug", price: 85, stock: 53, category: "tech", onSale: true},
  {id: 8, name: "Water Bottle", price: 42, stock: 7, category: "home", onSale: false}
]
```
