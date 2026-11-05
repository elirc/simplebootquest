---
slug: "ts-data-cars-between"
title: "Data: Cars in a mileage (km) range"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Cars in a mileage (km) range

Return the models of cars whose `km` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `CARS` in the tests):

```js
const CARS = [
  {id: 1, model: "Clio", priceK: 57, km: 104321, year: 2020, fuel: "petrol"},
  {id: 2, model: "Model 3", priceK: 27, km: 66952, year: 2013, fuel: "petrol"},
  {id: 3, model: "Fiesta", priceK: 40, km: 87470, year: 2022, fuel: "diesel"},
  {id: 4, model: "Polo", priceK: 34, km: 158301, year: 2022, fuel: "hybrid"},
  {id: 5, model: "Mazda3", priceK: 24, km: 134190, year: 2009, fuel: "hybrid"},
  {id: 6, model: "Prius", priceK: 30, km: 66488, year: 2021, fuel: "electric"},
  {id: 7, model: "Civic", priceK: 16, km: 24414, year: 2015, fuel: "diesel"},
  {id: 8, model: "Mustang", priceK: 52, km: 67308, year: 2022, fuel: "petrol"}
]
```

Type the parameters and the return value. The interface is already written for you.
