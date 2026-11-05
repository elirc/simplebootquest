---
slug: "ts-data-flights-count-cat"
title: "Data: Count flights by airline group"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Count flights by airline group

Return how many flights have `airline` equal to `value`.

The tests call your function with this data (also available as `FLIGHTS` in the tests):

```js
const FLIGHTS = [
  {id: 1, number: "BA117", durationMin: 535, delayMin: 59, seats: 31, airline: "oneworld"},
  {id: 2, number: "QF1", durationMin: 125, delayMin: 142, seats: 12, airline: "oneworld"},
  {id: 3, number: "IB6251", durationMin: 271, delayMin: 173, seats: 17, airline: "star"},
  {id: 4, number: "TK1", durationMin: 517, delayMin: 32, seats: 10, airline: "star"},
  {id: 5, number: "SQ25", durationMin: 97, delayMin: 63, seats: 21, airline: "skyteam"},
  {id: 6, number: "AA100", durationMin: 685, delayMin: 6, seats: 46, airline: "oneworld"},
  {id: 7, number: "KL641", durationMin: 358, delayMin: 13, seats: 47, airline: "star"},
  {id: 8, number: "EK3", durationMin: 401, delayMin: 125, seats: 37, airline: "skyteam"}
]
```

Type the parameters and the return value. The interface is already written for you.
