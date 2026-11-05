---
slug: "debug-cities-group-count"
title: "Debug: How many cities per continent?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: How many cities per continent?

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes counts that are off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return an object mapping each `continent` to the number of cities with it. Only include values that appear.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Turin", population: 4931, avgTemp: 26, continent: "Asia"},
  {id: 2, name: "Austin", population: 7433, avgTemp: 15, continent: "Oceania"},
  {id: 3, name: "Accra", population: 4899, avgTemp: 8, continent: "Americas"},
  {id: 4, name: "Lima", population: 871, avgTemp: 21, continent: "Oceania"},
  {id: 5, name: "Oslo", population: 3526, avgTemp: 9, continent: "Oceania"},
  {id: 6, name: "Perth", population: 9639, avgTemp: 22, continent: "Oceania"},
  {id: 7, name: "Seoul", population: 3083, avgTemp: 22, continent: "Europe"},
  {id: 8, name: "Quito", population: 6427, avgTemp: 13, continent: "Africa"}
]
```
