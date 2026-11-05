---
slug: "debug-flights-sum"
title: "Debug: Total free seats of all flights"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Total free seats of all flights

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes a total that is off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the sum of `seats` across all flights. An empty list totals 0.

The tests call your function with this data (also available as `FLIGHTS` in the tests):

```js
const FLIGHTS = [
  {id: 1, number: "UA90", durationMin: 806, delayMin: 70, seats: 39, airline: "skyteam"},
  {id: 2, number: "LH400", durationMin: 673, delayMin: 158, seats: 36, airline: "oneworld"},
  {id: 3, number: "DL15", durationMin: 247, delayMin: 147, seats: 9, airline: "skyteam"},
  {id: 4, number: "BA117", durationMin: 307, delayMin: 153, seats: 35, airline: "oneworld"},
  {id: 5, number: "IB6251", durationMin: 775, delayMin: 126, seats: 36, airline: "skyteam"},
  {id: 6, number: "KL641", durationMin: 140, delayMin: 111, seats: 2, airline: "skyteam"},
  {id: 7, number: "AA100", durationMin: 807, delayMin: 145, seats: 8, airline: "skyteam"},
  {id: 8, number: "TK1", durationMin: 180, delayMin: 91, seats: 9, airline: "star"}
]
```
