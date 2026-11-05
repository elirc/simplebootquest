---
slug: "js-data-plants-sum"
title: "Data: Total watering interval (days) of all plants"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total watering interval (days) of all plants

Return the sum of `waterEveryDays` across all plants. An empty list totals 0.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Peace Lily", waterEveryDays: 13, heightCm: 124, light: "medium", petSafe: false},
  {id: 2, name: "Ivy", waterEveryDays: 9, heightCm: 35, light: "bright", petSafe: true},
  {id: 3, name: "Orchid", waterEveryDays: 5, heightCm: 121, light: "bright", petSafe: false},
  {id: 4, name: "Monstera", waterEveryDays: 17, heightCm: 97, light: "bright", petSafe: true},
  {id: 5, name: "Lavender", waterEveryDays: 4, heightCm: 40, light: "low", petSafe: false},
  {id: 6, name: "Fern", waterEveryDays: 2, heightCm: 85, light: "bright", petSafe: true},
  {id: 7, name: "Bonsai", waterEveryDays: 16, heightCm: 98, light: "low", petSafe: true},
  {id: 8, name: "Aloe", waterEveryDays: 18, heightCm: 53, light: "bright", petSafe: false}
]
```
