---
slug: "js-data-events-percent"
title: "Data: What share of events are free?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What share of events are free?

Return the percentage (0–100, rounded to a whole number) of events where `free` is true. Return 0 for an empty list.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "Book Club", capacity: 250, registered: 36, format: "online", free: true},
  {id: 2, name: "Workshop", capacity: 103, registered: 32, format: "hybrid", free: true},
  {id: 3, name: "Open Mic", capacity: 85, registered: 50, format: "online", free: false},
  {id: 4, name: "JS Meetup", capacity: 178, registered: 148, format: "hybrid", free: false},
  {id: 5, name: "Design Jam", capacity: 140, registered: 298, format: "in-person", free: false},
  {id: 6, name: "AI Panel", capacity: 258, registered: 278, format: "online", free: true},
  {id: 7, name: "Code Dojo", capacity: 356, registered: 300, format: "in-person", free: false},
  {id: 8, name: "Hackathon", capacity: 392, registered: 334, format: "in-person", free: false}
]
```
