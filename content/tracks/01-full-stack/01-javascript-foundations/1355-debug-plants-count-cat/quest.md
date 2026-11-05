---
slug: "debug-plants-count-cat"
title: "Debug: Count plants by light needs"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Count plants by light needs

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return how many plants have `light` equal to `value`.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Ivy", waterEveryDays: 20, heightCm: 29, light: "medium", petSafe: false},
  {id: 2, name: "Snake Plant", waterEveryDays: 5, heightCm: 74, light: "bright", petSafe: true},
  {id: 3, name: "Bonsai", waterEveryDays: 10, heightCm: 80, light: "bright", petSafe: false},
  {id: 4, name: "Basil", waterEveryDays: 21, heightCm: 92, light: "bright", petSafe: true},
  {id: 5, name: "Orchid", waterEveryDays: 4, heightCm: 80, light: "low", petSafe: true},
  {id: 6, name: "Lavender", waterEveryDays: 16, heightCm: 19, light: "bright", petSafe: false},
  {id: 7, name: "Cactus", waterEveryDays: 3, heightCm: 127, light: "bright", petSafe: false},
  {id: 8, name: "Mint", waterEveryDays: 13, heightCm: 32, light: "medium", petSafe: true}
]
```
