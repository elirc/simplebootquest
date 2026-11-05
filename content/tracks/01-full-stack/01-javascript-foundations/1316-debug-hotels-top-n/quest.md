---
slug: "debug-hotels-top-n"
title: "Debug: Top hotels by star rating"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Top hotels by star rating

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes results in the wrong order. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the names of the `n` hotels with the **highest** `stars`, highest first. Don't mutate the input.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Sea Breeze", nightlyPrice: 103, stars: 2, city: "Toronto", breakfast: false},
  {id: 2, name: "Olive Court", nightlyPrice: 55, stars: 4, city: "Lisbon", breakfast: true},
  {id: 3, name: "Cityloft", nightlyPrice: 117, stars: 3, city: "Toronto", breakfast: true},
  {id: 4, name: "Maple House", nightlyPrice: 339, stars: 2, city: "Toronto", breakfast: true},
  {id: 5, name: "Northern Star", nightlyPrice: 339, stars: 5, city: "Lisbon", breakfast: false},
  {id: 6, name: "The Grand", nightlyPrice: 185, stars: 5, city: "Lisbon", breakfast: false},
  {id: 7, name: "Pine Lodge", nightlyPrice: 253, stars: 3, city: "Lisbon", breakfast: false},
  {id: 8, name: "Station Hotel", nightlyPrice: 239, stars: 3, city: "Lisbon", breakfast: true}
]
```
