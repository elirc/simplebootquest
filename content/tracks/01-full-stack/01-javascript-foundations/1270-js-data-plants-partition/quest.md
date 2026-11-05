---
slug: "js-data-plants-partition"
title: "Data: Split plants by \"pet safe\""
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Split plants by "pet safe"

Return `{ yes, no }`: the names of plants where `petSafe` is true, and those where it's false. Keep the original order.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Peace Lily", waterEveryDays: 7, heightCm: 27, light: "medium", petSafe: false},
  {id: 2, name: "Cactus", waterEveryDays: 18, heightCm: 22, light: "medium", petSafe: false},
  {id: 3, name: "Snake Plant", waterEveryDays: 11, heightCm: 49, light: "bright", petSafe: true},
  {id: 4, name: "Aloe", waterEveryDays: 13, heightCm: 76, light: "medium", petSafe: false},
  {id: 5, name: "Basil", waterEveryDays: 11, heightCm: 16, light: "low", petSafe: true},
  {id: 6, name: "Orchid", waterEveryDays: 3, heightCm: 156, light: "bright", petSafe: false},
  {id: 7, name: "Fern", waterEveryDays: 19, heightCm: 40, light: "medium", petSafe: false},
  {id: 8, name: "Monstera", waterEveryDays: 20, heightCm: 13, light: "bright", petSafe: false}
]
```
