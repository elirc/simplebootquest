---
slug: "js-data-cities-top-n"
title: "Data: Top cities by population (thousands)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Top cities by population (thousands)

Return the names of the `n` cities with the **highest** `population`, highest first. Don't mutate the input.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Seoul", population: 8971, avgTemp: 16, continent: "Oceania"},
  {id: 2, name: "Accra", population: 4901, avgTemp: 9, continent: "Europe"},
  {id: 3, name: "Quito", population: 5956, avgTemp: 3, continent: "Asia"},
  {id: 4, name: "Austin", population: 6761, avgTemp: 11, continent: "Oceania"},
  {id: 5, name: "Oslo", population: 996, avgTemp: 28, continent: "Americas"},
  {id: 6, name: "Lima", population: 6038, avgTemp: 27, continent: "Oceania"},
  {id: 7, name: "Turin", population: 4471, avgTemp: 25, continent: "Africa"},
  {id: 8, name: "Cairo", population: 1524, avgTemp: 13, continent: "Oceania"}
]
```
