---
slug: "debug-flights-top-n"
title: "Debug: Top flights by duration (minutes)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Top flights by duration (minutes)

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes results in the wrong order. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the numbers of the `n` flights with the **highest** `durationMin`, highest first. Don't mutate the input.

The tests call your function with this data (also available as `FLIGHTS` in the tests):

```js
const FLIGHTS = [
  {id: 1, number: "AA100", durationMin: 634, delayMin: 160, seats: 20, airline: "oneworld"},
  {id: 2, number: "QF1", durationMin: 395, delayMin: 158, seats: 35, airline: "star"},
  {id: 3, number: "EK3", durationMin: 141, delayMin: 92, seats: 40, airline: "oneworld"},
  {id: 4, number: "IB6251", durationMin: 175, delayMin: 113, seats: 26, airline: "skyteam"},
  {id: 5, number: "AF22", durationMin: 610, delayMin: 141, seats: 48, airline: "skyteam"},
  {id: 6, number: "KL641", durationMin: 751, delayMin: 70, seats: 0, airline: "oneworld"},
  {id: 7, number: "LH400", durationMin: 334, delayMin: 172, seats: 23, airline: "oneworld"},
  {id: 8, number: "UA90", durationMin: 350, delayMin: 56, seats: 11, airline: "skyteam"}
]
```
