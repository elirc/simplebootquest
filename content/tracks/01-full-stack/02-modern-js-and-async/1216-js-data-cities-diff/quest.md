---
slug: "js-data-cities-diff"
title: "Data: What changed between two snapshots?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What changed between two snapshots?

Given yesterday's and today's cities (same ids), return the ids whose `population` changed, in today's order.

The tests call your function with this data (also available as `BEFORE` / `AFTER` in the tests):

```js
const BEFORE = [
  {id: 1, name: "Lima", population: 2785, avgTemp: 21, continent: "Asia"},
  {id: 2, name: "Lagos", population: 9813, avgTemp: 19, continent: "Europe"},
  {id: 3, name: "Austin", population: 1270, avgTemp: 9, continent: "Europe"},
  {id: 4, name: "Accra", population: 2510, avgTemp: 13, continent: "Americas"},
  {id: 5, name: "Oslo", population: 9441, avgTemp: 17, continent: "Americas"},
  {id: 6, name: "Hanoi", population: 1290, avgTemp: 12, continent: "Americas"},
  {id: 7, name: "Perth", population: 447, avgTemp: 12, continent: "Oceania"},
  {id: 8, name: "Cairo", population: 842, avgTemp: 24, continent: "Asia"}
]
```
