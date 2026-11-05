---
slug: "js-data-cars-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `model` and `priceK` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `CARS` in the tests):

```js
const CARS = [
  {id: 1, model: "Prius", priceK: 39, km: 48215, year: 2021, fuel: "diesel"},
  {id: 2, model: "Mazda3", priceK: 26, km: 95313, year: 2012, fuel: "hybrid"},
  {id: 3, model: "Clio", priceK: 49, km: 3486, year: 2011, fuel: "electric"},
  {id: 4, model: "Ioniq", priceK: 38, km: 87825, year: 2022, fuel: "petrol"},
  {id: 5, model: "Fiesta", priceK: 15, km: 97530, year: 2010, fuel: "diesel"},
  {id: 6, model: "Model 3", priceK: 45, km: 160129, year: 2013, fuel: "diesel"},
  {id: 7, model: "Corolla", priceK: 40, km: 97609, year: 2016, fuel: "diesel"},
  {id: 8, model: "Golf", priceK: 31, km: 91225, year: 2011, fuel: "electric"}
]
```
