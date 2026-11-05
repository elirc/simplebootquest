---
slug: "debug-hotels-between"
title: "Debug: Hotels in a nightly price range"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Hotels in a nightly price range

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the names of hotels whose `nightlyPrice` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Maple House", nightlyPrice: 385, stars: 1, city: "Kyoto", breakfast: true},
  {id: 2, name: "The Grand", nightlyPrice: 367, stars: 3, city: "Lisbon", breakfast: false},
  {id: 3, name: "Station Hotel", nightlyPrice: 177, stars: 1, city: "Toronto", breakfast: true},
  {id: 4, name: "Harbour View", nightlyPrice: 393, stars: 2, city: "Lisbon", breakfast: true},
  {id: 5, name: "Sky Garden", nightlyPrice: 357, stars: 2, city: "Lisbon", breakfast: true},
  {id: 6, name: "Olive Court", nightlyPrice: 255, stars: 3, city: "Toronto", breakfast: true},
  {id: 7, name: "Old Mill", nightlyPrice: 182, stars: 2, city: "Lisbon", breakfast: true},
  {id: 8, name: "Cityloft", nightlyPrice: 360, stars: 2, city: "Toronto", breakfast: true}
]
```
