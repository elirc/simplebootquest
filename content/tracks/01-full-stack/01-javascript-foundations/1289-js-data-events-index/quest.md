---
slug: "js-data-events-index"
title: "Data: Index events by id"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Index events by id

Return an object mapping each `id` to the event's name, for fast lookups.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "Code Dojo", capacity: 201, registered: 30, format: "online", free: false},
  {id: 2, name: "Demo Day", capacity: 101, registered: 132, format: "online", free: true},
  {id: 3, name: "Game Night", capacity: 62, registered: 144, format: "in-person", free: false},
  {id: 4, name: "Design Jam", capacity: 320, registered: 178, format: "online", free: false},
  {id: 5, name: "AI Panel", capacity: 24, registered: 377, format: "in-person", free: true},
  {id: 6, name: "Startup Night", capacity: 105, registered: 281, format: "hybrid", free: true},
  {id: 7, name: "Career Fair", capacity: 24, registered: 33, format: "hybrid", free: false},
  {id: 8, name: "Hackathon", capacity: 366, registered: 43, format: "in-person", free: false}
]
```
