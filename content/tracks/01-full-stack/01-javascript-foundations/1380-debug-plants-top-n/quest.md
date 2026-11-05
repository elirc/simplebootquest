---
slug: "debug-plants-top-n"
title: "Debug: Top plants by watering interval (days)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Top plants by watering interval (days)

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes results in the wrong order. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the names of the `n` plants with the **highest** `waterEveryDays`, highest first. Don't mutate the input.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Basil", waterEveryDays: 8, heightCm: 22, light: "low", petSafe: true},
  {id: 2, name: "Aloe", waterEveryDays: 19, heightCm: 131, light: "bright", petSafe: true},
  {id: 3, name: "Cactus", waterEveryDays: 15, heightCm: 30, light: "medium", petSafe: false},
  {id: 4, name: "Peace Lily", waterEveryDays: 3, heightCm: 109, light: "low", petSafe: true},
  {id: 5, name: "Mint", waterEveryDays: 4, heightCm: 151, light: "bright", petSafe: false},
  {id: 6, name: "Monstera", waterEveryDays: 15, heightCm: 40, light: "bright", petSafe: true},
  {id: 7, name: "Lavender", waterEveryDays: 15, heightCm: 118, light: "medium", petSafe: false},
  {id: 8, name: "Snake Plant", waterEveryDays: 13, heightCm: 26, light: "low", petSafe: true}
]
```
