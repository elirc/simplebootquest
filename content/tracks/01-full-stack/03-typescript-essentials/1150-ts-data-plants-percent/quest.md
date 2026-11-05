---
slug: "ts-data-plants-percent"
title: "Data: What share of plants are pet safe?"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What share of plants are pet safe?

Return the percentage (0–100, rounded to a whole number) of plants where `petSafe` is true. Return 0 for an empty list.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Bonsai", waterEveryDays: 5, heightCm: 105, light: "low", petSafe: true},
  {id: 2, name: "Peace Lily", waterEveryDays: 20, heightCm: 52, light: "low", petSafe: false},
  {id: 3, name: "Snake Plant", waterEveryDays: 1, heightCm: 144, light: "medium", petSafe: false},
  {id: 4, name: "Aloe", waterEveryDays: 13, heightCm: 159, light: "low", petSafe: true},
  {id: 5, name: "Mint", waterEveryDays: 17, heightCm: 42, light: "low", petSafe: false},
  {id: 6, name: "Basil", waterEveryDays: 14, heightCm: 16, light: "low", petSafe: false},
  {id: 7, name: "Orchid", waterEveryDays: 6, heightCm: 109, light: "bright", petSafe: false},
  {id: 8, name: "Ivy", waterEveryDays: 12, heightCm: 36, light: "medium", petSafe: false}
]
```

Type the parameters and the return value. The interface is already written for you.
