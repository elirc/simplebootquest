---
slug: "js-data-flights-sort-asc"
title: "Data: Sort flights by delay (minutes)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["`[...array].sort(...)` copies first, so the original stays untouched.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Sort flights by delay (minutes)

Return the numbers sorted by `delayMin` from **lowest to highest**. Ties keep their original order. Don't mutate the input array.

The tests call your function with this data (also available as `FLIGHTS` in the tests):

```js
const FLIGHTS = [
  {id: 1, number: "UA90", durationMin: 204, delayMin: 76, seats: 46, airline: "skyteam"},
  {id: 2, number: "AF22", durationMin: 402, delayMin: 65, seats: 5, airline: "oneworld"},
  {id: 3, number: "KL641", durationMin: 168, delayMin: 36, seats: 4, airline: "skyteam"},
  {id: 4, number: "BA117", durationMin: 199, delayMin: 54, seats: 41, airline: "skyteam"},
  {id: 5, number: "QF1", durationMin: 414, delayMin: 96, seats: 27, airline: "oneworld"},
  {id: 6, number: "AA100", durationMin: 627, delayMin: 89, seats: 24, airline: "skyteam"},
  {id: 7, number: "EK3", durationMin: 556, delayMin: 48, seats: 7, airline: "oneworld"},
  {id: 8, number: "DL15", durationMin: 837, delayMin: 155, seats: 35, airline: "skyteam"}
]
```
