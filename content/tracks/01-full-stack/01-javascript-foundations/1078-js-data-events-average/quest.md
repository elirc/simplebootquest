---
slug: "js-data-events-average"
title: "Data: Average registrations"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average registrations

Return the average `registered` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "Design Jam", capacity: 394, registered: 171, format: "in-person", free: true},
  {id: 2, name: "AI Panel", capacity: 140, registered: 342, format: "hybrid", free: false},
  {id: 3, name: "Code Dojo", capacity: 331, registered: 71, format: "online", free: false},
  {id: 4, name: "Startup Night", capacity: 337, registered: 376, format: "hybrid", free: false},
  {id: 5, name: "Open Mic", capacity: 69, registered: 192, format: "in-person", free: false},
  {id: 6, name: "Workshop", capacity: 57, registered: 349, format: "online", free: true},
  {id: 7, name: "Book Club", capacity: 164, registered: 306, format: "hybrid", free: false},
  {id: 8, name: "Career Fair", capacity: 328, registered: 304, format: "hybrid", free: true}
]
```
