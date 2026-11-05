---
slug: "debug-hotels-sum"
title: "Debug: Total nightly price of all hotels"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Total nightly price of all hotels

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes a total that is off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the sum of `nightlyPrice` across all hotels. An empty list totals 0.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Sky Garden", nightlyPrice: 189, stars: 3, city: "Kyoto", breakfast: false},
  {id: 2, name: "Cityloft", nightlyPrice: 264, stars: 2, city: "Lisbon", breakfast: true},
  {id: 3, name: "Old Mill", nightlyPrice: 292, stars: 2, city: "Lisbon", breakfast: true},
  {id: 4, name: "Northern Star", nightlyPrice: 178, stars: 3, city: "Toronto", breakfast: false},
  {id: 5, name: "Station Hotel", nightlyPrice: 389, stars: 1, city: "Kyoto", breakfast: true},
  {id: 6, name: "Sea Breeze", nightlyPrice: 402, stars: 5, city: "Toronto", breakfast: false},
  {id: 7, name: "Harbour View", nightlyPrice: 136, stars: 4, city: "Lisbon", breakfast: false},
  {id: 8, name: "Olive Court", nightlyPrice: 108, stars: 1, city: "Kyoto", breakfast: true}
]
```
