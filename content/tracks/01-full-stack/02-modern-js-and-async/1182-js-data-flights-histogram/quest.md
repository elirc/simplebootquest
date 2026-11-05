---
slug: "js-data-flights-histogram"
title: "Data: Bucket flights by delay (minutes)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Bucket flights by delay (minutes)

Group flights into buckets of width `width` by `delayMin`: the bucket key is `Math.floor(value / width) * width`. Return an object of bucket → count.

The tests call your function with this data (also available as `FLIGHTS` in the tests):

```js
const FLIGHTS = [
  {id: 1, number: "SQ25", durationMin: 61, delayMin: 122, seats: 38, airline: "skyteam"},
  {id: 2, number: "IB6251", durationMin: 185, delayMin: 106, seats: 10, airline: "skyteam"},
  {id: 3, number: "AA100", durationMin: 280, delayMin: 178, seats: 38, airline: "skyteam"},
  {id: 4, number: "AF22", durationMin: 800, delayMin: 15, seats: 10, airline: "skyteam"},
  {id: 5, number: "DL15", durationMin: 512, delayMin: 123, seats: 10, airline: "skyteam"},
  {id: 6, number: "KL641", durationMin: 589, delayMin: 5, seats: 19, airline: "star"},
  {id: 7, number: "BA117", durationMin: 115, delayMin: 89, seats: 13, airline: "oneworld"},
  {id: 8, number: "TK1", durationMin: 736, delayMin: 67, seats: 40, airline: "oneworld"}
]
```
