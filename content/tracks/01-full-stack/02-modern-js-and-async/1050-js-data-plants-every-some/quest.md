---
slug: "js-data-plants-every-some"
title: "Data: Are all plants under a watering interval (days) limit?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all plants under a watering interval (days) limit?

Return `true` if **every** plant has `waterEveryDays` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Lavender", waterEveryDays: 4, heightCm: 17, light: "medium", petSafe: true},
  {id: 2, name: "Snake Plant", waterEveryDays: 18, heightCm: 159, light: "medium", petSafe: true},
  {id: 3, name: "Fern", waterEveryDays: 15, heightCm: 146, light: "medium", petSafe: false},
  {id: 4, name: "Mint", waterEveryDays: 16, heightCm: 114, light: "medium", petSafe: false},
  {id: 5, name: "Monstera", waterEveryDays: 5, heightCm: 86, light: "medium", petSafe: false},
  {id: 6, name: "Aloe", waterEveryDays: 12, heightCm: 99, light: "bright", petSafe: true},
  {id: 7, name: "Orchid", waterEveryDays: 14, heightCm: 142, light: "bright", petSafe: false},
  {id: 8, name: "Bonsai", waterEveryDays: 4, heightCm: 90, light: "bright", petSafe: true}
]
```
