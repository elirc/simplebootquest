---
slug: "ts-data-cities-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `name` and `avgTemp` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Quito", population: 9171, avgTemp: 7, continent: "Europe"},
  {id: 2, name: "Perth", population: 1226, avgTemp: 20, continent: "Africa"},
  {id: 3, name: "Seoul", population: 6231, avgTemp: 7, continent: "Europe"},
  {id: 4, name: "Oslo", population: 7957, avgTemp: 25, continent: "Oceania"},
  {id: 5, name: "Lagos", population: 3981, avgTemp: 24, continent: "Africa"},
  {id: 6, name: "Accra", population: 8308, avgTemp: 24, continent: "Oceania"},
  {id: 7, name: "Hanoi", population: 5574, avgTemp: 27, continent: "Americas"},
  {id: 8, name: "Cairo", population: 4655, avgTemp: 18, continent: "Asia"}
]
```

Type the parameters and the return value. The interface is already written for you.
