---
slug: "js-data-plants-nth"
title: "Data: The n-th plant by height (cm)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The n-th plant by height (cm)

Return the name of the plant ranked `n` (1 = highest `heightCm`), or `null` if `n` is out of range.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Mint", waterEveryDays: 4, heightCm: 128, light: "medium", petSafe: true},
  {id: 2, name: "Snake Plant", waterEveryDays: 13, heightCm: 109, light: "medium", petSafe: true},
  {id: 3, name: "Lavender", waterEveryDays: 4, heightCm: 62, light: "bright", petSafe: true},
  {id: 4, name: "Monstera", waterEveryDays: 20, heightCm: 37, light: "bright", petSafe: true},
  {id: 5, name: "Fern", waterEveryDays: 1, heightCm: 96, light: "medium", petSafe: false},
  {id: 6, name: "Ivy", waterEveryDays: 7, heightCm: 14, light: "bright", petSafe: false},
  {id: 7, name: "Orchid", waterEveryDays: 14, heightCm: 90, light: "medium", petSafe: true},
  {id: 8, name: "Bonsai", waterEveryDays: 4, heightCm: 35, light: "bright", petSafe: false}
]
```
