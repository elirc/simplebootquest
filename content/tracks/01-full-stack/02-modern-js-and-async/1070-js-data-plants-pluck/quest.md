---
slug: "js-data-plants-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `name` and `waterEveryDays` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Fern", waterEveryDays: 7, heightCm: 53, light: "low", petSafe: false},
  {id: 2, name: "Monstera", waterEveryDays: 8, heightCm: 115, light: "bright", petSafe: true},
  {id: 3, name: "Ivy", waterEveryDays: 2, heightCm: 35, light: "medium", petSafe: false},
  {id: 4, name: "Lavender", waterEveryDays: 2, heightCm: 9, light: "medium", petSafe: false},
  {id: 5, name: "Snake Plant", waterEveryDays: 4, heightCm: 151, light: "low", petSafe: true},
  {id: 6, name: "Aloe", waterEveryDays: 17, heightCm: 22, light: "low", petSafe: true},
  {id: 7, name: "Mint", waterEveryDays: 13, heightCm: 45, light: "bright", petSafe: false},
  {id: 8, name: "Basil", waterEveryDays: 4, heightCm: 57, light: "medium", petSafe: true}
]
```
