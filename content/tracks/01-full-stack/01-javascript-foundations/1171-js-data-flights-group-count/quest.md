---
slug: "js-data-flights-group-count"
title: "Data: How many flights per airline group?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# How many flights per airline group?

Return an object mapping each `airline` to the number of flights with it. Only include values that appear.

The tests call your function with this data (also available as `FLIGHTS` in the tests):

```js
const FLIGHTS = [
  {id: 1, number: "SQ25", durationMin: 766, delayMin: 117, seats: 35, airline: "star"},
  {id: 2, number: "QF1", durationMin: 648, delayMin: 77, seats: 20, airline: "oneworld"},
  {id: 3, number: "DL15", durationMin: 254, delayMin: 32, seats: 47, airline: "skyteam"},
  {id: 4, number: "AA100", durationMin: 749, delayMin: 140, seats: 29, airline: "star"},
  {id: 5, number: "BA117", durationMin: 401, delayMin: 180, seats: 45, airline: "skyteam"},
  {id: 6, number: "UA90", durationMin: 380, delayMin: 98, seats: 20, airline: "oneworld"},
  {id: 7, number: "EK3", durationMin: 287, delayMin: 70, seats: 43, airline: "oneworld"},
  {id: 8, number: "KL641", durationMin: 234, delayMin: 103, seats: 7, airline: "star"}
]
```
