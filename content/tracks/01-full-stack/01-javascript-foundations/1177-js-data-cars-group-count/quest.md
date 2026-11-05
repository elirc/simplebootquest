---
slug: "js-data-cars-group-count"
title: "Data: How many cars per fuel type?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# How many cars per fuel type?

Return an object mapping each `fuel` to the number of cars with it. Only include values that appear.

The tests call your function with this data (also available as `CARS` in the tests):

```js
const CARS = [
  {id: 1, model: "Ioniq", priceK: 52, km: 158382, year: 2018, fuel: "petrol"},
  {id: 2, model: "Mazda3", priceK: 33, km: 43070, year: 2021, fuel: "electric"},
  {id: 3, model: "Fiesta", priceK: 54, km: 53946, year: 2020, fuel: "petrol"},
  {id: 4, model: "Leaf", priceK: 29, km: 131597, year: 2011, fuel: "diesel"},
  {id: 5, model: "Golf", priceK: 37, km: 106494, year: 2023, fuel: "electric"},
  {id: 6, model: "Corolla", priceK: 43, km: 119545, year: 2011, fuel: "electric"},
  {id: 7, model: "Polo", priceK: 53, km: 25620, year: 2023, fuel: "petrol"},
  {id: 8, model: "Mustang", priceK: 39, km: 97735, year: 2013, fuel: "hybrid"}
]
```
