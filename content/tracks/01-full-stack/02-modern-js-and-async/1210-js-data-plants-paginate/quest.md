---
slug: "js-data-plants-paginate"
title: "Data: Paginate plants"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Paginate plants

Return `{ items, page, totalPages }` where `items` are the names on page `page` (1-based) of size `size`. Out-of-range pages return an empty `items` array.

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Bonsai", waterEveryDays: 13, heightCm: 82, light: "low", petSafe: false},
  {id: 2, name: "Basil", waterEveryDays: 8, heightCm: 116, light: "bright", petSafe: true},
  {id: 3, name: "Aloe", waterEveryDays: 18, heightCm: 16, light: "medium", petSafe: false},
  {id: 4, name: "Fern", waterEveryDays: 14, heightCm: 91, light: "low", petSafe: false},
  {id: 5, name: "Snake Plant", waterEveryDays: 11, heightCm: 143, light: "medium", petSafe: true},
  {id: 6, name: "Mint", waterEveryDays: 16, heightCm: 16, light: "low", petSafe: false},
  {id: 7, name: "Orchid", waterEveryDays: 13, heightCm: 112, light: "low", petSafe: false},
  {id: 8, name: "Lavender", waterEveryDays: 19, heightCm: 65, light: "medium", petSafe: false}
]
```
