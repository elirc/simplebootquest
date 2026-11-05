---
slug: "js-data-cars-chain"
title: "Data: Filter, sort, map: cars in one fuel type"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Filter, sort, map: cars in one fuel type

Return the models of cars whose `fuel` equals `value`, sorted by `km` **highest first**. One chain of array methods is enough.

The tests call your function with this data (also available as `CARS` in the tests):

```js
const CARS = [
  {id: 1, model: "Mazda3", priceK: 16, km: 98237, year: 2023, fuel: "electric"},
  {id: 2, model: "Fiesta", priceK: 54, km: 160295, year: 2015, fuel: "hybrid"},
  {id: 3, model: "Leaf", priceK: 33, km: 157467, year: 2015, fuel: "petrol"},
  {id: 4, model: "Mustang", priceK: 44, km: 46388, year: 2010, fuel: "electric"},
  {id: 5, model: "Clio", priceK: 39, km: 78517, year: 2021, fuel: "electric"},
  {id: 6, model: "Civic", priceK: 21, km: 80662, year: 2013, fuel: "petrol"},
  {id: 7, model: "Golf", priceK: 49, km: 162073, year: 2019, fuel: "hybrid"},
  {id: 8, model: "Polo", priceK: 25, km: 34572, year: 2021, fuel: "electric"}
]
```
