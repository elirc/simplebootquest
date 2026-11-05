---
slug: "debug-cities-lookup"
title: "Debug: Look up a city's average temperature"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Look up a city's average temperature

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the `avgTemp` of the city whose name is `name`, or `null` if there isn't one.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Lagos", population: 7237, avgTemp: 2, continent: "Europe"},
  {id: 2, name: "Hanoi", population: 1699, avgTemp: 28, continent: "Oceania"},
  {id: 3, name: "Lima", population: 6698, avgTemp: 11, continent: "Oceania"},
  {id: 4, name: "Quito", population: 9074, avgTemp: 8, continent: "Americas"},
  {id: 5, name: "Perth", population: 3791, avgTemp: 6, continent: "Europe"},
  {id: 6, name: "Accra", population: 8878, avgTemp: 6, continent: "Africa"},
  {id: 7, name: "Oslo", population: 1503, avgTemp: 23, continent: "Europe"},
  {id: 8, name: "Cairo", population: 1520, avgTemp: 14, continent: "Oceania"}
]
```
