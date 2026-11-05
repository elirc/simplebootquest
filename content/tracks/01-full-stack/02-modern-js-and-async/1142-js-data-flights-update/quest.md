---
slug: "js-data-flights-update"
title: "Data: Update flights immutably"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Spread to copy: `{ ...x, field: newValue }`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Update flights immutably

Return a **new** array where every flight with `airline` equal to `value` has `durationMin` increased by `amount`. Other flights are unchanged. **Don't mutate** the input objects (React state depends on this).

The tests call your function with this data (also available as `FLIGHTS` in the tests):

```js
const FLIGHTS = [
  {id: 1, number: "IB6251", durationMin: 588, delayMin: 17, seats: 35, airline: "oneworld"},
  {id: 2, number: "SQ25", durationMin: 631, delayMin: 2, seats: 3, airline: "star"},
  {id: 3, number: "UA90", durationMin: 158, delayMin: 69, seats: 15, airline: "star"},
  {id: 4, number: "EK3", durationMin: 345, delayMin: 141, seats: 22, airline: "skyteam"},
  {id: 5, number: "BA117", durationMin: 635, delayMin: 123, seats: 36, airline: "star"},
  {id: 6, number: "LH400", durationMin: 790, delayMin: 150, seats: 20, airline: "star"},
  {id: 7, number: "TK1", durationMin: 246, delayMin: 102, seats: 1, airline: "skyteam"},
  {id: 8, number: "KL641", durationMin: 528, delayMin: 5, seats: 2, airline: "star"}
]
```
