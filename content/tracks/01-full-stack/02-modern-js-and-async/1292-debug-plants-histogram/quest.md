---
slug: "debug-plants-histogram"
title: "Debug: Bucket plants by height (cm)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Bucket plants by height (cm)

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes counts that are off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Group plants into buckets of width `width` by `heightCm`: the bucket key is `Math.floor(value / width) * width`. Return an object of bucket → count.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Snake Plant", waterEveryDays: 9, heightCm: 100, light: "medium", petSafe: true},
  {id: 2, name: "Ivy", waterEveryDays: 8, heightCm: 25, light: "bright", petSafe: true},
  {id: 3, name: "Cactus", waterEveryDays: 7, heightCm: 146, light: "bright", petSafe: true},
  {id: 4, name: "Peace Lily", waterEveryDays: 12, heightCm: 8, light: "low", petSafe: true},
  {id: 5, name: "Monstera", waterEveryDays: 10, heightCm: 66, light: "bright", petSafe: true},
  {id: 6, name: "Bonsai", waterEveryDays: 16, heightCm: 81, light: "low", petSafe: true},
  {id: 7, name: "Fern", waterEveryDays: 19, heightCm: 70, light: "bright", petSafe: false},
  {id: 8, name: "Basil", waterEveryDays: 9, heightCm: 62, light: "medium", petSafe: false}
]
```
