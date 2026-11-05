---
slug: "debug-plants-group-count"
title: "Debug: How many plants per light needs?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: How many plants per light needs?

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes counts that are off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return an object mapping each `light` to the number of plants with it. Only include values that appear.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Monstera", waterEveryDays: 7, heightCm: 132, light: "bright", petSafe: false},
  {id: 2, name: "Aloe", waterEveryDays: 7, heightCm: 156, light: "low", petSafe: false},
  {id: 3, name: "Orchid", waterEveryDays: 12, heightCm: 10, light: "bright", petSafe: true},
  {id: 4, name: "Cactus", waterEveryDays: 16, heightCm: 147, light: "medium", petSafe: true},
  {id: 5, name: "Basil", waterEveryDays: 18, heightCm: 92, light: "bright", petSafe: false},
  {id: 6, name: "Ivy", waterEveryDays: 10, heightCm: 10, light: "medium", petSafe: true},
  {id: 7, name: "Snake Plant", waterEveryDays: 14, heightCm: 21, light: "bright", petSafe: false},
  {id: 8, name: "Peace Lily", waterEveryDays: 14, heightCm: 143, light: "medium", petSafe: false}
]
```
