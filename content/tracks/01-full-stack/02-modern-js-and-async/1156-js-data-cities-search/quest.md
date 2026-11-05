---
slug: "js-data-cities-search"
title: "Data: Search cities by name"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Search cities by name

Return the names that **contain** `query`, ignoring case. An empty (or whitespace-only) query returns every name.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Quito", population: 1553, avgTemp: 18, continent: "Europe"},
  {id: 2, name: "Seoul", population: 3421, avgTemp: 2, continent: "Americas"},
  {id: 3, name: "Hanoi", population: 1836, avgTemp: 15, continent: "Europe"},
  {id: 4, name: "Accra", population: 634, avgTemp: 16, continent: "Americas"},
  {id: 5, name: "Austin", population: 8380, avgTemp: 21, continent: "Oceania"},
  {id: 6, name: "Turin", population: 4223, avgTemp: 5, continent: "Asia"},
  {id: 7, name: "Cairo", population: 2832, avgTemp: 27, continent: "Americas"},
  {id: 8, name: "Lima", population: 4753, avgTemp: 26, continent: "Americas"}
]
```
