---
slug: "ts-data-cars-every-some"
title: "Data: Are all cars under a year limit?"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all cars under a year limit?

Return `true` if **every** car has `year` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `CARS` in the tests):

```js
const CARS = [
  {id: 1, model: "Mazda3", priceK: 26, km: 26024, year: 2016, fuel: "hybrid"},
  {id: 2, model: "Leaf", priceK: 52, km: 179802, year: 2018, fuel: "diesel"},
  {id: 3, model: "Model 3", priceK: 32, km: 78383, year: 2014, fuel: "petrol"},
  {id: 4, model: "Mustang", priceK: 29, km: 165378, year: 2022, fuel: "diesel"},
  {id: 5, model: "Corolla", priceK: 36, km: 42637, year: 2011, fuel: "electric"},
  {id: 6, model: "Civic", priceK: 46, km: 85294, year: 2010, fuel: "diesel"},
  {id: 7, model: "Prius", priceK: 22, km: 84982, year: 2023, fuel: "diesel"},
  {id: 8, model: "Golf", priceK: 45, km: 62960, year: 2015, fuel: "diesel"}
]
```

Type the parameters and the return value. The interface is already written for you.
