---
slug: "ts-data-events-count-cat"
title: "Data: Count events by format"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Count events by format

Return how many events have `format` equal to `value`.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "Book Club", capacity: 287, registered: 95, format: "hybrid", free: false},
  {id: 2, name: "Hackathon", capacity: 358, registered: 171, format: "hybrid", free: true},
  {id: 3, name: "Open Mic", capacity: 316, registered: 42, format: "online", free: false},
  {id: 4, name: "Career Fair", capacity: 158, registered: 148, format: "in-person", free: false},
  {id: 5, name: "Code Dojo", capacity: 21, registered: 3, format: "online", free: true},
  {id: 6, name: "AI Panel", capacity: 301, registered: 149, format: "in-person", free: false},
  {id: 7, name: "Design Jam", capacity: 259, registered: 51, format: "online", free: true},
  {id: 8, name: "Startup Night", capacity: 151, registered: 368, format: "in-person", free: false}
]
```

Type the parameters and the return value. The interface is already written for you.
