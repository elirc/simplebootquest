---
slug: "js-data-cars-format"
title: "Data: Format cars as labels"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Format cars as labels

Return one string per car: `"<model> (<year>)"`, e.g. `"Corolla (2010)"`.

The tests call your function with this data (also available as `CARS` in the tests):

```js
const CARS = [
  {id: 1, model: "Corolla", priceK: 35, km: 161265, year: 2010, fuel: "diesel"},
  {id: 2, model: "Golf", priceK: 19, km: 117282, year: 2016, fuel: "petrol"},
  {id: 3, model: "Civic", priceK: 18, km: 35089, year: 2020, fuel: "petrol"},
  {id: 4, model: "Prius", priceK: 54, km: 72858, year: 2023, fuel: "hybrid"},
  {id: 5, model: "Polo", priceK: 55, km: 131810, year: 2023, fuel: "petrol"},
  {id: 6, model: "Mustang", priceK: 18, km: 28961, year: 2015, fuel: "diesel"},
  {id: 7, model: "Clio", priceK: 27, km: 21695, year: 2010, fuel: "petrol"},
  {id: 8, model: "Leaf", priceK: 24, km: 28594, year: 2016, fuel: "electric"}
]
```
