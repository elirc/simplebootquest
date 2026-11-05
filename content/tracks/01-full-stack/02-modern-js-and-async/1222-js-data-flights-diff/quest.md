---
slug: "js-data-flights-diff"
title: "Data: What changed between two snapshots?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What changed between two snapshots?

Given yesterday's and today's flights (same ids), return the ids whose `durationMin` changed, in today's order.

The tests call your function with this data (also available as `BEFORE` / `AFTER` in the tests):

```js
const BEFORE = [
  {id: 1, number: "UA90", durationMin: 548, delayMin: 159, seats: 3, airline: "oneworld"},
  {id: 2, number: "SQ25", durationMin: 671, delayMin: 82, seats: 21, airline: "skyteam"},
  {id: 3, number: "DL15", durationMin: 216, delayMin: 44, seats: 15, airline: "oneworld"},
  {id: 4, number: "QF1", durationMin: 684, delayMin: 62, seats: 40, airline: "skyteam"},
  {id: 5, number: "KL641", durationMin: 195, delayMin: 40, seats: 36, airline: "skyteam"},
  {id: 6, number: "AA100", durationMin: 474, delayMin: 3, seats: 22, airline: "skyteam"},
  {id: 7, number: "EK3", durationMin: 678, delayMin: 72, seats: 34, airline: "oneworld"},
  {id: 8, number: "BA117", durationMin: 582, delayMin: 5, seats: 13, airline: "skyteam"}
]
```
