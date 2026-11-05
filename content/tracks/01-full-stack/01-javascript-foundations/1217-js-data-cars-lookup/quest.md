---
slug: "js-data-cars-lookup"
title: "Data: Look up a car's mileage (km)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Look up a car's mileage (km)

Return the `km` of the car whose model is `model`, or `null` if there isn't one.

The tests call your function with this data (also available as `CARS` in the tests):

```js
const CARS = [
  {id: 1, model: "Mustang", priceK: 24, km: 2028, year: 2014, fuel: "petrol"},
  {id: 2, model: "Polo", priceK: 44, km: 24277, year: 2022, fuel: "petrol"},
  {id: 3, model: "Corolla", priceK: 27, km: 89977, year: 2015, fuel: "hybrid"},
  {id: 4, model: "Clio", priceK: 48, km: 158206, year: 2022, fuel: "electric"},
  {id: 5, model: "Mazda3", priceK: 23, km: 160565, year: 2019, fuel: "diesel"},
  {id: 6, model: "Ioniq", priceK: 23, km: 55558, year: 2013, fuel: "petrol"},
  {id: 7, model: "Fiesta", priceK: 45, km: 65805, year: 2012, fuel: "petrol"},
  {id: 8, model: "Civic", priceK: 57, km: 162640, year: 2023, fuel: "diesel"}
]
```
