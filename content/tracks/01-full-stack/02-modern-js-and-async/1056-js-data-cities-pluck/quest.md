---
slug: "js-data-cities-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `name` and `avgTemp` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Lima", population: 6949, avgTemp: 9, continent: "Africa"},
  {id: 2, name: "Perth", population: 5386, avgTemp: 7, continent: "Africa"},
  {id: 3, name: "Lagos", population: 5388, avgTemp: 26, continent: "Europe"},
  {id: 4, name: "Seoul", population: 7986, avgTemp: 7, continent: "Oceania"},
  {id: 5, name: "Quito", population: 1905, avgTemp: 9, continent: "Asia"},
  {id: 6, name: "Accra", population: 6032, avgTemp: 14, continent: "Africa"},
  {id: 7, name: "Cairo", population: 9595, avgTemp: 4, continent: "Africa"},
  {id: 8, name: "Austin", population: 665, avgTemp: 21, continent: "Asia"}
]
```
