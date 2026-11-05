---
slug: "js-data-plants-count-cat"
title: "Data: Count plants by light needs"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Count plants by light needs

Return how many plants have `light` equal to `value`.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Lavender", waterEveryDays: 11, heightCm: 118, light: "low", petSafe: false},
  {id: 2, name: "Orchid", waterEveryDays: 8, heightCm: 6, light: "low", petSafe: false},
  {id: 3, name: "Bonsai", waterEveryDays: 13, heightCm: 93, light: "medium", petSafe: true},
  {id: 4, name: "Snake Plant", waterEveryDays: 4, heightCm: 44, light: "low", petSafe: true},
  {id: 5, name: "Fern", waterEveryDays: 12, heightCm: 72, light: "low", petSafe: true},
  {id: 6, name: "Peace Lily", waterEveryDays: 11, heightCm: 92, light: "low", petSafe: false},
  {id: 7, name: "Mint", waterEveryDays: 8, heightCm: 52, light: "medium", petSafe: false},
  {id: 8, name: "Monstera", waterEveryDays: 20, heightCm: 126, light: "low", petSafe: true}
]
```
