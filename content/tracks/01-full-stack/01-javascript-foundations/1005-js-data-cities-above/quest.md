---
slug: "js-data-cities-above"
title: "Data: Cities with a population (thousands) above a limit"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Cities with a population (thousands) above a limit

Return the name of every city whose `population` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Accra", population: 7109, avgTemp: 23, continent: "Asia"},
  {id: 2, name: "Austin", population: 4889, avgTemp: 13, continent: "Americas"},
  {id: 3, name: "Lisbon", population: 348, avgTemp: 17, continent: "Asia"},
  {id: 4, name: "Cairo", population: 2034, avgTemp: 17, continent: "Europe"},
  {id: 5, name: "Seoul", population: 5122, avgTemp: 19, continent: "Oceania"},
  {id: 6, name: "Perth", population: 1673, avgTemp: 23, continent: "Africa"},
  {id: 7, name: "Turin", population: 9299, avgTemp: 24, continent: "Europe"},
  {id: 8, name: "Hanoi", population: 2357, avgTemp: 11, continent: "Africa"}
]
```
