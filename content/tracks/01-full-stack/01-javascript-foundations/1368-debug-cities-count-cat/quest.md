---
slug: "debug-cities-count-cat"
title: "Debug: Count cities by continent"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Count cities by continent

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return how many cities have `continent` equal to `value`.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Turin", population: 4769, avgTemp: 22, continent: "Americas"},
  {id: 2, name: "Accra", population: 2196, avgTemp: 18, continent: "Europe"},
  {id: 3, name: "Perth", population: 301, avgTemp: 24, continent: "Oceania"},
  {id: 4, name: "Lima", population: 7708, avgTemp: 24, continent: "Europe"},
  {id: 5, name: "Lagos", population: 7173, avgTemp: 8, continent: "Europe"},
  {id: 6, name: "Quito", population: 6397, avgTemp: 12, continent: "Africa"},
  {id: 7, name: "Cairo", population: 410, avgTemp: 10, continent: "Americas"},
  {id: 8, name: "Seoul", population: 7929, avgTemp: 15, continent: "Europe"}
]
```
