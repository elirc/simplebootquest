---
slug: "js-data-plants-index"
title: "Data: Index plants by id"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Index plants by id

Return an object mapping each `id` to the plant's name, for fast lookups.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Fern", waterEveryDays: 15, heightCm: 146, light: "medium", petSafe: true},
  {id: 2, name: "Ivy", waterEveryDays: 13, heightCm: 112, light: "bright", petSafe: true},
  {id: 3, name: "Snake Plant", waterEveryDays: 5, heightCm: 143, light: "low", petSafe: false},
  {id: 4, name: "Monstera", waterEveryDays: 8, heightCm: 101, light: "medium", petSafe: true},
  {id: 5, name: "Lavender", waterEveryDays: 14, heightCm: 115, light: "bright", petSafe: true},
  {id: 6, name: "Mint", waterEveryDays: 13, heightCm: 51, light: "medium", petSafe: true},
  {id: 7, name: "Peace Lily", waterEveryDays: 15, heightCm: 65, light: "bright", petSafe: true},
  {id: 8, name: "Cactus", waterEveryDays: 11, heightCm: 30, light: "low", petSafe: false}
]
```
