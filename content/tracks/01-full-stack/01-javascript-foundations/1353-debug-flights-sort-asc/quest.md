---
slug: "debug-flights-sort-asc"
title: "Debug: Sort flights by delay (minutes)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Sort flights by delay (minutes)

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes results in the wrong order. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the numbers sorted by `delayMin` from **lowest to highest**. Ties keep their original order. Don't mutate the input array.

The tests call your function with this data (also available as `FLIGHTS` in the tests):

```js
const FLIGHTS = [
  {id: 1, number: "TK1", durationMin: 93, delayMin: 75, seats: 34, airline: "star"},
  {id: 2, number: "SQ25", durationMin: 92, delayMin: 99, seats: 41, airline: "oneworld"},
  {id: 3, number: "UA90", durationMin: 372, delayMin: 15, seats: 3, airline: "star"},
  {id: 4, number: "DL15", durationMin: 71, delayMin: 104, seats: 43, airline: "oneworld"},
  {id: 5, number: "EK3", durationMin: 740, delayMin: 176, seats: 17, airline: "star"},
  {id: 6, number: "LH400", durationMin: 197, delayMin: 106, seats: 2, airline: "skyteam"},
  {id: 7, number: "BA117", durationMin: 123, delayMin: 172, seats: 26, airline: "star"},
  {id: 8, number: "AA100", durationMin: 411, delayMin: 20, seats: 40, airline: "oneworld"}
]
```
