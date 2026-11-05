---
slug: "debug-plants-percent"
title: "Debug: What share of plants are pet safe?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: What share of plants are pet safe?

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the percentage (0–100, rounded to a whole number) of plants where `petSafe` is true. Return 0 for an empty list.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Peace Lily", waterEveryDays: 20, heightCm: 84, light: "bright", petSafe: false},
  {id: 2, name: "Bonsai", waterEveryDays: 17, heightCm: 88, light: "bright", petSafe: true},
  {id: 3, name: "Cactus", waterEveryDays: 12, heightCm: 42, light: "medium", petSafe: false},
  {id: 4, name: "Aloe", waterEveryDays: 9, heightCm: 43, light: "low", petSafe: true},
  {id: 5, name: "Basil", waterEveryDays: 2, heightCm: 136, light: "low", petSafe: false},
  {id: 6, name: "Fern", waterEveryDays: 2, heightCm: 109, light: "medium", petSafe: false},
  {id: 7, name: "Ivy", waterEveryDays: 4, heightCm: 107, light: "low", petSafe: false},
  {id: 8, name: "Orchid", waterEveryDays: 20, heightCm: 137, light: "medium", petSafe: false}
]
```
