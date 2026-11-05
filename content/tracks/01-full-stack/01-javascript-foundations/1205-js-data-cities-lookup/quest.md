---
slug: "js-data-cities-lookup"
title: "Data: Look up a city's average temperature"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Look up a city's average temperature

Return the `avgTemp` of the city whose name is `name`, or `null` if there isn't one.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Seoul", population: 5587, avgTemp: 26, continent: "Europe"},
  {id: 2, name: "Cairo", population: 4881, avgTemp: 23, continent: "Americas"},
  {id: 3, name: "Accra", population: 4069, avgTemp: 10, continent: "Americas"},
  {id: 4, name: "Oslo", population: 4814, avgTemp: 10, continent: "Asia"},
  {id: 5, name: "Quito", population: 1912, avgTemp: 25, continent: "Africa"},
  {id: 6, name: "Austin", population: 7779, avgTemp: 7, continent: "Africa"},
  {id: 7, name: "Lima", population: 8498, avgTemp: 12, continent: "Americas"},
  {id: 8, name: "Lagos", population: 1189, avgTemp: 28, continent: "Americas"}
]
```
