---
slug: "js-data-flights-chain"
title: "Data: Filter, sort, map: flights in one airline group"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Filter, sort, map: flights in one airline group

Return the numbers of flights whose `airline` equals `value`, sorted by `delayMin` **highest first**. One chain of array methods is enough.

The tests call your function with this data (also available as `FLIGHTS` in the tests):

```js
const FLIGHTS = [
  {id: 1, number: "KL641", durationMin: 205, delayMin: 148, seats: 27, airline: "oneworld"},
  {id: 2, number: "TK1", durationMin: 434, delayMin: 68, seats: 37, airline: "star"},
  {id: 3, number: "DL15", durationMin: 815, delayMin: 86, seats: 33, airline: "star"},
  {id: 4, number: "IB6251", durationMin: 562, delayMin: 86, seats: 7, airline: "oneworld"},
  {id: 5, number: "LH400", durationMin: 670, delayMin: 74, seats: 34, airline: "oneworld"},
  {id: 6, number: "EK3", durationMin: 720, delayMin: 39, seats: 41, airline: "skyteam"},
  {id: 7, number: "SQ25", durationMin: 89, delayMin: 152, seats: 2, airline: "oneworld"},
  {id: 8, number: "AA100", durationMin: 757, delayMin: 101, seats: 21, airline: "skyteam"}
]
```
