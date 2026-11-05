---
slug: "js-data-flights-max"
title: "Data: The flight with the highest delay (minutes)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The flight with the highest delay (minutes)

Return the number of the flight with the **highest** `delayMin`. If several tie, return the first. Return `null` for an empty list.

The tests call your function with this data (also available as `FLIGHTS` in the tests):

```js
const FLIGHTS = [
  {id: 1, number: "TK1", durationMin: 361, delayMin: 109, seats: 26, airline: "oneworld"},
  {id: 2, number: "QF1", durationMin: 258, delayMin: 84, seats: 36, airline: "oneworld"},
  {id: 3, number: "SQ25", durationMin: 634, delayMin: 85, seats: 31, airline: "star"},
  {id: 4, number: "BA117", durationMin: 766, delayMin: 78, seats: 34, airline: "skyteam"},
  {id: 5, number: "AA100", durationMin: 775, delayMin: 102, seats: 1, airline: "star"},
  {id: 6, number: "UA90", durationMin: 422, delayMin: 120, seats: 36, airline: "star"},
  {id: 7, number: "KL641", durationMin: 113, delayMin: 147, seats: 30, airline: "star"},
  {id: 8, number: "IB6251", durationMin: 108, delayMin: 114, seats: 3, airline: "oneworld"}
]
```
