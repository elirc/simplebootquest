---
slug: "debug-cities-chain"
title: "Debug: Filter, sort, map: cities in one continent"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Filter, sort, map: cities in one continent

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes results in the wrong order. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the names of cities whose `continent` equals `value`, sorted by `avgTemp` **highest first**. One chain of array methods is enough.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Lisbon", population: 9302, avgTemp: 20, continent: "Asia"},
  {id: 2, name: "Lima", population: 6456, avgTemp: 13, continent: "Africa"},
  {id: 3, name: "Austin", population: 7812, avgTemp: 3, continent: "Africa"},
  {id: 4, name: "Cairo", population: 479, avgTemp: 6, continent: "Oceania"},
  {id: 5, name: "Quito", population: 5439, avgTemp: 22, continent: "Europe"},
  {id: 6, name: "Accra", population: 8823, avgTemp: 29, continent: "Americas"},
  {id: 7, name: "Perth", population: 4335, avgTemp: 2, continent: "Africa"},
  {id: 8, name: "Seoul", population: 5996, avgTemp: 24, continent: "Americas"}
]
```
