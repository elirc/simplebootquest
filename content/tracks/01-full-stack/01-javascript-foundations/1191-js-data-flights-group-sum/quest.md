---
slug: "js-data-flights-group-sum"
title: "Data: Total free seats per airline group"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total free seats per airline group

Return an object mapping each `airline` to the **sum** of `seats` for flights in it.

The tests call your function with this data (also available as `FLIGHTS` in the tests):

```js
const FLIGHTS = [
  {id: 1, number: "TK1", durationMin: 125, delayMin: 154, seats: 40, airline: "star"},
  {id: 2, number: "BA117", durationMin: 606, delayMin: 76, seats: 14, airline: "star"},
  {id: 3, number: "LH400", durationMin: 467, delayMin: 79, seats: 45, airline: "oneworld"},
  {id: 4, number: "AF22", durationMin: 195, delayMin: 59, seats: 22, airline: "skyteam"},
  {id: 5, number: "KL641", durationMin: 667, delayMin: 117, seats: 13, airline: "oneworld"},
  {id: 6, number: "AA100", durationMin: 682, delayMin: 19, seats: 35, airline: "skyteam"},
  {id: 7, number: "UA90", durationMin: 407, delayMin: 174, seats: 25, airline: "star"},
  {id: 8, number: "IB6251", durationMin: 541, delayMin: 89, seats: 10, airline: "oneworld"}
]
```
