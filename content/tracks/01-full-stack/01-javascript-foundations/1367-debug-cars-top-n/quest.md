---
slug: "debug-cars-top-n"
title: "Debug: Top cars by year"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Top cars by year

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes results in the wrong order. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the models of the `n` cars with the **highest** `year`, highest first. Don't mutate the input.

The tests call your function with this data (also available as `CARS` in the tests):

```js
const CARS = [
  {id: 1, model: "Prius", priceK: 48, km: 108452, year: 2008, fuel: "hybrid"},
  {id: 2, model: "Civic", priceK: 35, km: 154052, year: 2016, fuel: "hybrid"},
  {id: 3, model: "Mazda3", priceK: 26, km: 43702, year: 2016, fuel: "diesel"},
  {id: 4, model: "Leaf", priceK: 57, km: 59796, year: 2019, fuel: "hybrid"},
  {id: 5, model: "Corolla", priceK: 20, km: 56436, year: 2024, fuel: "petrol"},
  {id: 6, model: "Golf", priceK: 15, km: 3441, year: 2021, fuel: "petrol"},
  {id: 7, model: "Mustang", priceK: 16, km: 83257, year: 2017, fuel: "diesel"},
  {id: 8, model: "Model 3", priceK: 15, km: 145099, year: 2009, fuel: "electric"}
]
```
