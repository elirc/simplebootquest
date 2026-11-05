---
slug: "debug-cities-group-sum"
title: "Debug: Total population (thousands) per continent"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Total population (thousands) per continent

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes counts that are off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return an object mapping each `continent` to the **sum** of `population` for cities in it.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Accra", population: 557, avgTemp: 5, continent: "Oceania"},
  {id: 2, name: "Oslo", population: 6316, avgTemp: 16, continent: "Oceania"},
  {id: 3, name: "Cairo", population: 8549, avgTemp: 18, continent: "Americas"},
  {id: 4, name: "Turin", population: 8603, avgTemp: 27, continent: "Europe"},
  {id: 5, name: "Hanoi", population: 4731, avgTemp: 28, continent: "Africa"},
  {id: 6, name: "Perth", population: 1812, avgTemp: 15, continent: "Americas"},
  {id: 7, name: "Seoul", population: 8590, avgTemp: 12, continent: "Oceania"},
  {id: 8, name: "Lagos", population: 2288, avgTemp: 15, continent: "Oceania"}
]
```
