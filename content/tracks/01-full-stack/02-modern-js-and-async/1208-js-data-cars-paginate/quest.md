---
slug: "js-data-cars-paginate"
title: "Data: Paginate cars"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Paginate cars

Return `{ items, page, totalPages }` where `items` are the models on page `page` (1-based) of size `size`. Out-of-range pages return an empty `items` array.

The tests call your function with this data (also available as `CARS` in the tests):

```js
const CARS = [
  {id: 1, model: "Corolla", priceK: 32, km: 58967, year: 2018, fuel: "hybrid"},
  {id: 2, model: "Polo", priceK: 46, km: 96989, year: 2023, fuel: "hybrid"},
  {id: 3, model: "Mustang", priceK: 25, km: 61220, year: 2015, fuel: "diesel"},
  {id: 4, model: "Model 3", priceK: 37, km: 99879, year: 2014, fuel: "hybrid"},
  {id: 5, model: "Fiesta", priceK: 48, km: 170216, year: 2010, fuel: "electric"},
  {id: 6, model: "Leaf", priceK: 50, km: 70707, year: 2011, fuel: "petrol"},
  {id: 7, model: "Prius", priceK: 28, km: 23156, year: 2019, fuel: "electric"},
  {id: 8, model: "Mazda3", priceK: 44, km: 162939, year: 2012, fuel: "diesel"}
]
```
