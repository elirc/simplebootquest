---
slug: "ts-data-cities-average"
title: "Data: Average average temperature"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average average temperature

Return the average `avgTemp` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Turin", population: 7363, avgTemp: 16, continent: "Oceania"},
  {id: 2, name: "Accra", population: 1784, avgTemp: 11, continent: "Asia"},
  {id: 3, name: "Hanoi", population: 6659, avgTemp: 15, continent: "Africa"},
  {id: 4, name: "Quito", population: 2084, avgTemp: 5, continent: "Europe"},
  {id: 5, name: "Lima", population: 7280, avgTemp: 2, continent: "Americas"},
  {id: 6, name: "Oslo", population: 1427, avgTemp: 9, continent: "Africa"},
  {id: 7, name: "Lisbon", population: 6280, avgTemp: 2, continent: "Europe"},
  {id: 8, name: "Cairo", population: 9123, avgTemp: 14, continent: "Americas"}
]
```

Type the parameters and the return value. The interface is already written for you.
