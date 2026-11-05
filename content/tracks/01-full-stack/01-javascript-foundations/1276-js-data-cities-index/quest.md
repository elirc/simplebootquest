---
slug: "js-data-cities-index"
title: "Data: Index cities by id"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Index cities by id

Return an object mapping each `id` to the city's name, for fast lookups.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Perth", population: 300, avgTemp: 24, continent: "Americas"},
  {id: 2, name: "Quito", population: 7692, avgTemp: 13, continent: "Europe"},
  {id: 3, name: "Lima", population: 1183, avgTemp: 17, continent: "Asia"},
  {id: 4, name: "Oslo", population: 5964, avgTemp: 17, continent: "Americas"},
  {id: 5, name: "Accra", population: 3141, avgTemp: 12, continent: "Americas"},
  {id: 6, name: "Cairo", population: 9634, avgTemp: 18, continent: "Asia"},
  {id: 7, name: "Lagos", population: 8046, avgTemp: 23, continent: "Europe"},
  {id: 8, name: "Lisbon", population: 8506, avgTemp: 28, continent: "Asia"}
]
```
