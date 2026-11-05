---
slug: "js-data-cities-chain"
title: "Data: Filter, sort, map: cities in one continent"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Filter, sort, map: cities in one continent

Return the names of cities whose `continent` equals `value`, sorted by `population` **highest first**. One chain of array methods is enough.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Lima", population: 5234, avgTemp: 24, continent: "Africa"},
  {id: 2, name: "Accra", population: 1721, avgTemp: 18, continent: "Europe"},
  {id: 3, name: "Hanoi", population: 6306, avgTemp: 10, continent: "Africa"},
  {id: 4, name: "Turin", population: 5858, avgTemp: 26, continent: "Oceania"},
  {id: 5, name: "Austin", population: 3857, avgTemp: 25, continent: "Asia"},
  {id: 6, name: "Seoul", population: 4227, avgTemp: 21, continent: "Europe"},
  {id: 7, name: "Lisbon", population: 5246, avgTemp: 3, continent: "Europe"},
  {id: 8, name: "Cairo", population: 8496, avgTemp: 23, continent: "Asia"}
]
```
