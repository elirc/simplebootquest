---
slug: "debug-cars-chain"
title: "Debug: Filter, sort, map: cars in one fuel type"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Filter, sort, map: cars in one fuel type

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes results in the wrong order. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the models of cars whose `fuel` equals `value`, sorted by `priceK` **highest first**. One chain of array methods is enough.

The tests call your function with this data (also available as `CARS` in the tests):

```js
const CARS = [
  {id: 1, model: "Leaf", priceK: 29, km: 82299, year: 2008, fuel: "hybrid"},
  {id: 2, model: "Golf", priceK: 33, km: 88369, year: 2012, fuel: "hybrid"},
  {id: 3, model: "Mustang", priceK: 48, km: 44897, year: 2009, fuel: "electric"},
  {id: 4, model: "Mazda3", priceK: 47, km: 98835, year: 2015, fuel: "hybrid"},
  {id: 5, model: "Fiesta", priceK: 55, km: 120121, year: 2008, fuel: "electric"},
  {id: 6, model: "Prius", priceK: 36, km: 128498, year: 2012, fuel: "hybrid"},
  {id: 7, model: "Ioniq", priceK: 50, km: 166557, year: 2021, fuel: "diesel"},
  {id: 8, model: "Civic", priceK: 31, km: 111306, year: 2010, fuel: "hybrid"}
]
```
