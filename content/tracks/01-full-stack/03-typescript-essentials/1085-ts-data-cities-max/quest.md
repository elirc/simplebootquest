---
slug: "ts-data-cities-max"
title: "Data: The city with the highest average temperature"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The city with the highest average temperature

Return the name of the city with the **highest** `avgTemp`. If several tie, return the first. Return `null` for an empty list.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Turin", population: 9044, avgTemp: 15, continent: "Africa"},
  {id: 2, name: "Oslo", population: 7901, avgTemp: 20, continent: "Americas"},
  {id: 3, name: "Lagos", population: 5351, avgTemp: 22, continent: "Africa"},
  {id: 4, name: "Hanoi", population: 6243, avgTemp: 7, continent: "Europe"},
  {id: 5, name: "Seoul", population: 8025, avgTemp: 6, continent: "Oceania"},
  {id: 6, name: "Lisbon", population: 7851, avgTemp: 25, continent: "Europe"},
  {id: 7, name: "Cairo", population: 7691, avgTemp: 9, continent: "Asia"},
  {id: 8, name: "Quito", population: 1328, avgTemp: 19, continent: "Asia"}
]
```

Type the parameters and the return value. The interface is already written for you.
