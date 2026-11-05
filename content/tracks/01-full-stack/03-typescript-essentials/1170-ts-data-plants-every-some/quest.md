---
slug: "ts-data-plants-every-some"
title: "Data: Are all plants under a watering interval (days) limit?"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all plants under a watering interval (days) limit?

Return `true` if **every** plant has `waterEveryDays` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Mint", waterEveryDays: 7, heightCm: 62, light: "low", petSafe: false},
  {id: 2, name: "Orchid", waterEveryDays: 6, heightCm: 103, light: "medium", petSafe: false},
  {id: 3, name: "Peace Lily", waterEveryDays: 17, heightCm: 32, light: "low", petSafe: false},
  {id: 4, name: "Aloe", waterEveryDays: 6, heightCm: 75, light: "low", petSafe: false},
  {id: 5, name: "Snake Plant", waterEveryDays: 6, heightCm: 67, light: "medium", petSafe: true},
  {id: 6, name: "Cactus", waterEveryDays: 6, heightCm: 23, light: "bright", petSafe: true},
  {id: 7, name: "Fern", waterEveryDays: 17, heightCm: 145, light: "medium", petSafe: true},
  {id: 8, name: "Monstera", waterEveryDays: 3, heightCm: 115, light: "low", petSafe: true}
]
```

Type the parameters and the return value. The interface is already written for you.
