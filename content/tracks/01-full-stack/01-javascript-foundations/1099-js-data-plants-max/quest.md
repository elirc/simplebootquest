---
slug: "js-data-plants-max"
title: "Data: The plant with the highest watering interval (days)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The plant with the highest watering interval (days)

Return the name of the plant with the **highest** `waterEveryDays`. If several tie, return the first. Return `null` for an empty list.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Basil", waterEveryDays: 19, heightCm: 102, light: "low", petSafe: true},
  {id: 2, name: "Mint", waterEveryDays: 3, heightCm: 37, light: "bright", petSafe: true},
  {id: 3, name: "Fern", waterEveryDays: 13, heightCm: 48, light: "low", petSafe: true},
  {id: 4, name: "Snake Plant", waterEveryDays: 13, heightCm: 44, light: "low", petSafe: false},
  {id: 5, name: "Orchid", waterEveryDays: 20, heightCm: 102, light: "medium", petSafe: false},
  {id: 6, name: "Ivy", waterEveryDays: 2, heightCm: 10, light: "low", petSafe: false},
  {id: 7, name: "Monstera", waterEveryDays: 13, heightCm: 84, light: "bright", petSafe: true},
  {id: 8, name: "Lavender", waterEveryDays: 2, heightCm: 134, light: "low", petSafe: true}
]
```
