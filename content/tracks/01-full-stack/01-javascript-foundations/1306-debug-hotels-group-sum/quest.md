---
slug: "debug-hotels-group-sum"
title: "Debug: Total star rating per city"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Total star rating per city

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes counts that are off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return an object mapping each `city` to the **sum** of `stars` for hotels in it.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Old Mill", nightlyPrice: 245, stars: 5, city: "Lisbon", breakfast: true},
  {id: 2, name: "Maple House", nightlyPrice: 362, stars: 5, city: "Toronto", breakfast: true},
  {id: 3, name: "Sky Garden", nightlyPrice: 49, stars: 3, city: "Toronto", breakfast: true},
  {id: 4, name: "Station Hotel", nightlyPrice: 66, stars: 2, city: "Kyoto", breakfast: false},
  {id: 5, name: "Pine Lodge", nightlyPrice: 286, stars: 5, city: "Toronto", breakfast: false},
  {id: 6, name: "Harbour View", nightlyPrice: 171, stars: 4, city: "Toronto", breakfast: false},
  {id: 7, name: "Sea Breeze", nightlyPrice: 45, stars: 3, city: "Toronto", breakfast: true},
  {id: 8, name: "Riverside Inn", nightlyPrice: 391, stars: 3, city: "Kyoto", breakfast: true}
]
```
