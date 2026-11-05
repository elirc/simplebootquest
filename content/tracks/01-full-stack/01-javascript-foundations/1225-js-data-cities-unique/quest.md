---
slug: "js-data-cities-unique"
title: "Data: Distinct continent values"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Distinct continent values

Return every distinct `continent` that appears, sorted alphabetically.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Accra", population: 1141, avgTemp: 21, continent: "Europe"},
  {id: 2, name: "Cairo", population: 8477, avgTemp: 23, continent: "Africa"},
  {id: 3, name: "Lisbon", population: 7186, avgTemp: 23, continent: "Asia"},
  {id: 4, name: "Turin", population: 8812, avgTemp: 9, continent: "Asia"},
  {id: 5, name: "Hanoi", population: 1993, avgTemp: 25, continent: "Europe"},
  {id: 6, name: "Austin", population: 5961, avgTemp: 26, continent: "Americas"},
  {id: 7, name: "Quito", population: 6709, avgTemp: 3, continent: "Asia"},
  {id: 8, name: "Oslo", population: 1494, avgTemp: 21, continent: "Asia"}
]
```
