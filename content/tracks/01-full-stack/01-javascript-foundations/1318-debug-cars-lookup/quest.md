---
slug: "debug-cars-lookup"
title: "Debug: Look up a car's mileage (km)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Look up a car's mileage (km)

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the `km` of the car whose model is `model`, or `null` if there isn't one.

The tests call your function with this data (also available as `CARS` in the tests):

```js
const CARS = [
  {id: 1, model: "Clio", priceK: 30, km: 179735, year: 2021, fuel: "diesel"},
  {id: 2, model: "Mustang", priceK: 25, km: 106379, year: 2019, fuel: "petrol"},
  {id: 3, model: "Corolla", priceK: 56, km: 96420, year: 2008, fuel: "hybrid"},
  {id: 4, model: "Fiesta", priceK: 39, km: 14095, year: 2013, fuel: "electric"},
  {id: 5, model: "Civic", priceK: 50, km: 55376, year: 2009, fuel: "diesel"},
  {id: 6, model: "Ioniq", priceK: 32, km: 155579, year: 2019, fuel: "diesel"},
  {id: 7, model: "Golf", priceK: 51, km: 28274, year: 2010, fuel: "diesel"},
  {id: 8, model: "Prius", priceK: 47, km: 9638, year: 2019, fuel: "diesel"}
]
```
