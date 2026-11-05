---
slug: "ts-data-events-every-some"
title: "Data: Are all events under a registrations limit?"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all events under a registrations limit?

Return `true` if **every** event has `registered` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "Demo Day", capacity: 328, registered: 57, format: "online", free: false},
  {id: 2, name: "Hackathon", capacity: 378, registered: 195, format: "in-person", free: true},
  {id: 3, name: "AI Panel", capacity: 180, registered: 93, format: "in-person", free: false},
  {id: 4, name: "Startup Night", capacity: 372, registered: 58, format: "online", free: true},
  {id: 5, name: "JS Meetup", capacity: 284, registered: 98, format: "hybrid", free: false},
  {id: 6, name: "Code Dojo", capacity: 50, registered: 332, format: "online", free: true},
  {id: 7, name: "Open Mic", capacity: 381, registered: 163, format: "hybrid", free: true},
  {id: 8, name: "Book Club", capacity: 390, registered: 352, format: "online", free: true}
]
```

Type the parameters and the return value. The interface is already written for you.
