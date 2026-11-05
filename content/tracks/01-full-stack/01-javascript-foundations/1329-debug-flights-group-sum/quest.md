---
slug: "debug-flights-group-sum"
title: "Debug: Total free seats per airline group"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Total free seats per airline group

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes counts that are off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return an object mapping each `airline` to the **sum** of `seats` for flights in it.

The tests call your function with this data (also available as `FLIGHTS` in the tests):

```js
const FLIGHTS = [
  {id: 1, number: "BA117", durationMin: 427, delayMin: 113, seats: 26, airline: "oneworld"},
  {id: 2, number: "UA90", durationMin: 233, delayMin: 127, seats: 5, airline: "skyteam"},
  {id: 3, number: "AF22", durationMin: 477, delayMin: 147, seats: 19, airline: "skyteam"},
  {id: 4, number: "TK1", durationMin: 246, delayMin: 12, seats: 18, airline: "skyteam"},
  {id: 5, number: "QF1", durationMin: 502, delayMin: 157, seats: 2, airline: "skyteam"},
  {id: 6, number: "LH400", durationMin: 574, delayMin: 172, seats: 33, airline: "star"},
  {id: 7, number: "EK3", durationMin: 335, delayMin: 11, seats: 28, airline: "oneworld"},
  {id: 8, number: "KL641", durationMin: 566, delayMin: 29, seats: 38, airline: "skyteam"}
]
```
