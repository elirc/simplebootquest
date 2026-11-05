---
slug: "js-data-flights-top-n"
title: "Data: Top flights by free seats"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Top flights by free seats

Return the numbers of the `n` flights with the **highest** `seats`, highest first. Don't mutate the input.

The tests call your function with this data (also available as `FLIGHTS` in the tests):

```js
const FLIGHTS = [
  {id: 1, number: "AA100", durationMin: 603, delayMin: 13, seats: 42, airline: "star"},
  {id: 2, number: "EK3", durationMin: 288, delayMin: 170, seats: 47, airline: "star"},
  {id: 3, number: "SQ25", durationMin: 302, delayMin: 85, seats: 18, airline: "skyteam"},
  {id: 4, number: "IB6251", durationMin: 360, delayMin: 1, seats: 3, airline: "star"},
  {id: 5, number: "DL15", durationMin: 485, delayMin: 158, seats: 42, airline: "oneworld"},
  {id: 6, number: "AF22", durationMin: 561, delayMin: 10, seats: 32, airline: "skyteam"},
  {id: 7, number: "BA117", durationMin: 754, delayMin: 84, seats: 1, airline: "skyteam"},
  {id: 8, number: "KL641", durationMin: 93, delayMin: 176, seats: 48, airline: "skyteam"}
]
```
