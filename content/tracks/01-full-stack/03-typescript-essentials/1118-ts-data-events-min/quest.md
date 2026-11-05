---
slug: "ts-data-events-min"
title: "Data: The event with the lowest capacity"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The event with the lowest capacity

Return the name of the event with the **lowest** `capacity` (first one on ties), or `null` for an empty list.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "Career Fair", capacity: 45, registered: 359, format: "in-person", free: true},
  {id: 2, name: "Code Dojo", capacity: 355, registered: 188, format: "online", free: false},
  {id: 3, name: "Design Jam", capacity: 110, registered: 206, format: "hybrid", free: false},
  {id: 4, name: "Startup Night", capacity: 43, registered: 63, format: "online", free: false},
  {id: 5, name: "Workshop", capacity: 140, registered: 57, format: "in-person", free: false},
  {id: 6, name: "JS Meetup", capacity: 245, registered: 34, format: "in-person", free: true},
  {id: 7, name: "Game Night", capacity: 231, registered: 262, format: "hybrid", free: true},
  {id: 8, name: "Open Mic", capacity: 115, registered: 339, format: "in-person", free: false}
]
```

Type the parameters and the return value. The interface is already written for you.
