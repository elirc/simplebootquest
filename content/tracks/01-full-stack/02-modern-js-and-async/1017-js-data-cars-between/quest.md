---
slug: "js-data-cars-between"
title: "Data: Cars in a mileage (km) range"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Cars in a mileage (km) range

Return the models of cars whose `km` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `CARS` in the tests):

```js
const CARS = [
  {id: 1, model: "Polo", priceK: 49, km: 35612, year: 2020, fuel: "petrol"},
  {id: 2, model: "Mustang", priceK: 46, km: 92359, year: 2016, fuel: "electric"},
  {id: 3, model: "Mazda3", priceK: 57, km: 63213, year: 2022, fuel: "electric"},
  {id: 4, model: "Model 3", priceK: 41, km: 157591, year: 2012, fuel: "electric"},
  {id: 5, model: "Leaf", priceK: 39, km: 100208, year: 2022, fuel: "hybrid"},
  {id: 6, model: "Clio", priceK: 55, km: 128404, year: 2014, fuel: "hybrid"},
  {id: 7, model: "Civic", priceK: 34, km: 32477, year: 2013, fuel: "hybrid"},
  {id: 8, model: "Corolla", priceK: 55, km: 133134, year: 2010, fuel: "petrol"}
]
```
