---
slug: "ts-data-events-above"
title: "Data: Events with a capacity above a limit"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Events with a capacity above a limit

Return the name of every event whose `capacity` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "Hackathon", capacity: 76, registered: 375, format: "in-person", free: false},
  {id: 2, name: "Workshop", capacity: 211, registered: 310, format: "in-person", free: true},
  {id: 3, name: "JS Meetup", capacity: 336, registered: 67, format: "online", free: true},
  {id: 4, name: "Startup Night", capacity: 38, registered: 110, format: "hybrid", free: false},
  {id: 5, name: "Design Jam", capacity: 391, registered: 211, format: "in-person", free: true},
  {id: 6, name: "Book Club", capacity: 128, registered: 169, format: "hybrid", free: true},
  {id: 7, name: "Code Dojo", capacity: 27, registered: 305, format: "hybrid", free: true},
  {id: 8, name: "Game Night", capacity: 248, registered: 91, format: "online", free: true}
]
```

Type the parameters and the return value. The interface is already written for you.
