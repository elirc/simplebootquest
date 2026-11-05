---
slug: "js-data-events-count-cat"
title: "Data: Count events by format"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Count events by format

Return how many events have `format` equal to `value`.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "Hackathon", capacity: 185, registered: 96, format: "online", free: true},
  {id: 2, name: "AI Panel", capacity: 380, registered: 72, format: "online", free: true},
  {id: 3, name: "Demo Day", capacity: 96, registered: 156, format: "in-person", free: true},
  {id: 4, name: "Open Mic", capacity: 210, registered: 329, format: "hybrid", free: false},
  {id: 5, name: "Book Club", capacity: 116, registered: 310, format: "hybrid", free: false},
  {id: 6, name: "Career Fair", capacity: 357, registered: 98, format: "in-person", free: false},
  {id: 7, name: "JS Meetup", capacity: 345, registered: 305, format: "hybrid", free: true},
  {id: 8, name: "Game Night", capacity: 170, registered: 113, format: "online", free: false}
]
```
