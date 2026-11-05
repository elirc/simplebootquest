---
slug: "ts-data-cities-every-some"
title: "Data: Are all cities under a population (thousands) limit?"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all cities under a population (thousands) limit?

Return `true` if **every** city has `population` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Seoul", population: 6582, avgTemp: 24, continent: "Asia"},
  {id: 2, name: "Hanoi", population: 2932, avgTemp: 6, continent: "Europe"},
  {id: 3, name: "Oslo", population: 7104, avgTemp: 9, continent: "Oceania"},
  {id: 4, name: "Cairo", population: 3899, avgTemp: 13, continent: "Asia"},
  {id: 5, name: "Perth", population: 3730, avgTemp: 13, continent: "Europe"},
  {id: 6, name: "Accra", population: 9097, avgTemp: 7, continent: "Africa"},
  {id: 7, name: "Turin", population: 2479, avgTemp: 15, continent: "Asia"},
  {id: 8, name: "Lisbon", population: 2270, avgTemp: 10, continent: "Asia"}
]
```

Type the parameters and the return value. The interface is already written for you.
