---
slug: "debug-flights-update"
title: "Debug: Update flights immutably"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Update flights immutably

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return a **new** array where every flight with `airline` equal to `value` has `durationMin` increased by `amount`. Other flights are unchanged. **Don't mutate** the input objects (React state depends on this).

The tests call your function with this data (also available as `FLIGHTS` in the tests):

```js
const FLIGHTS = [
  {id: 1, number: "AA100", durationMin: 594, delayMin: 15, seats: 41, airline: "skyteam"},
  {id: 2, number: "BA117", durationMin: 746, delayMin: 103, seats: 23, airline: "oneworld"},
  {id: 3, number: "QF1", durationMin: 758, delayMin: 156, seats: 28, airline: "oneworld"},
  {id: 4, number: "AF22", durationMin: 92, delayMin: 29, seats: 5, airline: "star"},
  {id: 5, number: "UA90", durationMin: 706, delayMin: 2, seats: 8, airline: "skyteam"},
  {id: 6, number: "LH400", durationMin: 387, delayMin: 68, seats: 24, airline: "skyteam"},
  {id: 7, number: "DL15", durationMin: 61, delayMin: 166, seats: 27, airline: "skyteam"},
  {id: 8, number: "KL641", durationMin: 145, delayMin: 7, seats: 15, airline: "star"}
]
```
