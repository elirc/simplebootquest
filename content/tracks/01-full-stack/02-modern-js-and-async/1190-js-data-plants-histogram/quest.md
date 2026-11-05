---
slug: "js-data-plants-histogram"
title: "Data: Bucket plants by watering interval (days)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Bucket plants by watering interval (days)

Group plants into buckets of width `width` by `waterEveryDays`: the bucket key is `Math.floor(value / width) * width`. Return an object of bucket → count.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Ivy", waterEveryDays: 3, heightCm: 130, light: "bright", petSafe: false},
  {id: 2, name: "Fern", waterEveryDays: 2, heightCm: 157, light: "bright", petSafe: false},
  {id: 3, name: "Snake Plant", waterEveryDays: 2, heightCm: 90, light: "low", petSafe: true},
  {id: 4, name: "Cactus", waterEveryDays: 9, heightCm: 76, light: "medium", petSafe: true},
  {id: 5, name: "Peace Lily", waterEveryDays: 8, heightCm: 50, light: "medium", petSafe: false},
  {id: 6, name: "Aloe", waterEveryDays: 8, heightCm: 62, light: "bright", petSafe: false},
  {id: 7, name: "Monstera", waterEveryDays: 15, heightCm: 33, light: "medium", petSafe: true},
  {id: 8, name: "Orchid", waterEveryDays: 6, heightCm: 100, light: "low", petSafe: false}
]
```
