---
slug: "debug-hotels-every-some"
title: "Debug: Are all hotels under a nightly price limit?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Are all hotels under a nightly price limit?

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return `true` if **every** hotel has `nightlyPrice` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Old Mill", nightlyPrice: 59, stars: 1, city: "Lisbon", breakfast: false},
  {id: 2, name: "The Grand", nightlyPrice: 55, stars: 1, city: "Kyoto", breakfast: true},
  {id: 3, name: "Maple House", nightlyPrice: 65, stars: 2, city: "Kyoto", breakfast: true},
  {id: 4, name: "Sky Garden", nightlyPrice: 336, stars: 5, city: "Toronto", breakfast: true},
  {id: 5, name: "Cityloft", nightlyPrice: 217, stars: 5, city: "Toronto", breakfast: false},
  {id: 6, name: "Pine Lodge", nightlyPrice: 173, stars: 3, city: "Toronto", breakfast: false},
  {id: 7, name: "Riverside Inn", nightlyPrice: 68, stars: 2, city: "Toronto", breakfast: true},
  {id: 8, name: "Northern Star", nightlyPrice: 189, stars: 3, city: "Kyoto", breakfast: true}
]
```
