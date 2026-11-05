---
slug: "ts-data-plants-sum"
title: "Data: Total watering interval (days) of all plants"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total watering interval (days) of all plants

Return the sum of `waterEveryDays` across all plants. An empty list totals 0.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Ivy", waterEveryDays: 4, heightCm: 37, light: "bright", petSafe: true},
  {id: 2, name: "Basil", waterEveryDays: 11, heightCm: 56, light: "low", petSafe: false},
  {id: 3, name: "Mint", waterEveryDays: 19, heightCm: 101, light: "bright", petSafe: false},
  {id: 4, name: "Snake Plant", waterEveryDays: 2, heightCm: 19, light: "bright", petSafe: false},
  {id: 5, name: "Fern", waterEveryDays: 8, heightCm: 115, light: "low", petSafe: false},
  {id: 6, name: "Lavender", waterEveryDays: 7, heightCm: 17, light: "low", petSafe: true},
  {id: 7, name: "Orchid", waterEveryDays: 12, heightCm: 108, light: "bright", petSafe: false},
  {id: 8, name: "Cactus", waterEveryDays: 10, heightCm: 98, light: "bright", petSafe: true}
]
```

Type the parameters and the return value. The interface is already written for you.
