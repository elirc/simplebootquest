---
slug: "js-data-plants-sort-asc"
title: "Data: Sort plants by watering interval (days)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["`[...array].sort(...)` copies first, so the original stays untouched.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Sort plants by watering interval (days)

Return the names sorted by `waterEveryDays` from **lowest to highest**. Ties keep their original order. Don't mutate the input array.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Orchid", waterEveryDays: 6, heightCm: 99, light: "medium", petSafe: true},
  {id: 2, name: "Cactus", waterEveryDays: 13, heightCm: 158, light: "low", petSafe: true},
  {id: 3, name: "Ivy", waterEveryDays: 19, heightCm: 61, light: "bright", petSafe: true},
  {id: 4, name: "Mint", waterEveryDays: 10, heightCm: 54, light: "low", petSafe: false},
  {id: 5, name: "Aloe", waterEveryDays: 12, heightCm: 49, light: "bright", petSafe: false},
  {id: 6, name: "Fern", waterEveryDays: 17, heightCm: 85, light: "medium", petSafe: true},
  {id: 7, name: "Lavender", waterEveryDays: 6, heightCm: 61, light: "bright", petSafe: true},
  {id: 8, name: "Basil", waterEveryDays: 15, heightCm: 90, light: "bright", petSafe: true}
]
```
