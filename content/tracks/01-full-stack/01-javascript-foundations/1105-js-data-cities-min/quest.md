---
slug: "js-data-cities-min"
title: "Data: The city with the lowest average temperature"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The city with the lowest average temperature

Return the name of the city with the **lowest** `avgTemp` (first one on ties), or `null` for an empty list.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Accra", population: 2498, avgTemp: 16, continent: "Europe"},
  {id: 2, name: "Lagos", population: 479, avgTemp: 15, continent: "Europe"},
  {id: 3, name: "Cairo", population: 620, avgTemp: 29, continent: "Asia"},
  {id: 4, name: "Quito", population: 3611, avgTemp: 17, continent: "Oceania"},
  {id: 5, name: "Lima", population: 1271, avgTemp: 12, continent: "Europe"},
  {id: 6, name: "Perth", population: 4779, avgTemp: 24, continent: "Oceania"},
  {id: 7, name: "Seoul", population: 6464, avgTemp: 13, continent: "Oceania"},
  {id: 8, name: "Hanoi", population: 4981, avgTemp: 29, continent: "Africa"}
]
```
