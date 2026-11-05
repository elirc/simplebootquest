---
slug: "debug-hotels-histogram"
title: "Debug: Bucket hotels by nightly price"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Bucket hotels by nightly price

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes counts that are off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Group hotels into buckets of width `width` by `nightlyPrice`: the bucket key is `Math.floor(value / width) * width`. Return an object of bucket → count.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Riverside Inn", nightlyPrice: 73, stars: 1, city: "Lisbon", breakfast: false},
  {id: 2, name: "Maple House", nightlyPrice: 384, stars: 1, city: "Kyoto", breakfast: true},
  {id: 3, name: "Sky Garden", nightlyPrice: 362, stars: 4, city: "Toronto", breakfast: false},
  {id: 4, name: "Northern Star", nightlyPrice: 226, stars: 3, city: "Kyoto", breakfast: false},
  {id: 5, name: "Harbour View", nightlyPrice: 66, stars: 2, city: "Lisbon", breakfast: false},
  {id: 6, name: "Pine Lodge", nightlyPrice: 82, stars: 5, city: "Lisbon", breakfast: false},
  {id: 7, name: "Cityloft", nightlyPrice: 355, stars: 3, city: "Toronto", breakfast: true},
  {id: 8, name: "Sea Breeze", nightlyPrice: 87, stars: 2, city: "Kyoto", breakfast: false}
]
```
