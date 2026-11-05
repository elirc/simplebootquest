---
slug: "js-data-cars-max"
title: "Data: The car with the highest price (thousands)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The car with the highest price (thousands)

Return the model of the car with the **highest** `priceK`. If several tie, return the first. Return `null` for an empty list.

The tests call your function with this data (also available as `CARS` in the tests):

```js
const CARS = [
  {id: 1, model: "Golf", priceK: 57, km: 138317, year: 2021, fuel: "diesel"},
  {id: 2, model: "Corolla", priceK: 51, km: 171424, year: 2022, fuel: "hybrid"},
  {id: 3, model: "Prius", priceK: 52, km: 113001, year: 2009, fuel: "diesel"},
  {id: 4, model: "Leaf", priceK: 50, km: 37238, year: 2012, fuel: "electric"},
  {id: 5, model: "Mazda3", priceK: 19, km: 63421, year: 2022, fuel: "hybrid"},
  {id: 6, model: "Ioniq", priceK: 45, km: 148627, year: 2010, fuel: "electric"},
  {id: 7, model: "Fiesta", priceK: 34, km: 17103, year: 2019, fuel: "petrol"},
  {id: 8, model: "Clio", priceK: 16, km: 58005, year: 2011, fuel: "hybrid"}
]
```
