---
slug: "debug-cars-sort-asc"
title: "Debug: Sort cars by mileage (km)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Sort cars by mileage (km)

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes results in the wrong order. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the models sorted by `km` from **lowest to highest**. Ties keep their original order. Don't mutate the input array.

The tests call your function with this data (also available as `CARS` in the tests):

```js
const CARS = [
  {id: 1, model: "Leaf", priceK: 41, km: 79065, year: 2018, fuel: "hybrid"},
  {id: 2, model: "Mazda3", priceK: 55, km: 54463, year: 2018, fuel: "hybrid"},
  {id: 3, model: "Fiesta", priceK: 30, km: 171300, year: 2014, fuel: "diesel"},
  {id: 4, model: "Mustang", priceK: 29, km: 46764, year: 2023, fuel: "petrol"},
  {id: 5, model: "Prius", priceK: 39, km: 123080, year: 2016, fuel: "hybrid"},
  {id: 6, model: "Ioniq", priceK: 39, km: 8167, year: 2022, fuel: "electric"},
  {id: 7, model: "Model 3", priceK: 35, km: 3923, year: 2022, fuel: "diesel"},
  {id: 8, model: "Corolla", priceK: 42, km: 32286, year: 2014, fuel: "electric"}
]
```
