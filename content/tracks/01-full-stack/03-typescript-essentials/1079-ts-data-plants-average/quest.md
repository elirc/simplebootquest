---
slug: "ts-data-plants-average"
title: "Data: Average height (cm)"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average height (cm)

Return the average `heightCm` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Peace Lily", waterEveryDays: 5, heightCm: 145, light: "bright", petSafe: true},
  {id: 2, name: "Fern", waterEveryDays: 11, heightCm: 129, light: "medium", petSafe: false},
  {id: 3, name: "Orchid", waterEveryDays: 15, heightCm: 63, light: "low", petSafe: false},
  {id: 4, name: "Monstera", waterEveryDays: 10, heightCm: 91, light: "bright", petSafe: true},
  {id: 5, name: "Snake Plant", waterEveryDays: 3, heightCm: 21, light: "low", petSafe: false},
  {id: 6, name: "Lavender", waterEveryDays: 18, heightCm: 67, light: "bright", petSafe: false},
  {id: 7, name: "Basil", waterEveryDays: 9, heightCm: 14, light: "medium", petSafe: false},
  {id: 8, name: "Aloe", waterEveryDays: 14, heightCm: 36, light: "bright", petSafe: true}
]
```

Type the parameters and the return value. The interface is already written for you.
