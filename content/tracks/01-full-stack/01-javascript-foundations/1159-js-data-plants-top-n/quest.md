---
slug: "js-data-plants-top-n"
title: "Data: Top plants by watering interval (days)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Top plants by watering interval (days)

Return the names of the `n` plants with the **highest** `waterEveryDays`, highest first. Don't mutate the input.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Basil", waterEveryDays: 20, heightCm: 57, light: "bright", petSafe: true},
  {id: 2, name: "Bonsai", waterEveryDays: 21, heightCm: 60, light: "bright", petSafe: false},
  {id: 3, name: "Peace Lily", waterEveryDays: 15, heightCm: 34, light: "low", petSafe: false},
  {id: 4, name: "Aloe", waterEveryDays: 14, heightCm: 101, light: "low", petSafe: true},
  {id: 5, name: "Orchid", waterEveryDays: 19, heightCm: 97, light: "medium", petSafe: false},
  {id: 6, name: "Ivy", waterEveryDays: 20, heightCm: 125, light: "medium", petSafe: false},
  {id: 7, name: "Fern", waterEveryDays: 7, heightCm: 118, light: "low", petSafe: true},
  {id: 8, name: "Snake Plant", waterEveryDays: 12, heightCm: 31, light: "bright", petSafe: true}
]
```
