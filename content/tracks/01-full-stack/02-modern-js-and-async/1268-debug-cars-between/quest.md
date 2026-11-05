---
slug: "debug-cars-between"
title: "Debug: Cars in a mileage (km) range"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Cars in a mileage (km) range

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the models of cars whose `km` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `CARS` in the tests):

```js
const CARS = [
  {id: 1, model: "Model 3", priceK: 42, km: 173531, year: 2023, fuel: "diesel"},
  {id: 2, model: "Clio", priceK: 49, km: 130104, year: 2019, fuel: "electric"},
  {id: 3, model: "Mustang", priceK: 47, km: 57808, year: 2018, fuel: "petrol"},
  {id: 4, model: "Leaf", priceK: 48, km: 102425, year: 2023, fuel: "electric"},
  {id: 5, model: "Fiesta", priceK: 45, km: 155417, year: 2017, fuel: "petrol"},
  {id: 6, model: "Golf", priceK: 24, km: 151518, year: 2019, fuel: "hybrid"},
  {id: 7, model: "Polo", priceK: 30, km: 166440, year: 2016, fuel: "diesel"},
  {id: 8, model: "Civic", priceK: 46, km: 61589, year: 2014, fuel: "electric"}
]
```
