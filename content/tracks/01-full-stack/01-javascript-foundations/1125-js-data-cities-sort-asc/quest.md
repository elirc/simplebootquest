---
slug: "js-data-cities-sort-asc"
title: "Data: Sort cities by average temperature"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["`[...array].sort(...)` copies first, so the original stays untouched.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Sort cities by average temperature

Return the names sorted by `avgTemp` from **lowest to highest**. Ties keep their original order. Don't mutate the input array.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Hanoi", population: 9245, avgTemp: 19, continent: "Oceania"},
  {id: 2, name: "Lisbon", population: 1682, avgTemp: 6, continent: "Oceania"},
  {id: 3, name: "Turin", population: 1019, avgTemp: 20, continent: "Europe"},
  {id: 4, name: "Quito", population: 9423, avgTemp: 22, continent: "Europe"},
  {id: 5, name: "Cairo", population: 6957, avgTemp: 7, continent: "Africa"},
  {id: 6, name: "Lima", population: 6198, avgTemp: 4, continent: "Oceania"},
  {id: 7, name: "Oslo", population: 9098, avgTemp: 29, continent: "Oceania"},
  {id: 8, name: "Austin", population: 2407, avgTemp: 13, continent: "Europe"}
]
```
