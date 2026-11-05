---
slug: "debug-hotels-lookup"
title: "Debug: Look up a hotel's star rating"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Look up a hotel's star rating

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the `stars` of the hotel whose name is `name`, or `null` if there isn't one.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Harbour View", nightlyPrice: 226, stars: 4, city: "Kyoto", breakfast: true},
  {id: 2, name: "Sky Garden", nightlyPrice: 266, stars: 4, city: "Toronto", breakfast: false},
  {id: 3, name: "The Grand", nightlyPrice: 267, stars: 3, city: "Toronto", breakfast: true},
  {id: 4, name: "Northern Star", nightlyPrice: 239, stars: 4, city: "Lisbon", breakfast: false},
  {id: 5, name: "Riverside Inn", nightlyPrice: 325, stars: 2, city: "Toronto", breakfast: false},
  {id: 6, name: "Cityloft", nightlyPrice: 389, stars: 1, city: "Kyoto", breakfast: false},
  {id: 7, name: "Olive Court", nightlyPrice: 387, stars: 2, city: "Kyoto", breakfast: false},
  {id: 8, name: "Station Hotel", nightlyPrice: 359, stars: 2, city: "Toronto", breakfast: false}
]
```
