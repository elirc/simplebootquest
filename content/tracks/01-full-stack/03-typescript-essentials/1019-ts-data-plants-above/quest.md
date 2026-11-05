---
slug: "ts-data-plants-above"
title: "Data: Plants with a height (cm) above a limit"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Plants with a height (cm) above a limit

Return the name of every plant whose `heightCm` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Lavender", waterEveryDays: 13, heightCm: 13, light: "bright", petSafe: false},
  {id: 2, name: "Snake Plant", waterEveryDays: 7, heightCm: 145, light: "bright", petSafe: true},
  {id: 3, name: "Monstera", waterEveryDays: 8, heightCm: 12, light: "medium", petSafe: true},
  {id: 4, name: "Cactus", waterEveryDays: 14, heightCm: 102, light: "medium", petSafe: true},
  {id: 5, name: "Aloe", waterEveryDays: 9, heightCm: 73, light: "bright", petSafe: true},
  {id: 6, name: "Basil", waterEveryDays: 11, heightCm: 144, light: "low", petSafe: true},
  {id: 7, name: "Orchid", waterEveryDays: 7, heightCm: 104, light: "low", petSafe: true},
  {id: 8, name: "Ivy", waterEveryDays: 8, heightCm: 153, light: "medium", petSafe: true}
]
```

Type the parameters and the return value. The interface is already written for you.
