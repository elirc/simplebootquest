---
slug: "js-data-cities-between"
title: "Data: Cities in a population (thousands) range"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Cities in a population (thousands) range

Return the names of cities whose `population` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Austin", population: 3649, avgTemp: 20, continent: "Europe"},
  {id: 2, name: "Oslo", population: 5412, avgTemp: 19, continent: "Oceania"},
  {id: 3, name: "Lisbon", population: 2153, avgTemp: 14, continent: "Africa"},
  {id: 4, name: "Lagos", population: 8902, avgTemp: 11, continent: "Americas"},
  {id: 5, name: "Hanoi", population: 3876, avgTemp: 26, continent: "Asia"},
  {id: 6, name: "Quito", population: 7485, avgTemp: 18, continent: "Africa"},
  {id: 7, name: "Seoul", population: 2173, avgTemp: 21, continent: "Asia"},
  {id: 8, name: "Cairo", population: 2555, avgTemp: 6, continent: "Americas"}
]
```
