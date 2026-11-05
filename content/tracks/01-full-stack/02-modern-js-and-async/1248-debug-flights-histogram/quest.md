---
slug: "debug-flights-histogram"
title: "Debug: Bucket flights by delay (minutes)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Bucket flights by delay (minutes)

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes counts that are off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Group flights into buckets of width `width` by `delayMin`: the bucket key is `Math.floor(value / width) * width`. Return an object of bucket → count.

The tests call your function with this data (also available as `FLIGHTS` in the tests):

```js
const FLIGHTS = [
  {id: 1, number: "AF22", durationMin: 324, delayMin: 112, seats: 13, airline: "oneworld"},
  {id: 2, number: "LH400", durationMin: 456, delayMin: 137, seats: 17, airline: "oneworld"},
  {id: 3, number: "SQ25", durationMin: 760, delayMin: 169, seats: 1, airline: "star"},
  {id: 4, number: "KL641", durationMin: 209, delayMin: 44, seats: 25, airline: "skyteam"},
  {id: 5, number: "AA100", durationMin: 383, delayMin: 152, seats: 41, airline: "oneworld"},
  {id: 6, number: "DL15", durationMin: 487, delayMin: 127, seats: 48, airline: "oneworld"},
  {id: 7, number: "UA90", durationMin: 496, delayMin: 21, seats: 44, airline: "skyteam"},
  {id: 8, number: "EK3", durationMin: 723, delayMin: 100, seats: 4, airline: "oneworld"}
]
```
