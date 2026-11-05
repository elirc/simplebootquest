---
slug: "js-data-cars-top-n"
title: "Data: Top cars by year"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Top cars by year

Return the models of the `n` cars with the **highest** `year`, highest first. Don't mutate the input.

The tests call your function with this data (also available as `CARS` in the tests):

```js
const CARS = [
  {id: 1, model: "Mustang", priceK: 55, km: 22070, year: 2019, fuel: "electric"},
  {id: 2, model: "Civic", priceK: 40, km: 101316, year: 2021, fuel: "hybrid"},
  {id: 3, model: "Ioniq", priceK: 34, km: 21994, year: 2019, fuel: "diesel"},
  {id: 4, model: "Clio", priceK: 53, km: 44031, year: 2015, fuel: "electric"},
  {id: 5, model: "Fiesta", priceK: 51, km: 62714, year: 2022, fuel: "diesel"},
  {id: 6, model: "Model 3", priceK: 15, km: 131375, year: 2021, fuel: "diesel"},
  {id: 7, model: "Mazda3", priceK: 50, km: 24791, year: 2017, fuel: "hybrid"},
  {id: 8, model: "Polo", priceK: 25, km: 65172, year: 2016, fuel: "hybrid"}
]
```
