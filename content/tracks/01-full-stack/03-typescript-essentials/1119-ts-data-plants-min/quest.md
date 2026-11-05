---
slug: "ts-data-plants-min"
title: "Data: The plant with the lowest watering interval (days)"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The plant with the lowest watering interval (days)

Return the name of the plant with the **lowest** `waterEveryDays` (first one on ties), or `null` for an empty list.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Mint", waterEveryDays: 2, heightCm: 99, light: "bright", petSafe: true},
  {id: 2, name: "Ivy", waterEveryDays: 21, heightCm: 27, light: "medium", petSafe: false},
  {id: 3, name: "Peace Lily", waterEveryDays: 19, heightCm: 46, light: "medium", petSafe: true},
  {id: 4, name: "Snake Plant", waterEveryDays: 10, heightCm: 47, light: "low", petSafe: false},
  {id: 5, name: "Fern", waterEveryDays: 18, heightCm: 117, light: "bright", petSafe: true},
  {id: 6, name: "Aloe", waterEveryDays: 1, heightCm: 135, light: "low", petSafe: true},
  {id: 7, name: "Basil", waterEveryDays: 17, heightCm: 132, light: "medium", petSafe: false},
  {id: 8, name: "Lavender", waterEveryDays: 12, heightCm: 109, light: "bright", petSafe: false}
]
```

Type the parameters and the return value. The interface is already written for you.
