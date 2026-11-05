---
slug: "js-data-plants-above"
title: "Data: Plants with a height (cm) above a limit"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Plants with a height (cm) above a limit

Return the name of every plant whose `heightCm` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Mint", waterEveryDays: 16, heightCm: 63, light: "low", petSafe: true},
  {id: 2, name: "Fern", waterEveryDays: 18, heightCm: 61, light: "bright", petSafe: true},
  {id: 3, name: "Peace Lily", waterEveryDays: 5, heightCm: 17, light: "bright", petSafe: false},
  {id: 4, name: "Ivy", waterEveryDays: 15, heightCm: 16, light: "low", petSafe: true},
  {id: 5, name: "Bonsai", waterEveryDays: 4, heightCm: 44, light: "low", petSafe: false},
  {id: 6, name: "Lavender", waterEveryDays: 7, heightCm: 160, light: "bright", petSafe: false},
  {id: 7, name: "Orchid", waterEveryDays: 13, heightCm: 65, light: "bright", petSafe: true},
  {id: 8, name: "Cactus", waterEveryDays: 8, heightCm: 44, light: "low", petSafe: false}
]
```
