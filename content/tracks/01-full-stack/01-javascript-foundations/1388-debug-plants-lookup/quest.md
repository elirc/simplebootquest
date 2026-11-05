---
slug: "debug-plants-lookup"
title: "Debug: Look up a plant's watering interval (days)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Look up a plant's watering interval (days)

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the `waterEveryDays` of the plant whose name is `name`, or `null` if there isn't one.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Fern", waterEveryDays: 11, heightCm: 20, light: "low", petSafe: false},
  {id: 2, name: "Orchid", waterEveryDays: 5, heightCm: 109, light: "bright", petSafe: true},
  {id: 3, name: "Peace Lily", waterEveryDays: 9, heightCm: 6, light: "medium", petSafe: false},
  {id: 4, name: "Snake Plant", waterEveryDays: 18, heightCm: 69, light: "medium", petSafe: true},
  {id: 5, name: "Mint", waterEveryDays: 2, heightCm: 76, light: "bright", petSafe: false},
  {id: 6, name: "Bonsai", waterEveryDays: 3, heightCm: 7, light: "low", petSafe: false},
  {id: 7, name: "Cactus", waterEveryDays: 2, heightCm: 62, light: "low", petSafe: true},
  {id: 8, name: "Ivy", waterEveryDays: 13, heightCm: 152, light: "bright", petSafe: true}
]
```
