---
slug: "js-data-products-search"
title: "Data: Search products by name"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Search products by name

Return the names that **contain** `query`, ignoring case. An empty (or whitespace-only) query returns every name.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Coffee Mug", price: 102, stock: 47, category: "home", onSale: false},
  {id: 2, name: "Plant Pot", price: 52, stock: 7, category: "office", onSale: true},
  {id: 3, name: "Webcam", price: 97, stock: 2, category: "tech", onSale: true},
  {id: 4, name: "Notebook", price: 23, stock: 33, category: "tech", onSale: true},
  {id: 5, name: "Backpack", price: 64, stock: 22, category: "home", onSale: false},
  {id: 6, name: "USB Hub", price: 13, stock: 29, category: "office", onSale: true},
  {id: 7, name: "Headphones", price: 87, stock: 36, category: "office", onSale: true},
  {id: 8, name: "Mouse Pad", price: 34, stock: 27, category: "home", onSale: true}
]
```
