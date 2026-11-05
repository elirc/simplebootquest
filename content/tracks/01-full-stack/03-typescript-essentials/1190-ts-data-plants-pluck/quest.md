---
slug: "ts-data-plants-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `name` and `heightCm` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Orchid", waterEveryDays: 12, heightCm: 32, light: "bright", petSafe: false},
  {id: 2, name: "Snake Plant", waterEveryDays: 18, heightCm: 56, light: "bright", petSafe: false},
  {id: 3, name: "Cactus", waterEveryDays: 13, heightCm: 136, light: "medium", petSafe: true},
  {id: 4, name: "Peace Lily", waterEveryDays: 6, heightCm: 77, light: "medium", petSafe: true},
  {id: 5, name: "Fern", waterEveryDays: 16, heightCm: 13, light: "bright", petSafe: false},
  {id: 6, name: "Lavender", waterEveryDays: 20, heightCm: 104, light: "medium", petSafe: false},
  {id: 7, name: "Ivy", waterEveryDays: 2, heightCm: 80, light: "bright", petSafe: true},
  {id: 8, name: "Mint", waterEveryDays: 14, heightCm: 22, light: "low", petSafe: false}
]
```

Type the parameters and the return value. The interface is already written for you.
