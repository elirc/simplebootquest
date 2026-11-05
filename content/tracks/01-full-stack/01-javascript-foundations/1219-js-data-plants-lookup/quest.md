---
slug: "js-data-plants-lookup"
title: "Data: Look up a plant's height (cm)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Look up a plant's height (cm)

Return the `heightCm` of the plant whose name is `name`, or `null` if there isn't one.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Peace Lily", waterEveryDays: 11, heightCm: 123, light: "medium", petSafe: true},
  {id: 2, name: "Mint", waterEveryDays: 8, heightCm: 22, light: "bright", petSafe: true},
  {id: 3, name: "Fern", waterEveryDays: 8, heightCm: 118, light: "low", petSafe: false},
  {id: 4, name: "Ivy", waterEveryDays: 11, heightCm: 7, light: "medium", petSafe: true},
  {id: 5, name: "Lavender", waterEveryDays: 8, heightCm: 36, light: "low", petSafe: true},
  {id: 6, name: "Cactus", waterEveryDays: 2, heightCm: 100, light: "bright", petSafe: false},
  {id: 7, name: "Monstera", waterEveryDays: 18, heightCm: 26, light: "bright", petSafe: false},
  {id: 8, name: "Basil", waterEveryDays: 8, heightCm: 59, light: "low", petSafe: true}
]
```
