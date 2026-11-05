---
slug: "js-data-flights-index"
title: "Data: Index flights by id"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Index flights by id

Return an object mapping each `id` to the flight's number, for fast lookups.

The tests call your function with this data (also available as `FLIGHTS` in the tests):

```js
const FLIGHTS = [
  {id: 1, number: "EK3", durationMin: 559, delayMin: 104, seats: 41, airline: "star"},
  {id: 2, number: "KL641", durationMin: 99, delayMin: 20, seats: 34, airline: "oneworld"},
  {id: 3, number: "AA100", durationMin: 76, delayMin: 11, seats: 25, airline: "star"},
  {id: 4, number: "AF22", durationMin: 678, delayMin: 34, seats: 20, airline: "star"},
  {id: 5, number: "SQ25", durationMin: 258, delayMin: 25, seats: 21, airline: "skyteam"},
  {id: 6, number: "BA117", durationMin: 670, delayMin: 37, seats: 48, airline: "star"},
  {id: 7, number: "DL15", durationMin: 514, delayMin: 2, seats: 34, airline: "star"},
  {id: 8, number: "TK1", durationMin: 504, delayMin: 123, seats: 34, airline: "skyteam"}
]
```
