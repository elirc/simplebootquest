---
slug: "js-data-plants-chain"
title: "Data: Filter, sort, map: plants in one light needs"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Filter, sort, map: plants in one light needs

Return the names of plants whose `light` equals `value`, sorted by `heightCm` **highest first**. One chain of array methods is enough.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Bonsai", waterEveryDays: 15, heightCm: 73, light: "bright", petSafe: false},
  {id: 2, name: "Monstera", waterEveryDays: 5, heightCm: 98, light: "bright", petSafe: true},
  {id: 3, name: "Lavender", waterEveryDays: 10, heightCm: 12, light: "bright", petSafe: false},
  {id: 4, name: "Basil", waterEveryDays: 18, heightCm: 139, light: "low", petSafe: true},
  {id: 5, name: "Mint", waterEveryDays: 18, heightCm: 82, light: "bright", petSafe: true},
  {id: 6, name: "Peace Lily", waterEveryDays: 14, heightCm: 37, light: "medium", petSafe: true},
  {id: 7, name: "Aloe", waterEveryDays: 16, heightCm: 42, light: "medium", petSafe: false},
  {id: 8, name: "Snake Plant", waterEveryDays: 18, heightCm: 23, light: "bright", petSafe: false}
]
```
