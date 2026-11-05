---
slug: "js-data-events-histogram"
title: "Data: Bucket events by registrations"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Bucket events by registrations

Group events into buckets of width `width` by `registered`: the bucket key is `Math.floor(value / width) * width`. Return an object of bucket → count.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "Workshop", capacity: 365, registered: 197, format: "online", free: false},
  {id: 2, name: "Hackathon", capacity: 103, registered: 346, format: "in-person", free: true},
  {id: 3, name: "AI Panel", capacity: 25, registered: 301, format: "in-person", free: false},
  {id: 4, name: "Code Dojo", capacity: 273, registered: 314, format: "in-person", free: false},
  {id: 5, name: "Book Club", capacity: 294, registered: 24, format: "online", free: true},
  {id: 6, name: "Demo Day", capacity: 170, registered: 285, format: "in-person", free: true},
  {id: 7, name: "Startup Night", capacity: 346, registered: 203, format: "hybrid", free: false},
  {id: 8, name: "Career Fair", capacity: 378, registered: 134, format: "in-person", free: false}
]
```
