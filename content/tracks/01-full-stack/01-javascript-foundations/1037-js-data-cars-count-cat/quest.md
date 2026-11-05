---
slug: "js-data-cars-count-cat"
title: "Data: Count cars by fuel type"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Count cars by fuel type

Return how many cars have `fuel` equal to `value`.

The tests call your function with this data (also available as `CARS` in the tests):

```js
const CARS = [
  {id: 1, model: "Leaf", priceK: 55, km: 97976, year: 2021, fuel: "petrol"},
  {id: 2, model: "Ioniq", priceK: 30, km: 120076, year: 2018, fuel: "petrol"},
  {id: 3, model: "Polo", priceK: 22, km: 154831, year: 2021, fuel: "electric"},
  {id: 4, model: "Corolla", priceK: 49, km: 68222, year: 2011, fuel: "diesel"},
  {id: 5, model: "Mazda3", priceK: 34, km: 170383, year: 2020, fuel: "diesel"},
  {id: 6, model: "Golf", priceK: 43, km: 64958, year: 2022, fuel: "hybrid"},
  {id: 7, model: "Model 3", priceK: 36, km: 82666, year: 2022, fuel: "hybrid"},
  {id: 8, model: "Clio", priceK: 17, km: 73529, year: 2020, fuel: "petrol"}
]
```
