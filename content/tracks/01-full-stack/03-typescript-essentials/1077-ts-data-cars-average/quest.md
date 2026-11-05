---
slug: "ts-data-cars-average"
title: "Data: Average year"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average year

Return the average `year` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `CARS` in the tests):

```js
const CARS = [
  {id: 1, model: "Prius", priceK: 25, km: 153445, year: 2015, fuel: "hybrid"},
  {id: 2, model: "Model 3", priceK: 51, km: 101239, year: 2021, fuel: "electric"},
  {id: 3, model: "Mustang", priceK: 55, km: 46146, year: 2017, fuel: "electric"},
  {id: 4, model: "Polo", priceK: 46, km: 11001, year: 2022, fuel: "petrol"},
  {id: 5, model: "Fiesta", priceK: 51, km: 137010, year: 2013, fuel: "hybrid"},
  {id: 6, model: "Mazda3", priceK: 33, km: 54698, year: 2021, fuel: "diesel"},
  {id: 7, model: "Clio", priceK: 33, km: 18846, year: 2022, fuel: "petrol"},
  {id: 8, model: "Civic", priceK: 40, km: 64239, year: 2024, fuel: "diesel"}
]
```

Type the parameters and the return value. The interface is already written for you.
