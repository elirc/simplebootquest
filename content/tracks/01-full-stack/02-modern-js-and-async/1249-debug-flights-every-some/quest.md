---
slug: "debug-flights-every-some"
title: "Debug: Are all flights under a delay (minutes) limit?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Are all flights under a delay (minutes) limit?

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return `true` if **every** flight has `delayMin` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `FLIGHTS` in the tests):

```js
const FLIGHTS = [
  {id: 1, number: "AA100", durationMin: 418, delayMin: 49, seats: 3, airline: "star"},
  {id: 2, number: "TK1", durationMin: 93, delayMin: 75, seats: 22, airline: "star"},
  {id: 3, number: "KL641", durationMin: 630, delayMin: 9, seats: 9, airline: "skyteam"},
  {id: 4, number: "AF22", durationMin: 161, delayMin: 110, seats: 24, airline: "skyteam"},
  {id: 5, number: "SQ25", durationMin: 746, delayMin: 96, seats: 6, airline: "skyteam"},
  {id: 6, number: "QF1", durationMin: 452, delayMin: 139, seats: 40, airline: "oneworld"},
  {id: 7, number: "IB6251", durationMin: 55, delayMin: 63, seats: 36, airline: "star"},
  {id: 8, number: "BA117", durationMin: 573, delayMin: 129, seats: 34, airline: "star"}
]
```
