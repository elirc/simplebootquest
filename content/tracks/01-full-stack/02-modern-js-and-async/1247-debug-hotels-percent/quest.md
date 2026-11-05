---
slug: "debug-hotels-percent"
title: "Debug: What share of hotels are breakfast included?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: What share of hotels are breakfast included?

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the percentage (0–100, rounded to a whole number) of hotels where `breakfast` is true. Return 0 for an empty list.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Sky Garden", nightlyPrice: 235, stars: 4, city: "Toronto", breakfast: false},
  {id: 2, name: "Olive Court", nightlyPrice: 179, stars: 5, city: "Lisbon", breakfast: false},
  {id: 3, name: "Pine Lodge", nightlyPrice: 161, stars: 2, city: "Kyoto", breakfast: true},
  {id: 4, name: "Station Hotel", nightlyPrice: 97, stars: 4, city: "Kyoto", breakfast: false},
  {id: 5, name: "Old Mill", nightlyPrice: 373, stars: 3, city: "Toronto", breakfast: true},
  {id: 6, name: "Maple House", nightlyPrice: 165, stars: 4, city: "Lisbon", breakfast: true},
  {id: 7, name: "The Grand", nightlyPrice: 61, stars: 4, city: "Kyoto", breakfast: false},
  {id: 8, name: "Sea Breeze", nightlyPrice: 67, stars: 3, city: "Toronto", breakfast: false}
]
```
