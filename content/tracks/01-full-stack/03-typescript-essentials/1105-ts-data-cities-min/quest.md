---
slug: "ts-data-cities-min"
title: "Data: The city with the lowest population (thousands)"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The city with the lowest population (thousands)

Return the name of the city with the **lowest** `population` (first one on ties), or `null` for an empty list.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Cairo", population: 8800, avgTemp: 11, continent: "Oceania"},
  {id: 2, name: "Perth", population: 7963, avgTemp: 17, continent: "Oceania"},
  {id: 3, name: "Hanoi", population: 3586, avgTemp: 26, continent: "Europe"},
  {id: 4, name: "Seoul", population: 9248, avgTemp: 14, continent: "Oceania"},
  {id: 5, name: "Accra", population: 5777, avgTemp: 15, continent: "Africa"},
  {id: 6, name: "Oslo", population: 5514, avgTemp: 20, continent: "Oceania"},
  {id: 7, name: "Turin", population: 3215, avgTemp: 14, continent: "Oceania"},
  {id: 8, name: "Lisbon", population: 8952, avgTemp: 3, continent: "Asia"}
]
```

Type the parameters and the return value. The interface is already written for you.
