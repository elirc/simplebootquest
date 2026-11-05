---
slug: "debug-flights-count-cat"
title: "Debug: Count flights by airline group"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Count flights by airline group

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return how many flights have `airline` equal to `value`.

The tests call your function with this data (also available as `FLIGHTS` in the tests):

```js
const FLIGHTS = [
  {id: 1, number: "KL641", durationMin: 393, delayMin: 106, seats: 30, airline: "oneworld"},
  {id: 2, number: "TK1", durationMin: 70, delayMin: 131, seats: 40, airline: "oneworld"},
  {id: 3, number: "SQ25", durationMin: 403, delayMin: 127, seats: 14, airline: "oneworld"},
  {id: 4, number: "AA100", durationMin: 375, delayMin: 17, seats: 36, airline: "oneworld"},
  {id: 5, number: "IB6251", durationMin: 438, delayMin: 53, seats: 44, airline: "oneworld"},
  {id: 6, number: "AF22", durationMin: 292, delayMin: 157, seats: 29, airline: "oneworld"},
  {id: 7, number: "BA117", durationMin: 110, delayMin: 108, seats: 30, airline: "skyteam"},
  {id: 8, number: "EK3", durationMin: 506, delayMin: 162, seats: 36, airline: "oneworld"}
]
```
