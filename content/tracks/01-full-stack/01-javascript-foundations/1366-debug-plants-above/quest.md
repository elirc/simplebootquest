---
slug: "debug-plants-above"
title: "Debug: Plants with a height (cm) above a limit"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Plants with a height (cm) above a limit

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the name of every plant whose `heightCm` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Bonsai", waterEveryDays: 12, heightCm: 82, light: "medium", petSafe: true},
  {id: 2, name: "Peace Lily", waterEveryDays: 3, heightCm: 8, light: "low", petSafe: false},
  {id: 3, name: "Ivy", waterEveryDays: 11, heightCm: 33, light: "bright", petSafe: false},
  {id: 4, name: "Aloe", waterEveryDays: 10, heightCm: 65, light: "bright", petSafe: false},
  {id: 5, name: "Snake Plant", waterEveryDays: 8, heightCm: 98, light: "bright", petSafe: false},
  {id: 6, name: "Monstera", waterEveryDays: 12, heightCm: 45, light: "low", petSafe: true},
  {id: 7, name: "Mint", waterEveryDays: 18, heightCm: 61, light: "medium", petSafe: false},
  {id: 8, name: "Orchid", waterEveryDays: 5, heightCm: 88, light: "medium", petSafe: false}
]
```
