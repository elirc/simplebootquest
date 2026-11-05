---
slug: "debug-cars-avg-per"
title: "Debug: Average price (thousands) per fuel type"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Average price (thousands) per fuel type

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes wrong rounding. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return an object mapping each `fuel` to the average `priceK` of its cars, rounded to a whole number.

The tests call your function with this data (also available as `CARS` in the tests):

```js
const CARS = [
  {id: 1, model: "Prius", priceK: 50, km: 45926, year: 2014, fuel: "hybrid"},
  {id: 2, model: "Golf", priceK: 43, km: 27274, year: 2008, fuel: "diesel"},
  {id: 3, model: "Corolla", priceK: 45, km: 28692, year: 2010, fuel: "hybrid"},
  {id: 4, model: "Polo", priceK: 35, km: 77134, year: 2013, fuel: "diesel"},
  {id: 5, model: "Mustang", priceK: 43, km: 46065, year: 2011, fuel: "petrol"},
  {id: 6, model: "Fiesta", priceK: 20, km: 116269, year: 2024, fuel: "petrol"},
  {id: 7, model: "Leaf", priceK: 54, km: 108806, year: 2015, fuel: "hybrid"},
  {id: 8, model: "Clio", priceK: 52, km: 41663, year: 2018, fuel: "electric"}
]
```
