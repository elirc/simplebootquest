---
slug: "js-data-flights-nth"
title: "Data: The n-th flight by free seats"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The n-th flight by free seats

Return the number of the flight ranked `n` (1 = highest `seats`), or `null` if `n` is out of range.

The tests call your function with this data (also available as `FLIGHTS` in the tests):

```js
const FLIGHTS = [
  {id: 1, number: "UA90", durationMin: 659, delayMin: 16, seats: 32, airline: "skyteam"},
  {id: 2, number: "DL15", durationMin: 765, delayMin: 7, seats: 16, airline: "oneworld"},
  {id: 3, number: "SQ25", durationMin: 411, delayMin: 159, seats: 34, airline: "oneworld"},
  {id: 4, number: "AF22", durationMin: 372, delayMin: 53, seats: 7, airline: "oneworld"},
  {id: 5, number: "QF1", durationMin: 618, delayMin: 58, seats: 38, airline: "star"},
  {id: 6, number: "IB6251", durationMin: 518, delayMin: 111, seats: 12, airline: "skyteam"},
  {id: 7, number: "TK1", durationMin: 407, delayMin: 8, seats: 23, airline: "skyteam"},
  {id: 8, number: "LH400", durationMin: 646, delayMin: 54, seats: 6, airline: "star"}
]
```
