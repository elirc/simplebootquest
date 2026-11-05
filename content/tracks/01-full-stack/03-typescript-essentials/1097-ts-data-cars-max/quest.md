---
slug: "ts-data-cars-max"
title: "Data: The car with the highest year"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The car with the highest year

Return the model of the car with the **highest** `year`. If several tie, return the first. Return `null` for an empty list.

The tests call your function with this data (also available as `CARS` in the tests):

```js
const CARS = [
  {id: 1, model: "Prius", priceK: 49, km: 175557, year: 2012, fuel: "hybrid"},
  {id: 2, model: "Civic", priceK: 49, km: 38640, year: 2019, fuel: "electric"},
  {id: 3, model: "Polo", priceK: 48, km: 147202, year: 2013, fuel: "diesel"},
  {id: 4, model: "Fiesta", priceK: 35, km: 101069, year: 2017, fuel: "hybrid"},
  {id: 5, model: "Golf", priceK: 16, km: 119107, year: 2009, fuel: "electric"},
  {id: 6, model: "Ioniq", priceK: 21, km: 122755, year: 2019, fuel: "petrol"},
  {id: 7, model: "Model 3", priceK: 33, km: 60403, year: 2011, fuel: "electric"},
  {id: 8, model: "Mazda3", priceK: 47, km: 166239, year: 2023, fuel: "hybrid"}
]
```

Type the parameters and the return value. The interface is already written for you.
