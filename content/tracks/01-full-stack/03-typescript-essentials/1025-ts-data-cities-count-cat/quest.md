---
slug: "ts-data-cities-count-cat"
title: "Data: Count cities by continent"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Count cities by continent

Return how many cities have `continent` equal to `value`.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Quito", population: 9751, avgTemp: 11, continent: "Americas"},
  {id: 2, name: "Austin", population: 4362, avgTemp: 11, continent: "Americas"},
  {id: 3, name: "Lagos", population: 3704, avgTemp: 12, continent: "Asia"},
  {id: 4, name: "Hanoi", population: 6006, avgTemp: 6, continent: "Americas"},
  {id: 5, name: "Turin", population: 9480, avgTemp: 7, continent: "Americas"},
  {id: 6, name: "Cairo", population: 3509, avgTemp: 25, continent: "Asia"},
  {id: 7, name: "Seoul", population: 6894, avgTemp: 15, continent: "Americas"},
  {id: 8, name: "Oslo", population: 4028, avgTemp: 8, continent: "Africa"}
]
```

Type the parameters and the return value. The interface is already written for you.
