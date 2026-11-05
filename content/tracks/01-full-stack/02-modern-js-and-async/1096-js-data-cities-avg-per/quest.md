---
slug: "js-data-cities-avg-per"
title: "Data: Average population (thousands) per continent"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average population (thousands) per continent

Return an object mapping each `continent` to the average `population` of its cities, rounded to a whole number.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Seoul", population: 931, avgTemp: 20, continent: "Europe"},
  {id: 2, name: "Turin", population: 1049, avgTemp: 10, continent: "Europe"},
  {id: 3, name: "Quito", population: 7711, avgTemp: 18, continent: "Africa"},
  {id: 4, name: "Hanoi", population: 5198, avgTemp: 26, continent: "Europe"},
  {id: 5, name: "Perth", population: 7645, avgTemp: 8, continent: "Oceania"},
  {id: 6, name: "Lisbon", population: 6674, avgTemp: 14, continent: "Americas"},
  {id: 7, name: "Cairo", population: 3927, avgTemp: 7, continent: "Asia"},
  {id: 8, name: "Oslo", population: 3547, avgTemp: 9, continent: "Europe"}
]
```
