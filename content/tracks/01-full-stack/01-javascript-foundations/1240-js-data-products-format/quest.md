---
slug: "js-data-products-format"
title: "Data: Format products as labels"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Format products as labels

Return one string per product: `"<name> (<stock>)"`, e.g. `"Notebook (11)"`.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Notebook", price: 11, stock: 11, category: "office", onSale: true},
  {id: 2, name: "Webcam", price: 50, stock: 1, category: "tech", onSale: false},
  {id: 3, name: "Monitor Arm", price: 8, stock: 52, category: "home", onSale: false},
  {id: 4, name: "Pen Set", price: 59, stock: 57, category: "home", onSale: false},
  {id: 5, name: "Plant Pot", price: 99, stock: 30, category: "office", onSale: false},
  {id: 6, name: "USB Hub", price: 67, stock: 18, category: "home", onSale: false},
  {id: 7, name: "Headphones", price: 81, stock: 50, category: "office", onSale: false},
  {id: 8, name: "Desk Lamp", price: 26, stock: 32, category: "tech", onSale: true}
]
```
