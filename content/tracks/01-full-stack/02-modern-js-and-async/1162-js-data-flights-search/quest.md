---
slug: "js-data-flights-search"
title: "Data: Search flights by number"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Search flights by number

Return the numbers that **contain** `query`, ignoring case. An empty (or whitespace-only) query returns every number.

The tests call your function with this data (also available as `FLIGHTS` in the tests):

```js
const FLIGHTS = [
  {id: 1, number: "LH400", durationMin: 135, delayMin: 98, seats: 19, airline: "skyteam"},
  {id: 2, number: "AF22", durationMin: 748, delayMin: 62, seats: 11, airline: "oneworld"},
  {id: 3, number: "AA100", durationMin: 744, delayMin: 171, seats: 25, airline: "oneworld"},
  {id: 4, number: "DL15", durationMin: 540, delayMin: 108, seats: 20, airline: "skyteam"},
  {id: 5, number: "QF1", durationMin: 512, delayMin: 57, seats: 17, airline: "skyteam"},
  {id: 6, number: "BA117", durationMin: 83, delayMin: 66, seats: 18, airline: "star"},
  {id: 7, number: "TK1", durationMin: 325, delayMin: 38, seats: 7, airline: "skyteam"},
  {id: 8, number: "KL641", durationMin: 337, delayMin: 144, seats: 41, airline: "skyteam"}
]
```
