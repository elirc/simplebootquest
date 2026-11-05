---
slug: "js-data-plants-between"
title: "Data: Plants in a height (cm) range"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Plants in a height (cm) range

Return the names of plants whose `heightCm` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Peace Lily", waterEveryDays: 7, heightCm: 93, light: "medium", petSafe: true},
  {id: 2, name: "Snake Plant", waterEveryDays: 8, heightCm: 62, light: "bright", petSafe: true},
  {id: 3, name: "Bonsai", waterEveryDays: 13, heightCm: 13, light: "medium", petSafe: false},
  {id: 4, name: "Basil", waterEveryDays: 17, heightCm: 79, light: "bright", petSafe: false},
  {id: 5, name: "Ivy", waterEveryDays: 20, heightCm: 111, light: "low", petSafe: false},
  {id: 6, name: "Monstera", waterEveryDays: 15, heightCm: 28, light: "medium", petSafe: true},
  {id: 7, name: "Orchid", waterEveryDays: 6, heightCm: 93, light: "bright", petSafe: false},
  {id: 8, name: "Mint", waterEveryDays: 4, heightCm: 54, light: "bright", petSafe: false}
]
```
