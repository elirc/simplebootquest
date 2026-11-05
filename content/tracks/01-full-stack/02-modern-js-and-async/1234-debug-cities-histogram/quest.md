---
slug: "debug-cities-histogram"
title: "Debug: Bucket cities by population (thousands)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Bucket cities by population (thousands)

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes counts that are off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Group cities into buckets of width `width` by `population`: the bucket key is `Math.floor(value / width) * width`. Return an object of bucket → count.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Oslo", population: 5065, avgTemp: 23, continent: "Americas"},
  {id: 2, name: "Cairo", population: 3044, avgTemp: 18, continent: "Asia"},
  {id: 3, name: "Lagos", population: 8419, avgTemp: 13, continent: "Americas"},
  {id: 4, name: "Turin", population: 2814, avgTemp: 27, continent: "Asia"},
  {id: 5, name: "Lima", population: 711, avgTemp: 14, continent: "Africa"},
  {id: 6, name: "Accra", population: 8353, avgTemp: 26, continent: "Oceania"},
  {id: 7, name: "Lisbon", population: 9075, avgTemp: 22, continent: "Europe"},
  {id: 8, name: "Perth", population: 759, avgTemp: 27, continent: "Europe"}
]
```
