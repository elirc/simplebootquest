---
slug: "js-data-cars-nth"
title: "Data: The n-th car by mileage (km)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The n-th car by mileage (km)

Return the model of the car ranked `n` (1 = highest `km`), or `null` if `n` is out of range.

The tests call your function with this data (also available as `CARS` in the tests):

```js
const CARS = [
  {id: 1, model: "Clio", priceK: 24, km: 46083, year: 2017, fuel: "hybrid"},
  {id: 2, model: "Golf", priceK: 35, km: 23407, year: 2023, fuel: "petrol"},
  {id: 3, model: "Mustang", priceK: 17, km: 13994, year: 2011, fuel: "diesel"},
  {id: 4, model: "Corolla", priceK: 42, km: 1197, year: 2015, fuel: "petrol"},
  {id: 5, model: "Model 3", priceK: 28, km: 156167, year: 2024, fuel: "electric"},
  {id: 6, model: "Polo", priceK: 38, km: 69063, year: 2014, fuel: "hybrid"},
  {id: 7, model: "Leaf", priceK: 46, km: 54451, year: 2024, fuel: "electric"},
  {id: 8, model: "Prius", priceK: 22, km: 164177, year: 2019, fuel: "hybrid"}
]
```
