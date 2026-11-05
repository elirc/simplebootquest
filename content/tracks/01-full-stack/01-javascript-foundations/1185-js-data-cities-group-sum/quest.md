---
slug: "js-data-cities-group-sum"
title: "Data: Total population (thousands) per continent"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total population (thousands) per continent

Return an object mapping each `continent` to the **sum** of `population` for cities in it.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Cairo", population: 5690, avgTemp: 19, continent: "Oceania"},
  {id: 2, name: "Lisbon", population: 3927, avgTemp: 16, continent: "Europe"},
  {id: 3, name: "Quito", population: 3676, avgTemp: 20, continent: "Asia"},
  {id: 4, name: "Accra", population: 7087, avgTemp: 11, continent: "Oceania"},
  {id: 5, name: "Lima", population: 4296, avgTemp: 13, continent: "Asia"},
  {id: 6, name: "Perth", population: 3953, avgTemp: 21, continent: "Asia"},
  {id: 7, name: "Lagos", population: 6694, avgTemp: 27, continent: "Africa"},
  {id: 8, name: "Hanoi", population: 6866, avgTemp: 17, continent: "Oceania"}
]
```
