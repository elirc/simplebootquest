---
slug: "ts-data-flights-between"
title: "Data: Flights in a delay (minutes) range"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Flights in a delay (minutes) range

Return the numbers of flights whose `delayMin` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `FLIGHTS` in the tests):

```js
const FLIGHTS = [
  {id: 1, number: "SQ25", durationMin: 774, delayMin: 136, seats: 1, airline: "star"},
  {id: 2, number: "AF22", durationMin: 632, delayMin: 127, seats: 26, airline: "skyteam"},
  {id: 3, number: "QF1", durationMin: 282, delayMin: 55, seats: 18, airline: "oneworld"},
  {id: 4, number: "EK3", durationMin: 798, delayMin: 82, seats: 13, airline: "oneworld"},
  {id: 5, number: "DL15", durationMin: 222, delayMin: 144, seats: 21, airline: "skyteam"},
  {id: 6, number: "UA90", durationMin: 290, delayMin: 81, seats: 43, airline: "star"},
  {id: 7, number: "BA117", durationMin: 92, delayMin: 71, seats: 18, airline: "skyteam"},
  {id: 8, number: "TK1", durationMin: 341, delayMin: 173, seats: 48, airline: "star"}
]
```

Type the parameters and the return value. The interface is already written for you.
