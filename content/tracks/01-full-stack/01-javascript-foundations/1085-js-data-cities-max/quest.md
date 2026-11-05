---
slug: "js-data-cities-max"
title: "Data: The city with the highest average temperature"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The city with the highest average temperature

Return the name of the city with the **highest** `avgTemp`. If several tie, return the first. Return `null` for an empty list.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Seoul", population: 3176, avgTemp: 19, continent: "Asia"},
  {id: 2, name: "Oslo", population: 5859, avgTemp: 4, continent: "Americas"},
  {id: 3, name: "Perth", population: 2980, avgTemp: 19, continent: "Asia"},
  {id: 4, name: "Lisbon", population: 1354, avgTemp: 23, continent: "Africa"},
  {id: 5, name: "Austin", population: 3518, avgTemp: 14, continent: "Europe"},
  {id: 6, name: "Accra", population: 8217, avgTemp: 25, continent: "Americas"},
  {id: 7, name: "Quito", population: 9590, avgTemp: 8, continent: "Oceania"},
  {id: 8, name: "Turin", population: 4821, avgTemp: 21, continent: "Asia"}
]
```
