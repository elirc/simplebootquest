---
slug: "js-data-cars-histogram"
title: "Data: Bucket cars by price (thousands)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Bucket cars by price (thousands)

Group cars into buckets of width `width` by `priceK`: the bucket key is `Math.floor(value / width) * width`. Return an object of bucket → count.

The tests call your function with this data (also available as `CARS` in the tests):

```js
const CARS = [
  {id: 1, model: "Model 3", priceK: 17, km: 33651, year: 2020, fuel: "diesel"},
  {id: 2, model: "Ioniq", priceK: 42, km: 150197, year: 2014, fuel: "electric"},
  {id: 3, model: "Corolla", priceK: 53, km: 156597, year: 2018, fuel: "hybrid"},
  {id: 4, model: "Mazda3", priceK: 15, km: 77295, year: 2011, fuel: "petrol"},
  {id: 5, model: "Clio", priceK: 51, km: 126628, year: 2010, fuel: "electric"},
  {id: 6, model: "Prius", priceK: 53, km: 6519, year: 2021, fuel: "electric"},
  {id: 7, model: "Fiesta", priceK: 54, km: 128833, year: 2009, fuel: "diesel"},
  {id: 8, model: "Civic", priceK: 50, km: 135022, year: 2011, fuel: "hybrid"}
]
```
