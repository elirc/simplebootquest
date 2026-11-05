---
slug: "ts-data-cars-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `model` and `km` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `CARS` in the tests):

```js
const CARS = [
  {id: 1, model: "Ioniq", priceK: 42, km: 3762, year: 2013, fuel: "petrol"},
  {id: 2, model: "Mustang", priceK: 44, km: 134808, year: 2009, fuel: "diesel"},
  {id: 3, model: "Golf", priceK: 44, km: 83895, year: 2013, fuel: "electric"},
  {id: 4, model: "Fiesta", priceK: 18, km: 39414, year: 2015, fuel: "hybrid"},
  {id: 5, model: "Corolla", priceK: 34, km: 58652, year: 2014, fuel: "diesel"},
  {id: 6, model: "Clio", priceK: 16, km: 99581, year: 2009, fuel: "hybrid"},
  {id: 7, model: "Mazda3", priceK: 33, km: 111310, year: 2024, fuel: "diesel"},
  {id: 8, model: "Prius", priceK: 30, km: 50126, year: 2015, fuel: "hybrid"}
]
```

Type the parameters and the return value. The interface is already written for you.
