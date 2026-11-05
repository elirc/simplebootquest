---
slug: "debug-hotels-chain"
title: "Debug: Filter, sort, map: hotels in one city"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Filter, sort, map: hotels in one city

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes results in the wrong order. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the names of hotels whose `city` equals `value`, sorted by `nightlyPrice` **highest first**. One chain of array methods is enough.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Sky Garden", nightlyPrice: 387, stars: 3, city: "Kyoto", breakfast: false},
  {id: 2, name: "Pine Lodge", nightlyPrice: 414, stars: 2, city: "Kyoto", breakfast: true},
  {id: 3, name: "Old Mill", nightlyPrice: 56, stars: 4, city: "Toronto", breakfast: true},
  {id: 4, name: "Olive Court", nightlyPrice: 199, stars: 5, city: "Kyoto", breakfast: true},
  {id: 5, name: "Sea Breeze", nightlyPrice: 51, stars: 1, city: "Toronto", breakfast: false},
  {id: 6, name: "Maple House", nightlyPrice: 98, stars: 4, city: "Kyoto", breakfast: true},
  {id: 7, name: "Harbour View", nightlyPrice: 162, stars: 5, city: "Toronto", breakfast: false},
  {id: 8, name: "Northern Star", nightlyPrice: 386, stars: 4, city: "Toronto", breakfast: false}
]
```
