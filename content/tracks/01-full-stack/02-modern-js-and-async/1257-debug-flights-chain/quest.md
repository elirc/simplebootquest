---
slug: "debug-flights-chain"
title: "Debug: Filter, sort, map: flights in one airline group"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Filter, sort, map: flights in one airline group

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes results in the wrong order. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the numbers of flights whose `airline` equals `value`, sorted by `delayMin` **highest first**. One chain of array methods is enough.

The tests call your function with this data (also available as `FLIGHTS` in the tests):

```js
const FLIGHTS = [
  {id: 1, number: "EK3", durationMin: 76, delayMin: 153, seats: 14, airline: "star"},
  {id: 2, number: "LH400", durationMin: 297, delayMin: 5, seats: 48, airline: "star"},
  {id: 3, number: "TK1", durationMin: 683, delayMin: 83, seats: 8, airline: "skyteam"},
  {id: 4, number: "AA100", durationMin: 184, delayMin: 178, seats: 26, airline: "oneworld"},
  {id: 5, number: "SQ25", durationMin: 788, delayMin: 67, seats: 21, airline: "star"},
  {id: 6, number: "KL641", durationMin: 562, delayMin: 40, seats: 3, airline: "oneworld"},
  {id: 7, number: "AF22", durationMin: 331, delayMin: 19, seats: 28, airline: "oneworld"},
  {id: 8, number: "UA90", durationMin: 711, delayMin: 130, seats: 19, airline: "star"}
]
```
