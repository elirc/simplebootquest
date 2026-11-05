---
slug: "ts-data-flights-above"
title: "Data: Flights with a delay (minutes) above a limit"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Flights with a delay (minutes) above a limit

Return the number of every flight whose `delayMin` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `FLIGHTS` in the tests):

```js
const FLIGHTS = [
  {id: 1, number: "QF1", durationMin: 506, delayMin: 152, seats: 46, airline: "oneworld"},
  {id: 2, number: "EK3", durationMin: 122, delayMin: 180, seats: 7, airline: "oneworld"},
  {id: 3, number: "AA100", durationMin: 271, delayMin: 164, seats: 16, airline: "star"},
  {id: 4, number: "KL641", durationMin: 154, delayMin: 62, seats: 1, airline: "star"},
  {id: 5, number: "SQ25", durationMin: 714, delayMin: 106, seats: 43, airline: "skyteam"},
  {id: 6, number: "IB6251", durationMin: 60, delayMin: 52, seats: 33, airline: "skyteam"},
  {id: 7, number: "TK1", durationMin: 555, delayMin: 7, seats: 11, airline: "star"},
  {id: 8, number: "DL15", durationMin: 643, delayMin: 124, seats: 16, airline: "oneworld"}
]
```

Type the parameters and the return value. The interface is already written for you.
