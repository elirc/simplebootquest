---
slug: "debug-flights-nth"
title: "Debug: The n-th flight by free seats"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: The n-th flight by free seats

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the number of the flight ranked `n` (1 = highest `seats`), or `null` if `n` is out of range.

The tests call your function with this data (also available as `FLIGHTS` in the tests):

```js
const FLIGHTS = [
  {id: 1, number: "TK1", durationMin: 110, delayMin: 21, seats: 11, airline: "star"},
  {id: 2, number: "UA90", durationMin: 373, delayMin: 80, seats: 45, airline: "oneworld"},
  {id: 3, number: "SQ25", durationMin: 802, delayMin: 48, seats: 7, airline: "oneworld"},
  {id: 4, number: "LH400", durationMin: 615, delayMin: 86, seats: 3, airline: "oneworld"},
  {id: 5, number: "IB6251", durationMin: 412, delayMin: 2, seats: 44, airline: "star"},
  {id: 6, number: "QF1", durationMin: 168, delayMin: 128, seats: 15, airline: "star"},
  {id: 7, number: "AA100", durationMin: 731, delayMin: 102, seats: 4, airline: "star"},
  {id: 8, number: "BA117", durationMin: 473, delayMin: 22, seats: 36, airline: "oneworld"}
]
```
