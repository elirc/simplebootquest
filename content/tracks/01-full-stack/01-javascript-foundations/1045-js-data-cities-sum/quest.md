---
slug: "js-data-cities-sum"
title: "Data: Total average temperature of all cities"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total average temperature of all cities

Return the sum of `avgTemp` across all cities. An empty list totals 0.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Seoul", population: 9007, avgTemp: 28, continent: "Europe"},
  {id: 2, name: "Cairo", population: 3168, avgTemp: 24, continent: "Europe"},
  {id: 3, name: "Austin", population: 2882, avgTemp: 8, continent: "Oceania"},
  {id: 4, name: "Lisbon", population: 2308, avgTemp: 28, continent: "Asia"},
  {id: 5, name: "Accra", population: 5907, avgTemp: 27, continent: "Europe"},
  {id: 6, name: "Perth", population: 9461, avgTemp: 28, continent: "Europe"},
  {id: 7, name: "Hanoi", population: 6305, avgTemp: 19, continent: "Americas"},
  {id: 8, name: "Turin", population: 7131, avgTemp: 7, continent: "Europe"}
]
```
