---
slug: "js-data-cars-group-sum"
title: "Data: Total price (thousands) per fuel type"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total price (thousands) per fuel type

Return an object mapping each `fuel` to the **sum** of `priceK` for cars in it.

The tests call your function with this data (also available as `CARS` in the tests):

```js
const CARS = [
  {id: 1, model: "Polo", priceK: 55, km: 105082, year: 2022, fuel: "diesel"},
  {id: 2, model: "Ioniq", priceK: 54, km: 20590, year: 2018, fuel: "hybrid"},
  {id: 3, model: "Civic", priceK: 21, km: 68761, year: 2016, fuel: "petrol"},
  {id: 4, model: "Prius", priceK: 50, km: 64002, year: 2018, fuel: "electric"},
  {id: 5, model: "Mustang", priceK: 18, km: 23636, year: 2019, fuel: "diesel"},
  {id: 6, model: "Corolla", priceK: 29, km: 22760, year: 2011, fuel: "electric"},
  {id: 7, model: "Golf", priceK: 17, km: 70137, year: 2023, fuel: "petrol"},
  {id: 8, model: "Leaf", priceK: 45, km: 112996, year: 2012, fuel: "electric"}
]
```
