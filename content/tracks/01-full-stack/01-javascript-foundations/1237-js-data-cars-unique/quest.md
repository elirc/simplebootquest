---
slug: "js-data-cars-unique"
title: "Data: Distinct fuel type values"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Distinct fuel type values

Return every distinct `fuel` that appears, sorted alphabetically.

The tests call your function with this data (also available as `CARS` in the tests):

```js
const CARS = [
  {id: 1, model: "Ioniq", priceK: 23, km: 79366, year: 2015, fuel: "hybrid"},
  {id: 2, model: "Corolla", priceK: 48, km: 158413, year: 2011, fuel: "diesel"},
  {id: 3, model: "Golf", priceK: 58, km: 77175, year: 2019, fuel: "electric"},
  {id: 4, model: "Leaf", priceK: 25, km: 126469, year: 2010, fuel: "diesel"},
  {id: 5, model: "Mazda3", priceK: 26, km: 100777, year: 2019, fuel: "electric"},
  {id: 6, model: "Prius", priceK: 31, km: 18132, year: 2012, fuel: "diesel"},
  {id: 7, model: "Model 3", priceK: 27, km: 9335, year: 2010, fuel: "electric"},
  {id: 8, model: "Clio", priceK: 33, km: 103449, year: 2021, fuel: "hybrid"}
]
```
