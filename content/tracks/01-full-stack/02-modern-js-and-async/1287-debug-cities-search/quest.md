---
slug: "debug-cities-search"
title: "Debug: Search cities by name"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Search cities by name

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes case-sensitivity. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the names that **contain** `query`, ignoring case. An empty (or whitespace-only) query returns every name.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Accra", population: 9758, avgTemp: 20, continent: "Africa"},
  {id: 2, name: "Lagos", population: 9132, avgTemp: 26, continent: "Oceania"},
  {id: 3, name: "Cairo", population: 3082, avgTemp: 8, continent: "Europe"},
  {id: 4, name: "Turin", population: 4966, avgTemp: 6, continent: "Europe"},
  {id: 5, name: "Hanoi", population: 5339, avgTemp: 25, continent: "Oceania"},
  {id: 6, name: "Austin", population: 4444, avgTemp: 12, continent: "Americas"},
  {id: 7, name: "Seoul", population: 8580, avgTemp: 21, continent: "Oceania"},
  {id: 8, name: "Oslo", population: 9206, avgTemp: 27, continent: "Asia"}
]
```
