---
slug: "js-data-flights-lookup"
title: "Data: Look up a flight's duration (minutes)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Look up a flight's duration (minutes)

Return the `durationMin` of the flight whose number is `number`, or `null` if there isn't one.

The tests call your function with this data (also available as `FLIGHTS` in the tests):

```js
const FLIGHTS = [
  {id: 1, number: "UA90", durationMin: 288, delayMin: 85, seats: 11, airline: "oneworld"},
  {id: 2, number: "EK3", durationMin: 94, delayMin: 34, seats: 7, airline: "star"},
  {id: 3, number: "IB6251", durationMin: 334, delayMin: 154, seats: 21, airline: "oneworld"},
  {id: 4, number: "AF22", durationMin: 835, delayMin: 122, seats: 29, airline: "star"},
  {id: 5, number: "AA100", durationMin: 210, delayMin: 88, seats: 1, airline: "skyteam"},
  {id: 6, number: "KL641", durationMin: 733, delayMin: 128, seats: 0, airline: "star"},
  {id: 7, number: "BA117", durationMin: 295, delayMin: 71, seats: 31, airline: "star"},
  {id: 8, number: "QF1", durationMin: 764, delayMin: 107, seats: 1, airline: "oneworld"}
]
```
