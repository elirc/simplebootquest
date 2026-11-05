---
slug: "js-data-cities-nth"
title: "Data: The n-th city by average temperature"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The n-th city by average temperature

Return the name of the city ranked `n` (1 = highest `avgTemp`), or `null` if `n` is out of range.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Accra", population: 3568, avgTemp: 15, continent: "Africa"},
  {id: 2, name: "Austin", population: 9006, avgTemp: 7, continent: "Asia"},
  {id: 3, name: "Turin", population: 2601, avgTemp: 3, continent: "Asia"},
  {id: 4, name: "Oslo", population: 1973, avgTemp: 9, continent: "Europe"},
  {id: 5, name: "Cairo", population: 2909, avgTemp: 17, continent: "Asia"},
  {id: 6, name: "Hanoi", population: 2650, avgTemp: 7, continent: "Europe"},
  {id: 7, name: "Perth", population: 4395, avgTemp: 13, continent: "Africa"},
  {id: 8, name: "Seoul", population: 4205, avgTemp: 13, continent: "Asia"}
]
```
