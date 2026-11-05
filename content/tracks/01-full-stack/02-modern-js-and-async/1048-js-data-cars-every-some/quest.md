---
slug: "js-data-cars-every-some"
title: "Data: Are all cars under a mileage (km) limit?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all cars under a mileage (km) limit?

Return `true` if **every** car has `km` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `CARS` in the tests):

```js
const CARS = [
  {id: 1, model: "Ioniq", priceK: 34, km: 42680, year: 2021, fuel: "electric"},
  {id: 2, model: "Fiesta", priceK: 42, km: 135000, year: 2020, fuel: "diesel"},
  {id: 3, model: "Leaf", priceK: 23, km: 24697, year: 2009, fuel: "electric"},
  {id: 4, model: "Corolla", priceK: 18, km: 103087, year: 2010, fuel: "hybrid"},
  {id: 5, model: "Civic", priceK: 43, km: 95195, year: 2021, fuel: "hybrid"},
  {id: 6, model: "Prius", priceK: 47, km: 179983, year: 2019, fuel: "hybrid"},
  {id: 7, model: "Golf", priceK: 31, km: 42236, year: 2010, fuel: "petrol"},
  {id: 8, model: "Polo", priceK: 44, km: 63944, year: 2017, fuel: "electric"}
]
```
