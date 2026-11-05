---
slug: "js-data-events-chain"
title: "Data: Filter, sort, map: events in one format"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Filter, sort, map: events in one format

Return the names of events whose `format` equals `value`, sorted by `capacity` **highest first**. One chain of array methods is enough.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "Hackathon", capacity: 379, registered: 101, format: "hybrid", free: true},
  {id: 2, name: "Open Mic", capacity: 309, registered: 36, format: "hybrid", free: false},
  {id: 3, name: "Design Jam", capacity: 44, registered: 347, format: "online", free: true},
  {id: 4, name: "Demo Day", capacity: 40, registered: 125, format: "online", free: false},
  {id: 5, name: "Startup Night", capacity: 89, registered: 4, format: "in-person", free: false},
  {id: 6, name: "Game Night", capacity: 143, registered: 175, format: "online", free: true},
  {id: 7, name: "AI Panel", capacity: 128, registered: 343, format: "hybrid", free: true},
  {id: 8, name: "Book Club", capacity: 263, registered: 308, format: "in-person", free: true}
]
```
