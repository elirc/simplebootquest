---
slug: "js-data-cities-group-count"
title: "Data: How many cities per continent?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# How many cities per continent?

Return an object mapping each `continent` to the number of cities with it. Only include values that appear.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Quito", population: 1933, avgTemp: 27, continent: "Oceania"},
  {id: 2, name: "Austin", population: 7950, avgTemp: 22, continent: "Asia"},
  {id: 3, name: "Lisbon", population: 9481, avgTemp: 9, continent: "Americas"},
  {id: 4, name: "Turin", population: 5059, avgTemp: 17, continent: "Oceania"},
  {id: 5, name: "Oslo", population: 9586, avgTemp: 10, continent: "Oceania"},
  {id: 6, name: "Cairo", population: 4633, avgTemp: 15, continent: "Africa"},
  {id: 7, name: "Lima", population: 4179, avgTemp: 29, continent: "Americas"},
  {id: 8, name: "Seoul", population: 9426, avgTemp: 21, continent: "Asia"}
]
```
