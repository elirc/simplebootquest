---
slug: "ts-data-cities-between"
title: "Data: Cities in a population (thousands) range"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Cities in a population (thousands) range

Return the names of cities whose `population` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Oslo", population: 468, avgTemp: 29, continent: "Europe"},
  {id: 2, name: "Quito", population: 5351, avgTemp: 5, continent: "Africa"},
  {id: 3, name: "Turin", population: 3225, avgTemp: 20, continent: "Europe"},
  {id: 4, name: "Accra", population: 2431, avgTemp: 16, continent: "Africa"},
  {id: 5, name: "Hanoi", population: 659, avgTemp: 4, continent: "Americas"},
  {id: 6, name: "Austin", population: 1846, avgTemp: 15, continent: "Oceania"},
  {id: 7, name: "Perth", population: 2352, avgTemp: 3, continent: "Europe"},
  {id: 8, name: "Seoul", population: 4126, avgTemp: 8, continent: "Africa"}
]
```

Type the parameters and the return value. The interface is already written for you.
