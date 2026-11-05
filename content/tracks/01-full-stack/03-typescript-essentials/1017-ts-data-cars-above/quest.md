---
slug: "ts-data-cars-above"
title: "Data: Cars with a price (thousands) above a limit"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Cars with a price (thousands) above a limit

Return the model of every car whose `priceK` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `CARS` in the tests):

```js
const CARS = [
  {id: 1, model: "Clio", priceK: 53, km: 30152, year: 2024, fuel: "petrol"},
  {id: 2, model: "Fiesta", priceK: 24, km: 71935, year: 2021, fuel: "hybrid"},
  {id: 3, model: "Ioniq", priceK: 45, km: 45817, year: 2019, fuel: "electric"},
  {id: 4, model: "Mazda3", priceK: 43, km: 133031, year: 2018, fuel: "hybrid"},
  {id: 5, model: "Corolla", priceK: 24, km: 71972, year: 2022, fuel: "electric"},
  {id: 6, model: "Model 3", priceK: 54, km: 141830, year: 2024, fuel: "petrol"},
  {id: 7, model: "Mustang", priceK: 50, km: 19829, year: 2009, fuel: "diesel"},
  {id: 8, model: "Civic", priceK: 42, km: 29167, year: 2012, fuel: "diesel"}
]
```

Type the parameters and the return value. The interface is already written for you.
