---
slug: "ts-data-plants-between"
title: "Data: Plants in a height (cm) range"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Plants in a height (cm) range

Return the names of plants whose `heightCm` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Basil", waterEveryDays: 8, heightCm: 86, light: "medium", petSafe: false},
  {id: 2, name: "Ivy", waterEveryDays: 4, heightCm: 103, light: "low", petSafe: true},
  {id: 3, name: "Monstera", waterEveryDays: 15, heightCm: 104, light: "medium", petSafe: true},
  {id: 4, name: "Aloe", waterEveryDays: 6, heightCm: 114, light: "bright", petSafe: true},
  {id: 5, name: "Fern", waterEveryDays: 15, heightCm: 127, light: "low", petSafe: true},
  {id: 6, name: "Orchid", waterEveryDays: 14, heightCm: 68, light: "medium", petSafe: false},
  {id: 7, name: "Mint", waterEveryDays: 11, heightCm: 47, light: "low", petSafe: true},
  {id: 8, name: "Bonsai", waterEveryDays: 4, heightCm: 29, light: "medium", petSafe: true}
]
```

Type the parameters and the return value. The interface is already written for you.
