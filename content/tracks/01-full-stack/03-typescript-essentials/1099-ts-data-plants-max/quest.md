---
slug: "ts-data-plants-max"
title: "Data: The plant with the highest height (cm)"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The plant with the highest height (cm)

Return the name of the plant with the **highest** `heightCm`. If several tie, return the first. Return `null` for an empty list.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Ivy", waterEveryDays: 13, heightCm: 138, light: "low", petSafe: true},
  {id: 2, name: "Snake Plant", waterEveryDays: 11, heightCm: 159, light: "bright", petSafe: true},
  {id: 3, name: "Monstera", waterEveryDays: 5, heightCm: 126, light: "bright", petSafe: true},
  {id: 4, name: "Bonsai", waterEveryDays: 3, heightCm: 142, light: "medium", petSafe: true},
  {id: 5, name: "Orchid", waterEveryDays: 7, heightCm: 134, light: "low", petSafe: true},
  {id: 6, name: "Cactus", waterEveryDays: 10, heightCm: 72, light: "low", petSafe: true},
  {id: 7, name: "Basil", waterEveryDays: 10, heightCm: 33, light: "medium", petSafe: false},
  {id: 8, name: "Mint", waterEveryDays: 7, heightCm: 87, light: "medium", petSafe: false}
]
```

Type the parameters and the return value. The interface is already written for you.
