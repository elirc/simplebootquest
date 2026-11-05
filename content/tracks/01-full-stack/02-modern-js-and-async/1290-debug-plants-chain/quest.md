---
slug: "debug-plants-chain"
title: "Debug: Filter, sort, map: plants in one light needs"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Filter, sort, map: plants in one light needs

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes results in the wrong order. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the names of plants whose `light` equals `value`, sorted by `waterEveryDays` **highest first**. One chain of array methods is enough.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Aloe", waterEveryDays: 8, heightCm: 75, light: "bright", petSafe: false},
  {id: 2, name: "Lavender", waterEveryDays: 17, heightCm: 87, light: "medium", petSafe: true},
  {id: 3, name: "Snake Plant", waterEveryDays: 3, heightCm: 26, light: "low", petSafe: true},
  {id: 4, name: "Cactus", waterEveryDays: 9, heightCm: 12, light: "low", petSafe: false},
  {id: 5, name: "Mint", waterEveryDays: 17, heightCm: 125, light: "medium", petSafe: false},
  {id: 6, name: "Orchid", waterEveryDays: 15, heightCm: 134, light: "medium", petSafe: true},
  {id: 7, name: "Fern", waterEveryDays: 4, heightCm: 22, light: "medium", petSafe: false},
  {id: 8, name: "Basil", waterEveryDays: 8, heightCm: 64, light: "medium", petSafe: false}
]
```
