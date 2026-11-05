---
slug: "ts-data-flights-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `number` and `delayMin` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `FLIGHTS` in the tests):

```js
const FLIGHTS = [
  {id: 1, number: "QF1", durationMin: 557, delayMin: 130, seats: 30, airline: "oneworld"},
  {id: 2, number: "KL641", durationMin: 602, delayMin: 130, seats: 6, airline: "star"},
  {id: 3, number: "LH400", durationMin: 78, delayMin: 99, seats: 23, airline: "skyteam"},
  {id: 4, number: "AF22", durationMin: 561, delayMin: 45, seats: 40, airline: "star"},
  {id: 5, number: "UA90", durationMin: 260, delayMin: 42, seats: 27, airline: "star"},
  {id: 6, number: "BA117", durationMin: 279, delayMin: 7, seats: 30, airline: "skyteam"},
  {id: 7, number: "IB6251", durationMin: 420, delayMin: 35, seats: 36, airline: "star"},
  {id: 8, number: "DL15", durationMin: 592, delayMin: 104, seats: 20, airline: "star"}
]
```

Type the parameters and the return value. The interface is already written for you.
