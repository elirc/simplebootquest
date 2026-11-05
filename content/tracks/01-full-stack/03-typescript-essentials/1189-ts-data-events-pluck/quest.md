---
slug: "ts-data-events-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `name` and `capacity` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "Workshop", capacity: 64, registered: 337, format: "online", free: true},
  {id: 2, name: "AI Panel", capacity: 197, registered: 290, format: "online", free: true},
  {id: 3, name: "Demo Day", capacity: 125, registered: 156, format: "hybrid", free: false},
  {id: 4, name: "JS Meetup", capacity: 57, registered: 4, format: "online", free: false},
  {id: 5, name: "Design Jam", capacity: 221, registered: 145, format: "in-person", free: false},
  {id: 6, name: "Book Club", capacity: 343, registered: 266, format: "in-person", free: true},
  {id: 7, name: "Hackathon", capacity: 242, registered: 112, format: "online", free: true},
  {id: 8, name: "Startup Night", capacity: 383, registered: 242, format: "online", free: true}
]
```

Type the parameters and the return value. The interface is already written for you.
