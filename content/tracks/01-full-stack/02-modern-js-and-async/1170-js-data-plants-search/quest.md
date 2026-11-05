---
slug: "js-data-plants-search"
title: "Data: Search plants by name"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Search plants by name

Return the names that **contain** `query`, ignoring case. An empty (or whitespace-only) query returns every name.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Aloe", waterEveryDays: 19, heightCm: 117, light: "medium", petSafe: false},
  {id: 2, name: "Orchid", waterEveryDays: 7, heightCm: 32, light: "bright", petSafe: false},
  {id: 3, name: "Monstera", waterEveryDays: 6, heightCm: 104, light: "medium", petSafe: true},
  {id: 4, name: "Mint", waterEveryDays: 16, heightCm: 85, light: "low", petSafe: true},
  {id: 5, name: "Ivy", waterEveryDays: 12, heightCm: 92, light: "low", petSafe: false},
  {id: 6, name: "Bonsai", waterEveryDays: 14, heightCm: 9, light: "medium", petSafe: false},
  {id: 7, name: "Fern", waterEveryDays: 1, heightCm: 145, light: "medium", petSafe: false},
  {id: 8, name: "Basil", waterEveryDays: 8, heightCm: 44, light: "bright", petSafe: false}
]
```
