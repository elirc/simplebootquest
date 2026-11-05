---
slug: "js-data-cities-count-cat"
title: "Data: Count cities by continent"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Count cities by continent

Return how many cities have `continent` equal to `value`.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Hanoi", population: 2263, avgTemp: 24, continent: "Europe"},
  {id: 2, name: "Lisbon", population: 9334, avgTemp: 28, continent: "Africa"},
  {id: 3, name: "Turin", population: 5339, avgTemp: 11, continent: "Americas"},
  {id: 4, name: "Perth", population: 3616, avgTemp: 15, continent: "Europe"},
  {id: 5, name: "Accra", population: 1235, avgTemp: 19, continent: "Europe"},
  {id: 6, name: "Seoul", population: 2248, avgTemp: 8, continent: "Asia"},
  {id: 7, name: "Cairo", population: 2112, avgTemp: 21, continent: "Europe"},
  {id: 8, name: "Oslo", population: 3317, avgTemp: 3, continent: "Americas"}
]
```
