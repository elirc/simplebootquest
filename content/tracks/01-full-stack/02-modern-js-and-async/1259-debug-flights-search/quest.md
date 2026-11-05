---
slug: "debug-flights-search"
title: "Debug: Search flights by number"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Search flights by number

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes case-sensitivity. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the numbers that **contain** `query`, ignoring case. An empty (or whitespace-only) query returns every number.

The tests call your function with this data (also available as `FLIGHTS` in the tests):

```js
const FLIGHTS = [
  {id: 1, number: "UA90", durationMin: 780, delayMin: 118, seats: 3, airline: "oneworld"},
  {id: 2, number: "IB6251", durationMin: 166, delayMin: 25, seats: 39, airline: "skyteam"},
  {id: 3, number: "SQ25", durationMin: 348, delayMin: 57, seats: 3, airline: "star"},
  {id: 4, number: "BA117", durationMin: 187, delayMin: 124, seats: 15, airline: "oneworld"},
  {id: 5, number: "AA100", durationMin: 507, delayMin: 39, seats: 8, airline: "oneworld"},
  {id: 6, number: "DL15", durationMin: 251, delayMin: 89, seats: 29, airline: "oneworld"},
  {id: 7, number: "TK1", durationMin: 458, delayMin: 71, seats: 12, airline: "oneworld"},
  {id: 8, number: "EK3", durationMin: 556, delayMin: 123, seats: 19, airline: "star"}
]
```
