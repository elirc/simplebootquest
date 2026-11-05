---
slug: "js-data-events-min"
title: "Data: The event with the lowest registrations"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The event with the lowest registrations

Return the name of the event with the **lowest** `registered` (first one on ties), or `null` for an empty list.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "JS Meetup", capacity: 174, registered: 372, format: "in-person", free: true},
  {id: 2, name: "Game Night", capacity: 197, registered: 262, format: "in-person", free: true},
  {id: 3, name: "Hackathon", capacity: 252, registered: 165, format: "hybrid", free: true},
  {id: 4, name: "Startup Night", capacity: 271, registered: 363, format: "in-person", free: false},
  {id: 5, name: "Workshop", capacity: 256, registered: 218, format: "in-person", free: false},
  {id: 6, name: "Open Mic", capacity: 81, registered: 298, format: "in-person", free: true},
  {id: 7, name: "Book Club", capacity: 71, registered: 34, format: "in-person", free: false},
  {id: 8, name: "Design Jam", capacity: 28, registered: 287, format: "in-person", free: false}
]
```
