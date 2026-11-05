---
slug: "js-data-flights-format"
title: "Data: Format flights as labels"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Format flights as labels

Return one string per flight: `"<number> (<durationMin>)"`, e.g. `"AF22 (126)"`.

The tests call your function with this data (also available as `FLIGHTS` in the tests):

```js
const FLIGHTS = [
  {id: 1, number: "AF22", durationMin: 126, delayMin: 64, seats: 22, airline: "oneworld"},
  {id: 2, number: "IB6251", durationMin: 638, delayMin: 11, seats: 14, airline: "oneworld"},
  {id: 3, number: "LH400", durationMin: 819, delayMin: 135, seats: 38, airline: "oneworld"},
  {id: 4, number: "UA90", durationMin: 508, delayMin: 2, seats: 21, airline: "oneworld"},
  {id: 5, number: "QF1", durationMin: 752, delayMin: 132, seats: 44, airline: "oneworld"},
  {id: 6, number: "KL641", durationMin: 394, delayMin: 107, seats: 41, airline: "star"},
  {id: 7, number: "TK1", durationMin: 215, delayMin: 50, seats: 2, airline: "skyteam"},
  {id: 8, number: "SQ25", durationMin: 135, delayMin: 137, seats: 10, airline: "star"}
]
```
