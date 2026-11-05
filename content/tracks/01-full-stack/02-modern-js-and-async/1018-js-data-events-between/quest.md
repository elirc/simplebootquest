---
slug: "js-data-events-between"
title: "Data: Events in a capacity range"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Events in a capacity range

Return the names of events whose `capacity` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "Design Jam", capacity: 274, registered: 97, format: "online", free: false},
  {id: 2, name: "Game Night", capacity: 243, registered: 331, format: "hybrid", free: true},
  {id: 3, name: "Startup Night", capacity: 143, registered: 271, format: "in-person", free: true},
  {id: 4, name: "JS Meetup", capacity: 143, registered: 340, format: "in-person", free: true},
  {id: 5, name: "Workshop", capacity: 200, registered: 354, format: "online", free: false},
  {id: 6, name: "Hackathon", capacity: 387, registered: 121, format: "in-person", free: false},
  {id: 7, name: "Career Fair", capacity: 364, registered: 159, format: "in-person", free: true},
  {id: 8, name: "Demo Day", capacity: 117, registered: 275, format: "online", free: false}
]
```
