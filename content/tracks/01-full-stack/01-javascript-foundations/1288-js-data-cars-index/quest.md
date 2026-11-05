---
slug: "js-data-cars-index"
title: "Data: Index cars by id"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Index cars by id

Return an object mapping each `id` to the car's model, for fast lookups.

The tests call your function with this data (also available as `CARS` in the tests):

```js
const CARS = [
  {id: 1, model: "Model 3", priceK: 57, km: 64456, year: 2019, fuel: "electric"},
  {id: 2, model: "Mustang", priceK: 21, km: 136017, year: 2021, fuel: "diesel"},
  {id: 3, model: "Clio", priceK: 37, km: 173236, year: 2009, fuel: "electric"},
  {id: 4, model: "Corolla", priceK: 37, km: 40859, year: 2013, fuel: "hybrid"},
  {id: 5, model: "Prius", priceK: 50, km: 43139, year: 2023, fuel: "diesel"},
  {id: 6, model: "Civic", priceK: 17, km: 10942, year: 2013, fuel: "hybrid"},
  {id: 7, model: "Polo", priceK: 40, km: 105734, year: 2012, fuel: "electric"},
  {id: 8, model: "Golf", priceK: 25, km: 60781, year: 2021, fuel: "hybrid"}
]
```
