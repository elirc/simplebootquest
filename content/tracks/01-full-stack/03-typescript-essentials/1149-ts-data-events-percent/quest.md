---
slug: "ts-data-events-percent"
title: "Data: What share of events are free?"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What share of events are free?

Return the percentage (0–100, rounded to a whole number) of events where `free` is true. Return 0 for an empty list.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "AI Panel", capacity: 216, registered: 91, format: "hybrid", free: false},
  {id: 2, name: "Book Club", capacity: 182, registered: 47, format: "hybrid", free: true},
  {id: 3, name: "Career Fair", capacity: 270, registered: 8, format: "in-person", free: true},
  {id: 4, name: "Demo Day", capacity: 342, registered: 280, format: "hybrid", free: true},
  {id: 5, name: "Game Night", capacity: 207, registered: 94, format: "hybrid", free: false},
  {id: 6, name: "Hackathon", capacity: 183, registered: 174, format: "online", free: false},
  {id: 7, name: "Code Dojo", capacity: 107, registered: 268, format: "online", free: false},
  {id: 8, name: "Startup Night", capacity: 365, registered: 81, format: "in-person", free: true}
]
```

Type the parameters and the return value. The interface is already written for you.
