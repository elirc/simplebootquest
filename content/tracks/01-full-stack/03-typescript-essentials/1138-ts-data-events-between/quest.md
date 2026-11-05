---
slug: "ts-data-events-between"
title: "Data: Events in a registrations range"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Events in a registrations range

Return the names of events whose `registered` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "Hackathon", capacity: 161, registered: 122, format: "online", free: false},
  {id: 2, name: "Game Night", capacity: 286, registered: 143, format: "in-person", free: true},
  {id: 3, name: "AI Panel", capacity: 264, registered: 313, format: "hybrid", free: false},
  {id: 4, name: "Design Jam", capacity: 283, registered: 314, format: "in-person", free: true},
  {id: 5, name: "JS Meetup", capacity: 393, registered: 191, format: "online", free: false},
  {id: 6, name: "Career Fair", capacity: 388, registered: 169, format: "hybrid", free: true},
  {id: 7, name: "Code Dojo", capacity: 344, registered: 219, format: "in-person", free: true},
  {id: 8, name: "Open Mic", capacity: 217, registered: 34, format: "online", free: false}
]
```

Type the parameters and the return value. The interface is already written for you.
