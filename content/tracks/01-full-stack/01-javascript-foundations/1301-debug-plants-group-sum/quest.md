---
slug: "debug-plants-group-sum"
title: "Debug: Total watering interval (days) per light needs"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Total watering interval (days) per light needs

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes counts that are off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return an object mapping each `light` to the **sum** of `waterEveryDays` for plants in it.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Ivy", waterEveryDays: 7, heightCm: 32, light: "low", petSafe: true},
  {id: 2, name: "Aloe", waterEveryDays: 20, heightCm: 73, light: "bright", petSafe: false},
  {id: 3, name: "Monstera", waterEveryDays: 20, heightCm: 127, light: "medium", petSafe: false},
  {id: 4, name: "Basil", waterEveryDays: 15, heightCm: 31, light: "bright", petSafe: false},
  {id: 5, name: "Bonsai", waterEveryDays: 1, heightCm: 109, light: "bright", petSafe: false},
  {id: 6, name: "Mint", waterEveryDays: 11, heightCm: 112, light: "low", petSafe: false},
  {id: 7, name: "Cactus", waterEveryDays: 6, heightCm: 23, light: "low", petSafe: false},
  {id: 8, name: "Fern", waterEveryDays: 17, heightCm: 149, light: "low", petSafe: true}
]
```
