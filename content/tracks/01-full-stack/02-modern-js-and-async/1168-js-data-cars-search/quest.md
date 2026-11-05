---
slug: "js-data-cars-search"
title: "Data: Search cars by model"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Search cars by model

Return the models that **contain** `query`, ignoring case. An empty (or whitespace-only) query returns every model.

The tests call your function with this data (also available as `CARS` in the tests):

```js
const CARS = [
  {id: 1, model: "Clio", priceK: 43, km: 7991, year: 2021, fuel: "diesel"},
  {id: 2, model: "Mustang", priceK: 23, km: 162376, year: 2019, fuel: "hybrid"},
  {id: 3, model: "Model 3", priceK: 41, km: 135110, year: 2020, fuel: "electric"},
  {id: 4, model: "Ioniq", priceK: 23, km: 7618, year: 2012, fuel: "hybrid"},
  {id: 5, model: "Leaf", priceK: 28, km: 27236, year: 2012, fuel: "hybrid"},
  {id: 6, model: "Golf", priceK: 47, km: 67971, year: 2016, fuel: "electric"},
  {id: 7, model: "Corolla", priceK: 35, km: 129128, year: 2010, fuel: "petrol"},
  {id: 8, model: "Prius", priceK: 27, km: 123170, year: 2017, fuel: "diesel"}
]
```
