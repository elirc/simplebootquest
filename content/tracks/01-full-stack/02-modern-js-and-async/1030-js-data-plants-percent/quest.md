---
slug: "js-data-plants-percent"
title: "Data: What share of plants are pet safe?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What share of plants are pet safe?

Return the percentage (0–100, rounded to a whole number) of plants where `petSafe` is true. Return 0 for an empty list.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Fern", waterEveryDays: 7, heightCm: 58, light: "medium", petSafe: false},
  {id: 2, name: "Ivy", waterEveryDays: 16, heightCm: 21, light: "low", petSafe: false},
  {id: 3, name: "Basil", waterEveryDays: 19, heightCm: 122, light: "bright", petSafe: false},
  {id: 4, name: "Cactus", waterEveryDays: 7, heightCm: 24, light: "medium", petSafe: true},
  {id: 5, name: "Peace Lily", waterEveryDays: 5, heightCm: 119, light: "bright", petSafe: false},
  {id: 6, name: "Bonsai", waterEveryDays: 9, heightCm: 65, light: "medium", petSafe: false},
  {id: 7, name: "Aloe", waterEveryDays: 4, heightCm: 72, light: "medium", petSafe: false},
  {id: 8, name: "Orchid", waterEveryDays: 13, heightCm: 77, light: "low", petSafe: false}
]
```
