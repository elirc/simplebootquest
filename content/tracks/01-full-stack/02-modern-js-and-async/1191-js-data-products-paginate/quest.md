---
slug: "js-data-products-paginate"
title: "Data: Paginate products"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Paginate products

Return `{ items, page, totalPages }` where `items` are the names on page `page` (1-based) of size `size`. Out-of-range pages return an empty `items` array.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Notebook", price: 70, stock: 3, category: "tech", onSale: true},
  {id: 2, name: "Desk Lamp", price: 37, stock: 9, category: "tech", onSale: true},
  {id: 3, name: "USB Hub", price: 30, stock: 17, category: "tech", onSale: false},
  {id: 4, name: "Webcam", price: 15, stock: 50, category: "tech", onSale: true},
  {id: 5, name: "Backpack", price: 28, stock: 34, category: "tech", onSale: true},
  {id: 6, name: "Coffee Mug", price: 21, stock: 52, category: "office", onSale: true},
  {id: 7, name: "Monitor Arm", price: 36, stock: 4, category: "office", onSale: false},
  {id: 8, name: "Plant Pot", price: 101, stock: 23, category: "office", onSale: true}
]
```
