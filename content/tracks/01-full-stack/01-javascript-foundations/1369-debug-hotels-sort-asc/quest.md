---
slug: "debug-hotels-sort-asc"
title: "Debug: Sort hotels by star rating"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Sort hotels by star rating

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes results in the wrong order. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the names sorted by `stars` from **lowest to highest**. Ties keep their original order. Don't mutate the input array.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Maple House", nightlyPrice: 306, stars: 3, city: "Lisbon", breakfast: true},
  {id: 2, name: "Sky Garden", nightlyPrice: 157, stars: 3, city: "Toronto", breakfast: true},
  {id: 3, name: "Riverside Inn", nightlyPrice: 169, stars: 4, city: "Kyoto", breakfast: false},
  {id: 4, name: "Sea Breeze", nightlyPrice: 384, stars: 2, city: "Kyoto", breakfast: false},
  {id: 5, name: "Cityloft", nightlyPrice: 272, stars: 2, city: "Toronto", breakfast: false},
  {id: 6, name: "The Grand", nightlyPrice: 387, stars: 3, city: "Lisbon", breakfast: true},
  {id: 7, name: "Olive Court", nightlyPrice: 166, stars: 5, city: "Toronto", breakfast: true},
  {id: 8, name: "Station Hotel", nightlyPrice: 328, stars: 5, city: "Toronto", breakfast: true}
]
```
