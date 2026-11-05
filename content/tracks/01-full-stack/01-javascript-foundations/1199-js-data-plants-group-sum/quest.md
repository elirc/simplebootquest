---
slug: "js-data-plants-group-sum"
title: "Data: Total height (cm) per light needs"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total height (cm) per light needs

Return an object mapping each `light` to the **sum** of `heightCm` for plants in it.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Bonsai", waterEveryDays: 20, heightCm: 45, light: "medium", petSafe: true},
  {id: 2, name: "Orchid", waterEveryDays: 17, heightCm: 87, light: "bright", petSafe: false},
  {id: 3, name: "Basil", waterEveryDays: 3, heightCm: 143, light: "low", petSafe: true},
  {id: 4, name: "Ivy", waterEveryDays: 4, heightCm: 130, light: "medium", petSafe: false},
  {id: 5, name: "Snake Plant", waterEveryDays: 10, heightCm: 34, light: "low", petSafe: false},
  {id: 6, name: "Lavender", waterEveryDays: 4, heightCm: 59, light: "medium", petSafe: false},
  {id: 7, name: "Mint", waterEveryDays: 18, heightCm: 44, light: "bright", petSafe: true},
  {id: 8, name: "Monstera", waterEveryDays: 5, heightCm: 13, light: "low", petSafe: false}
]
```
