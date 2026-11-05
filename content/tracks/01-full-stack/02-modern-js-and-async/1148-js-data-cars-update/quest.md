---
slug: "js-data-cars-update"
title: "Data: Update cars immutably"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Spread to copy: `{ ...x, field: newValue }`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Update cars immutably

Return a **new** array where every car with `fuel` equal to `value` has `year` increased by `amount`. Other cars are unchanged. **Don't mutate** the input objects (React state depends on this).

The tests call your function with this data (also available as `CARS` in the tests):

```js
const CARS = [
  {id: 1, model: "Polo", priceK: 18, km: 11280, year: 2009, fuel: "petrol"},
  {id: 2, model: "Fiesta", priceK: 47, km: 25383, year: 2011, fuel: "electric"},
  {id: 3, model: "Golf", priceK: 41, km: 46113, year: 2013, fuel: "hybrid"},
  {id: 4, model: "Mustang", priceK: 15, km: 179871, year: 2016, fuel: "electric"},
  {id: 5, model: "Prius", priceK: 41, km: 16568, year: 2019, fuel: "hybrid"},
  {id: 6, model: "Leaf", priceK: 30, km: 171262, year: 2014, fuel: "petrol"},
  {id: 7, model: "Corolla", priceK: 50, km: 128253, year: 2018, fuel: "electric"},
  {id: 8, model: "Clio", priceK: 18, km: 168676, year: 2009, fuel: "diesel"}
]
```
