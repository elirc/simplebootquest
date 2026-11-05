---
slug: "ts-data-flights-every-some"
title: "Data: Are all flights under a free seats limit?"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all flights under a free seats limit?

Return `true` if **every** flight has `seats` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `FLIGHTS` in the tests):

```js
const FLIGHTS = [
  {id: 1, number: "DL15", durationMin: 686, delayMin: 109, seats: 7, airline: "oneworld"},
  {id: 2, number: "AA100", durationMin: 201, delayMin: 160, seats: 44, airline: "oneworld"},
  {id: 3, number: "EK3", durationMin: 621, delayMin: 49, seats: 18, airline: "star"},
  {id: 4, number: "BA117", durationMin: 140, delayMin: 121, seats: 28, airline: "oneworld"},
  {id: 5, number: "QF1", durationMin: 746, delayMin: 171, seats: 23, airline: "skyteam"},
  {id: 6, number: "LH400", durationMin: 168, delayMin: 96, seats: 34, airline: "oneworld"},
  {id: 7, number: "KL641", durationMin: 240, delayMin: 60, seats: 1, airline: "oneworld"},
  {id: 8, number: "AF22", durationMin: 315, delayMin: 147, seats: 2, airline: "star"}
]
```

Type the parameters and the return value. The interface is already written for you.
