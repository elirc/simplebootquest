---
slug: "js-data-flights-above"
title: "Data: Flights with a duration (minutes) above a limit"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Flights with a duration (minutes) above a limit

Return the number of every flight whose `durationMin` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `FLIGHTS` in the tests):

```js
const FLIGHTS = [
  {id: 1, number: "IB6251", durationMin: 55, delayMin: 153, seats: 29, airline: "skyteam"},
  {id: 2, number: "SQ25", durationMin: 475, delayMin: 95, seats: 47, airline: "oneworld"},
  {id: 3, number: "TK1", durationMin: 205, delayMin: 51, seats: 3, airline: "star"},
  {id: 4, number: "DL15", durationMin: 381, delayMin: 57, seats: 25, airline: "skyteam"},
  {id: 5, number: "BA117", durationMin: 188, delayMin: 2, seats: 24, airline: "star"},
  {id: 6, number: "LH400", durationMin: 85, delayMin: 121, seats: 33, airline: "oneworld"},
  {id: 7, number: "QF1", durationMin: 675, delayMin: 155, seats: 9, airline: "star"},
  {id: 8, number: "AF22", durationMin: 165, delayMin: 3, seats: 11, airline: "skyteam"}
]
```
