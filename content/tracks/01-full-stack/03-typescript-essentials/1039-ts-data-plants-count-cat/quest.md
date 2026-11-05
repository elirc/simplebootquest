---
slug: "ts-data-plants-count-cat"
title: "Data: Count plants by light needs"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Count plants by light needs

Return how many plants have `light` equal to `value`.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Lavender", waterEveryDays: 9, heightCm: 159, light: "bright", petSafe: false},
  {id: 2, name: "Aloe", waterEveryDays: 4, heightCm: 124, light: "bright", petSafe: true},
  {id: 3, name: "Monstera", waterEveryDays: 6, heightCm: 116, light: "low", petSafe: true},
  {id: 4, name: "Cactus", waterEveryDays: 19, heightCm: 150, light: "bright", petSafe: false},
  {id: 5, name: "Basil", waterEveryDays: 7, heightCm: 151, light: "bright", petSafe: false},
  {id: 6, name: "Mint", waterEveryDays: 20, heightCm: 27, light: "low", petSafe: true},
  {id: 7, name: "Ivy", waterEveryDays: 16, heightCm: 77, light: "bright", petSafe: true},
  {id: 8, name: "Snake Plant", waterEveryDays: 20, heightCm: 105, light: "medium", petSafe: false}
]
```

Type the parameters and the return value. The interface is already written for you.
