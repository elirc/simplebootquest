---
slug: "debug-cars-above"
title: "Debug: Cars with a year above a limit"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Cars with a year above a limit

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the model of every car whose `year` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `CARS` in the tests):

```js
const CARS = [
  {id: 1, model: "Golf", priceK: 34, km: 140483, year: 2013, fuel: "diesel"},
  {id: 2, model: "Mazda3", priceK: 31, km: 124527, year: 2023, fuel: "petrol"},
  {id: 3, model: "Polo", priceK: 18, km: 88693, year: 2009, fuel: "petrol"},
  {id: 4, model: "Model 3", priceK: 29, km: 6472, year: 2013, fuel: "petrol"},
  {id: 5, model: "Clio", priceK: 56, km: 70280, year: 2021, fuel: "electric"},
  {id: 6, model: "Mustang", priceK: 42, km: 66374, year: 2015, fuel: "diesel"},
  {id: 7, model: "Civic", priceK: 24, km: 124346, year: 2015, fuel: "petrol"},
  {id: 8, model: "Prius", priceK: 27, km: 118995, year: 2010, fuel: "diesel"}
]
```
