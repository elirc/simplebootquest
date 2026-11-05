---
slug: "js-data-events-partition"
title: "Data: Split events by \"free\""
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Split events by "free"

Return `{ yes, no }`: the names of events where `free` is true, and those where it's false. Keep the original order.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "Startup Night", capacity: 44, registered: 301, format: "hybrid", free: true},
  {id: 2, name: "Design Jam", capacity: 363, registered: 363, format: "hybrid", free: true},
  {id: 3, name: "JS Meetup", capacity: 352, registered: 275, format: "in-person", free: true},
  {id: 4, name: "Open Mic", capacity: 78, registered: 307, format: "hybrid", free: true},
  {id: 5, name: "Code Dojo", capacity: 175, registered: 168, format: "online", free: false},
  {id: 6, name: "Book Club", capacity: 333, registered: 145, format: "online", free: false},
  {id: 7, name: "Career Fair", capacity: 195, registered: 87, format: "hybrid", free: false},
  {id: 8, name: "AI Panel", capacity: 81, registered: 248, format: "hybrid", free: false}
]
```
