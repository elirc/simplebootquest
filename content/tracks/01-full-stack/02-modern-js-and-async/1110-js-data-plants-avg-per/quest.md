---
slug: "js-data-plants-avg-per"
title: "Data: Average watering interval (days) per light needs"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average watering interval (days) per light needs

Return an object mapping each `light` to the average `waterEveryDays` of its plants, rounded to a whole number.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Monstera", waterEveryDays: 5, heightCm: 63, light: "low", petSafe: true},
  {id: 2, name: "Peace Lily", waterEveryDays: 9, heightCm: 55, light: "medium", petSafe: false},
  {id: 3, name: "Mint", waterEveryDays: 2, heightCm: 60, light: "low", petSafe: true},
  {id: 4, name: "Fern", waterEveryDays: 14, heightCm: 119, light: "bright", petSafe: true},
  {id: 5, name: "Lavender", waterEveryDays: 4, heightCm: 42, light: "low", petSafe: true},
  {id: 6, name: "Aloe", waterEveryDays: 18, heightCm: 104, light: "medium", petSafe: true},
  {id: 7, name: "Orchid", waterEveryDays: 19, heightCm: 97, light: "medium", petSafe: true},
  {id: 8, name: "Ivy", waterEveryDays: 2, heightCm: 48, light: "bright", petSafe: true}
]
```
