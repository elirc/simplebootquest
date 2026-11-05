---
slug: "js-data-events-search"
title: "Data: Search events by name"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Search events by name

Return the names that **contain** `query`, ignoring case. An empty (or whitespace-only) query returns every name.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "Hackathon", capacity: 378, registered: 59, format: "hybrid", free: true},
  {id: 2, name: "Book Club", capacity: 287, registered: 201, format: "in-person", free: false},
  {id: 3, name: "JS Meetup", capacity: 226, registered: 271, format: "hybrid", free: false},
  {id: 4, name: "Career Fair", capacity: 278, registered: 135, format: "hybrid", free: false},
  {id: 5, name: "Open Mic", capacity: 193, registered: 321, format: "hybrid", free: false},
  {id: 6, name: "Code Dojo", capacity: 209, registered: 359, format: "hybrid", free: true},
  {id: 7, name: "Startup Night", capacity: 162, registered: 195, format: "online", free: false},
  {id: 8, name: "Workshop", capacity: 110, registered: 375, format: "online", free: true}
]
```
