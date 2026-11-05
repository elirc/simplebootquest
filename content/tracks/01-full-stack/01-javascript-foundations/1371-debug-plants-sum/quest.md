---
slug: "debug-plants-sum"
title: "Debug: Total watering interval (days) of all plants"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Total watering interval (days) of all plants

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes a total that is off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the sum of `waterEveryDays` across all plants. An empty list totals 0.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Basil", waterEveryDays: 5, heightCm: 27, light: "medium", petSafe: true},
  {id: 2, name: "Fern", waterEveryDays: 10, heightCm: 33, light: "medium", petSafe: false},
  {id: 3, name: "Snake Plant", waterEveryDays: 16, heightCm: 19, light: "medium", petSafe: true},
  {id: 4, name: "Peace Lily", waterEveryDays: 12, heightCm: 135, light: "medium", petSafe: false},
  {id: 5, name: "Ivy", waterEveryDays: 19, heightCm: 28, light: "bright", petSafe: true},
  {id: 6, name: "Cactus", waterEveryDays: 16, heightCm: 131, light: "low", petSafe: false},
  {id: 7, name: "Bonsai", waterEveryDays: 6, heightCm: 36, light: "medium", petSafe: true},
  {id: 8, name: "Monstera", waterEveryDays: 14, heightCm: 27, light: "low", petSafe: true}
]
```
