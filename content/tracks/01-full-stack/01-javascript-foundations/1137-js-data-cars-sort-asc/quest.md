---
slug: "js-data-cars-sort-asc"
title: "Data: Sort cars by price (thousands)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["`[...array].sort(...)` copies first, so the original stays untouched.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Sort cars by price (thousands)

Return the models sorted by `priceK` from **lowest to highest**. Ties keep their original order. Don't mutate the input array.

The tests call your function with this data (also available as `CARS` in the tests):

```js
const CARS = [
  {id: 1, model: "Golf", priceK: 20, km: 37181, year: 2018, fuel: "diesel"},
  {id: 2, model: "Leaf", priceK: 29, km: 103088, year: 2011, fuel: "petrol"},
  {id: 3, model: "Ioniq", priceK: 19, km: 22123, year: 2023, fuel: "petrol"},
  {id: 4, model: "Corolla", priceK: 43, km: 141407, year: 2013, fuel: "diesel"},
  {id: 5, model: "Mazda3", priceK: 50, km: 37131, year: 2012, fuel: "petrol"},
  {id: 6, model: "Mustang", priceK: 33, km: 132774, year: 2013, fuel: "diesel"},
  {id: 7, model: "Polo", priceK: 32, km: 52984, year: 2013, fuel: "hybrid"},
  {id: 8, model: "Fiesta", priceK: 23, km: 97380, year: 2010, fuel: "hybrid"}
]
```
