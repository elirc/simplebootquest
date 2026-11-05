---
slug: "js-data-plants-format"
title: "Data: Format plants as labels"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Format plants as labels

Return one string per plant: `"<name> (<heightCm>)"`, e.g. `"Cactus (95)"`.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Cactus", waterEveryDays: 12, heightCm: 95, light: "medium", petSafe: true},
  {id: 2, name: "Basil", waterEveryDays: 14, heightCm: 52, light: "low", petSafe: true},
  {id: 3, name: "Orchid", waterEveryDays: 12, heightCm: 67, light: "medium", petSafe: true},
  {id: 4, name: "Fern", waterEveryDays: 9, heightCm: 40, light: "bright", petSafe: false},
  {id: 5, name: "Snake Plant", waterEveryDays: 12, heightCm: 65, light: "bright", petSafe: true},
  {id: 6, name: "Mint", waterEveryDays: 6, heightCm: 87, light: "low", petSafe: false},
  {id: 7, name: "Aloe", waterEveryDays: 2, heightCm: 49, light: "medium", petSafe: true},
  {id: 8, name: "Monstera", waterEveryDays: 6, heightCm: 151, light: "low", petSafe: true}
]
```
