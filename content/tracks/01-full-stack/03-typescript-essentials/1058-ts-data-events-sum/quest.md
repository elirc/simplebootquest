---
slug: "ts-data-events-sum"
title: "Data: Total capacity of all events"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total capacity of all events

Return the sum of `capacity` across all events. An empty list totals 0.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "Open Mic", capacity: 185, registered: 129, format: "in-person", free: true},
  {id: 2, name: "Game Night", capacity: 254, registered: 209, format: "online", free: false},
  {id: 3, name: "AI Panel", capacity: 111, registered: 200, format: "hybrid", free: false},
  {id: 4, name: "Career Fair", capacity: 281, registered: 181, format: "hybrid", free: true},
  {id: 5, name: "Hackathon", capacity: 79, registered: 183, format: "in-person", free: false},
  {id: 6, name: "Book Club", capacity: 141, registered: 251, format: "hybrid", free: true},
  {id: 7, name: "Design Jam", capacity: 67, registered: 33, format: "in-person", free: false},
  {id: 8, name: "JS Meetup", capacity: 124, registered: 277, format: "online", free: false}
]
```

Type the parameters and the return value. The interface is already written for you.
