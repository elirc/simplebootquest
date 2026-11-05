---
slug: "debug-cities-above"
title: "Debug: Cities with a population (thousands) above a limit"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Cities with a population (thousands) above a limit

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the name of every city whose `population` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Oslo", population: 3395, avgTemp: 5, continent: "Africa"},
  {id: 2, name: "Quito", population: 7662, avgTemp: 8, continent: "Oceania"},
  {id: 3, name: "Seoul", population: 5769, avgTemp: 26, continent: "Europe"},
  {id: 4, name: "Lisbon", population: 1055, avgTemp: 5, continent: "Europe"},
  {id: 5, name: "Lagos", population: 3002, avgTemp: 5, continent: "Oceania"},
  {id: 6, name: "Lima", population: 6064, avgTemp: 4, continent: "Europe"},
  {id: 7, name: "Accra", population: 1153, avgTemp: 6, continent: "Africa"},
  {id: 8, name: "Cairo", population: 8050, avgTemp: 19, continent: "Asia"}
]
```
