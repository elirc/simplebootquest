---
slug: "js-data-flights-sum"
title: "Data: Total free seats of all flights"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total free seats of all flights

Return the sum of `seats` across all flights. An empty list totals 0.

The tests call your function with this data (also available as `FLIGHTS` in the tests):

```js
const FLIGHTS = [
  {id: 1, number: "SQ25", durationMin: 393, delayMin: 155, seats: 8, airline: "star"},
  {id: 2, number: "EK3", durationMin: 411, delayMin: 52, seats: 5, airline: "star"},
  {id: 3, number: "LH400", durationMin: 478, delayMin: 145, seats: 44, airline: "oneworld"},
  {id: 4, number: "AA100", durationMin: 269, delayMin: 37, seats: 25, airline: "skyteam"},
  {id: 5, number: "AF22", durationMin: 808, delayMin: 54, seats: 6, airline: "star"},
  {id: 6, number: "BA117", durationMin: 249, delayMin: 22, seats: 31, airline: "skyteam"},
  {id: 7, number: "IB6251", durationMin: 687, delayMin: 48, seats: 41, airline: "oneworld"},
  {id: 8, number: "UA90", durationMin: 91, delayMin: 179, seats: 19, airline: "oneworld"}
]
```
