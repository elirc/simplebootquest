---
slug: "debug-plants-avg-per"
title: "Debug: Average height (cm) per light needs"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Average height (cm) per light needs

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes wrong rounding. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return an object mapping each `light` to the average `heightCm` of its plants, rounded to a whole number.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Basil", waterEveryDays: 14, heightCm: 137, light: "low", petSafe: true},
  {id: 2, name: "Mint", waterEveryDays: 15, heightCm: 53, light: "medium", petSafe: true},
  {id: 3, name: "Orchid", waterEveryDays: 10, heightCm: 95, light: "medium", petSafe: true},
  {id: 4, name: "Lavender", waterEveryDays: 9, heightCm: 110, light: "low", petSafe: true},
  {id: 5, name: "Fern", waterEveryDays: 1, heightCm: 134, light: "bright", petSafe: false},
  {id: 6, name: "Monstera", waterEveryDays: 5, heightCm: 84, light: "low", petSafe: false},
  {id: 7, name: "Snake Plant", waterEveryDays: 4, heightCm: 155, light: "low", petSafe: false},
  {id: 8, name: "Peace Lily", waterEveryDays: 8, heightCm: 112, light: "medium", petSafe: true}
]
```
