---
slug: "js-data-plants-diff"
title: "Data: What changed between two snapshots?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What changed between two snapshots?

Given yesterday's and today's plants (same ids), return the ids whose `waterEveryDays` changed, in today's order.

The tests call your function with this data (also available as `BEFORE` / `AFTER` in the tests):

```js
const BEFORE = [
  {id: 1, name: "Snake Plant", waterEveryDays: 10, heightCm: 121, light: "bright", petSafe: false},
  {id: 2, name: "Orchid", waterEveryDays: 21, heightCm: 142, light: "low", petSafe: false},
  {id: 3, name: "Aloe", waterEveryDays: 13, heightCm: 22, light: "low", petSafe: true},
  {id: 4, name: "Bonsai", waterEveryDays: 20, heightCm: 63, light: "bright", petSafe: false},
  {id: 5, name: "Cactus", waterEveryDays: 7, heightCm: 76, light: "medium", petSafe: false},
  {id: 6, name: "Lavender", waterEveryDays: 15, heightCm: 139, light: "bright", petSafe: true},
  {id: 7, name: "Ivy", waterEveryDays: 18, heightCm: 109, light: "medium", petSafe: true},
  {id: 8, name: "Peace Lily", waterEveryDays: 15, heightCm: 63, light: "medium", petSafe: true}
]
```
