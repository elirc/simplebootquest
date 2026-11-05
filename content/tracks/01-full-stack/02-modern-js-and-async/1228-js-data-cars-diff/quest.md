---
slug: "js-data-cars-diff"
title: "Data: What changed between two snapshots?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What changed between two snapshots?

Given yesterday's and today's cars (same ids), return the ids whose `priceK` changed, in today's order.

The tests call your function with this data (also available as `BEFORE` / `AFTER` in the tests):

```js
const BEFORE = [
  {id: 1, model: "Mustang", priceK: 52, km: 153876, year: 2010, fuel: "petrol"},
  {id: 2, model: "Civic", priceK: 23, km: 43921, year: 2017, fuel: "hybrid"},
  {id: 3, model: "Fiesta", priceK: 20, km: 162881, year: 2010, fuel: "electric"},
  {id: 4, model: "Ioniq", priceK: 25, km: 15806, year: 2019, fuel: "diesel"},
  {id: 5, model: "Model 3", priceK: 36, km: 44133, year: 2013, fuel: "petrol"},
  {id: 6, model: "Golf", priceK: 28, km: 144183, year: 2018, fuel: "electric"},
  {id: 7, model: "Polo", priceK: 25, km: 118535, year: 2008, fuel: "diesel"},
  {id: 8, model: "Corolla", priceK: 45, km: 93891, year: 2009, fuel: "electric"}
]
```
