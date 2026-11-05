---
slug: "debug-plants-sort-asc"
title: "Debug: Sort plants by watering interval (days)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Sort plants by watering interval (days)

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes results in the wrong order. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the names sorted by `waterEveryDays` from **lowest to highest**. Ties keep their original order. Don't mutate the input array.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Aloe", waterEveryDays: 4, heightCm: 113, light: "medium", petSafe: false},
  {id: 2, name: "Fern", waterEveryDays: 1, heightCm: 149, light: "low", petSafe: true},
  {id: 3, name: "Ivy", waterEveryDays: 3, heightCm: 108, light: "low", petSafe: false},
  {id: 4, name: "Snake Plant", waterEveryDays: 9, heightCm: 43, light: "low", petSafe: true},
  {id: 5, name: "Cactus", waterEveryDays: 13, heightCm: 101, light: "medium", petSafe: true},
  {id: 6, name: "Lavender", waterEveryDays: 17, heightCm: 32, light: "bright", petSafe: true},
  {id: 7, name: "Bonsai", waterEveryDays: 3, heightCm: 125, light: "medium", petSafe: false},
  {id: 8, name: "Basil", waterEveryDays: 10, heightCm: 63, light: "low", petSafe: false}
]
```
