---
slug: "js-data-events-diff"
title: "Data: What changed between two snapshots?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What changed between two snapshots?

Given yesterday's and today's events (same ids), return the ids whose `capacity` changed, in today's order.

The tests call your function with this data (also available as `BEFORE` / `AFTER` in the tests):

```js
const BEFORE = [
  {id: 1, name: "Demo Day", capacity: 144, registered: 311, format: "in-person", free: false},
  {id: 2, name: "Code Dojo", capacity: 287, registered: 230, format: "hybrid", free: false},
  {id: 3, name: "Design Jam", capacity: 46, registered: 261, format: "hybrid", free: true},
  {id: 4, name: "JS Meetup", capacity: 359, registered: 44, format: "in-person", free: false},
  {id: 5, name: "AI Panel", capacity: 187, registered: 217, format: "in-person", free: true},
  {id: 6, name: "Career Fair", capacity: 141, registered: 24, format: "in-person", free: true},
  {id: 7, name: "Book Club", capacity: 176, registered: 264, format: "hybrid", free: true},
  {id: 8, name: "Startup Night", capacity: 91, registered: 205, format: "in-person", free: false}
]
```
