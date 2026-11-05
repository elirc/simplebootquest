---
slug: "js-data-events-every-some"
title: "Data: Are all events under a registrations limit?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all events under a registrations limit?

Return `true` if **every** event has `registered` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "AI Panel", capacity: 314, registered: 208, format: "hybrid", free: true},
  {id: 2, name: "Book Club", capacity: 42, registered: 11, format: "online", free: true},
  {id: 3, name: "Design Jam", capacity: 111, registered: 97, format: "hybrid", free: true},
  {id: 4, name: "Hackathon", capacity: 189, registered: 253, format: "in-person", free: false},
  {id: 5, name: "Game Night", capacity: 208, registered: 315, format: "in-person", free: true},
  {id: 6, name: "Startup Night", capacity: 189, registered: 41, format: "in-person", free: false},
  {id: 7, name: "Demo Day", capacity: 229, registered: 164, format: "in-person", free: true},
  {id: 8, name: "Code Dojo", capacity: 264, registered: 285, format: "online", free: false}
]
```
