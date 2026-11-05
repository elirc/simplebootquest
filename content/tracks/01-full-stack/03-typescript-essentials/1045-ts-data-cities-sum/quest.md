---
slug: "ts-data-cities-sum"
title: "Data: Total average temperature of all cities"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total average temperature of all cities

Return the sum of `avgTemp` across all cities. An empty list totals 0.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Lisbon", population: 7659, avgTemp: 14, continent: "Americas"},
  {id: 2, name: "Quito", population: 8638, avgTemp: 4, continent: "Africa"},
  {id: 3, name: "Oslo", population: 5164, avgTemp: 9, continent: "Africa"},
  {id: 4, name: "Cairo", population: 961, avgTemp: 14, continent: "Asia"},
  {id: 5, name: "Lagos", population: 8362, avgTemp: 3, continent: "Americas"},
  {id: 6, name: "Accra", population: 2248, avgTemp: 11, continent: "Europe"},
  {id: 7, name: "Perth", population: 9347, avgTemp: 10, continent: "Asia"},
  {id: 8, name: "Hanoi", population: 9108, avgTemp: 15, continent: "Americas"}
]
```

Type the parameters and the return value. The interface is already written for you.
