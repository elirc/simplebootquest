---
slug: "debug-hotels-update"
title: "Debug: Update hotels immutably"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Update hotels immutably

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return a **new** array where every hotel with `city` equal to `value` has `stars` increased by `amount`. Other hotels are unchanged. **Don't mutate** the input objects (React state depends on this).

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Sky Garden", nightlyPrice: 297, stars: 4, city: "Kyoto", breakfast: true},
  {id: 2, name: "Northern Star", nightlyPrice: 88, stars: 4, city: "Toronto", breakfast: true},
  {id: 3, name: "Sea Breeze", nightlyPrice: 199, stars: 3, city: "Lisbon", breakfast: true},
  {id: 4, name: "Olive Court", nightlyPrice: 382, stars: 1, city: "Lisbon", breakfast: true},
  {id: 5, name: "The Grand", nightlyPrice: 243, stars: 4, city: "Lisbon", breakfast: true},
  {id: 6, name: "Station Hotel", nightlyPrice: 280, stars: 3, city: "Kyoto", breakfast: true},
  {id: 7, name: "Cityloft", nightlyPrice: 303, stars: 2, city: "Toronto", breakfast: true},
  {id: 8, name: "Old Mill", nightlyPrice: 112, stars: 3, city: "Lisbon", breakfast: true}
]
```
