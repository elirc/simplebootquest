---
slug: "js-data-plants-min"
title: "Data: The plant with the lowest height (cm)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The plant with the lowest height (cm)

Return the name of the plant with the **lowest** `heightCm` (first one on ties), or `null` for an empty list.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Fern", waterEveryDays: 11, heightCm: 152, light: "medium", petSafe: false},
  {id: 2, name: "Aloe", waterEveryDays: 14, heightCm: 108, light: "bright", petSafe: false},
  {id: 3, name: "Orchid", waterEveryDays: 12, heightCm: 139, light: "medium", petSafe: true},
  {id: 4, name: "Cactus", waterEveryDays: 6, heightCm: 100, light: "low", petSafe: true},
  {id: 5, name: "Peace Lily", waterEveryDays: 12, heightCm: 138, light: "medium", petSafe: false},
  {id: 6, name: "Ivy", waterEveryDays: 17, heightCm: 152, light: "medium", petSafe: false},
  {id: 7, name: "Basil", waterEveryDays: 10, heightCm: 90, light: "medium", petSafe: false},
  {id: 8, name: "Monstera", waterEveryDays: 8, heightCm: 61, light: "medium", petSafe: true}
]
```
