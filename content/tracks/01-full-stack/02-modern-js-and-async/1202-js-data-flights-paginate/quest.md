---
slug: "js-data-flights-paginate"
title: "Data: Paginate flights"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Paginate flights

Return `{ items, page, totalPages }` where `items` are the numbers on page `page` (1-based) of size `size`. Out-of-range pages return an empty `items` array.

The tests call your function with this data (also available as `FLIGHTS` in the tests):

```js
const FLIGHTS = [
  {id: 1, number: "AA100", durationMin: 646, delayMin: 61, seats: 19, airline: "oneworld"},
  {id: 2, number: "KL641", durationMin: 547, delayMin: 173, seats: 1, airline: "oneworld"},
  {id: 3, number: "AF22", durationMin: 638, delayMin: 64, seats: 17, airline: "oneworld"},
  {id: 4, number: "BA117", durationMin: 262, delayMin: 35, seats: 34, airline: "skyteam"},
  {id: 5, number: "IB6251", durationMin: 816, delayMin: 150, seats: 22, airline: "skyteam"},
  {id: 6, number: "TK1", durationMin: 75, delayMin: 20, seats: 7, airline: "skyteam"},
  {id: 7, number: "UA90", durationMin: 609, delayMin: 29, seats: 47, airline: "skyteam"},
  {id: 8, number: "LH400", durationMin: 135, delayMin: 10, seats: 26, airline: "oneworld"}
]
```
