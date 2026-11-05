---
slug: "debug-hotels-search"
title: "Debug: Search hotels by name"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Search hotels by name

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes case-sensitivity. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the names that **contain** `query`, ignoring case. An empty (or whitespace-only) query returns every name.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Harbour View", nightlyPrice: 191, stars: 5, city: "Lisbon", breakfast: true},
  {id: 2, name: "Sea Breeze", nightlyPrice: 114, stars: 5, city: "Lisbon", breakfast: true},
  {id: 3, name: "Riverside Inn", nightlyPrice: 194, stars: 3, city: "Kyoto", breakfast: true},
  {id: 4, name: "Station Hotel", nightlyPrice: 114, stars: 3, city: "Toronto", breakfast: true},
  {id: 5, name: "Maple House", nightlyPrice: 337, stars: 4, city: "Lisbon", breakfast: true},
  {id: 6, name: "Pine Lodge", nightlyPrice: 344, stars: 2, city: "Lisbon", breakfast: true},
  {id: 7, name: "The Grand", nightlyPrice: 152, stars: 4, city: "Kyoto", breakfast: false},
  {id: 8, name: "Sky Garden", nightlyPrice: 82, stars: 4, city: "Kyoto", breakfast: true}
]
```
