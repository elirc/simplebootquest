---
slug: "js-data-products-top-n"
title: "Data: Top products by price"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Top products by price

Return the names of the `n` products with the **highest** `price`, highest first. Don't mutate the input.

The tests call your function with this data (also available as `PRODUCTS` in the tests):

```js
const PRODUCTS = [
  {id: 1, name: "Pen Set", price: 105, stock: 52, category: "office", onSale: true},
  {id: 2, name: "Desk Lamp", price: 40, stock: 34, category: "office", onSale: true},
  {id: 3, name: "Webcam", price: 112, stock: 17, category: "tech", onSale: true},
  {id: 4, name: "Plant Pot", price: 21, stock: 6, category: "home", onSale: false},
  {id: 5, name: "USB Hub", price: 82, stock: 60, category: "office", onSale: true},
  {id: 6, name: "Backpack", price: 14, stock: 46, category: "office", onSale: false},
  {id: 7, name: "Notebook", price: 32, stock: 3, category: "home", onSale: true},
  {id: 8, name: "Coffee Mug", price: 10, stock: 39, category: "office", onSale: false}
]
```
