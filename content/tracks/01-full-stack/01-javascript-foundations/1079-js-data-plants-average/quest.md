---
slug: "js-data-plants-average"
title: "Data: Average height (cm)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average height (cm)

Return the average `heightCm` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Mint", waterEveryDays: 19, heightCm: 114, light: "bright", petSafe: true},
  {id: 2, name: "Fern", waterEveryDays: 3, heightCm: 159, light: "medium", petSafe: true},
  {id: 3, name: "Aloe", waterEveryDays: 19, heightCm: 106, light: "bright", petSafe: false},
  {id: 4, name: "Lavender", waterEveryDays: 8, heightCm: 24, light: "low", petSafe: true},
  {id: 5, name: "Bonsai", waterEveryDays: 10, heightCm: 22, light: "medium", petSafe: true},
  {id: 6, name: "Snake Plant", waterEveryDays: 13, heightCm: 100, light: "bright", petSafe: false},
  {id: 7, name: "Ivy", waterEveryDays: 4, heightCm: 31, light: "medium", petSafe: true},
  {id: 8, name: "Cactus", waterEveryDays: 14, heightCm: 70, light: "medium", petSafe: false}
]
```
