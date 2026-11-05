---
slug: "js-data-cities-every-some"
title: "Data: Are all cities under a population (thousands) limit?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all cities under a population (thousands) limit?

Return `true` if **every** city has `population` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Quito", population: 5136, avgTemp: 6, continent: "Americas"},
  {id: 2, name: "Seoul", population: 8471, avgTemp: 16, continent: "Asia"},
  {id: 3, name: "Lima", population: 7924, avgTemp: 27, continent: "Americas"},
  {id: 4, name: "Accra", population: 2679, avgTemp: 17, continent: "Asia"},
  {id: 5, name: "Austin", population: 4531, avgTemp: 8, continent: "Africa"},
  {id: 6, name: "Lagos", population: 2522, avgTemp: 15, continent: "Europe"},
  {id: 7, name: "Oslo", population: 4786, avgTemp: 25, continent: "Americas"},
  {id: 8, name: "Turin", population: 7710, avgTemp: 22, continent: "Americas"}
]
```
