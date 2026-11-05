---
slug: "js-data-flights-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `number` and `delayMin` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `FLIGHTS` in the tests):

```js
const FLIGHTS = [
  {id: 1, number: "SQ25", durationMin: 787, delayMin: 64, seats: 12, airline: "skyteam"},
  {id: 2, number: "LH400", durationMin: 363, delayMin: 2, seats: 10, airline: "oneworld"},
  {id: 3, number: "AF22", durationMin: 356, delayMin: 44, seats: 48, airline: "oneworld"},
  {id: 4, number: "TK1", durationMin: 127, delayMin: 109, seats: 17, airline: "star"},
  {id: 5, number: "DL15", durationMin: 307, delayMin: 32, seats: 39, airline: "star"},
  {id: 6, number: "BA117", durationMin: 324, delayMin: 59, seats: 16, airline: "oneworld"},
  {id: 7, number: "AA100", durationMin: 681, delayMin: 153, seats: 30, airline: "skyteam"},
  {id: 8, number: "KL641", durationMin: 330, delayMin: 74, seats: 36, airline: "star"}
]
```
