---
slug: "ts-data-flights-max"
title: "Data: The flight with the highest free seats"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The flight with the highest free seats

Return the number of the flight with the **highest** `seats`. If several tie, return the first. Return `null` for an empty list.

The tests call your function with this data (also available as `FLIGHTS` in the tests):

```js
const FLIGHTS = [
  {id: 1, number: "UA90", durationMin: 660, delayMin: 161, seats: 34, airline: "star"},
  {id: 2, number: "AA100", durationMin: 695, delayMin: 13, seats: 45, airline: "star"},
  {id: 3, number: "DL15", durationMin: 685, delayMin: 70, seats: 44, airline: "skyteam"},
  {id: 4, number: "LH400", durationMin: 319, delayMin: 41, seats: 15, airline: "oneworld"},
  {id: 5, number: "QF1", durationMin: 580, delayMin: 139, seats: 21, airline: "skyteam"},
  {id: 6, number: "KL641", durationMin: 787, delayMin: 6, seats: 5, airline: "skyteam"},
  {id: 7, number: "IB6251", durationMin: 732, delayMin: 20, seats: 5, airline: "oneworld"},
  {id: 8, number: "SQ25", durationMin: 671, delayMin: 40, seats: 13, airline: "skyteam"}
]
```

Type the parameters and the return value. The interface is already written for you.
