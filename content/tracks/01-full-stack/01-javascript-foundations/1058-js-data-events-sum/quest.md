---
slug: "js-data-events-sum"
title: "Data: Total registrations of all events"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total registrations of all events

Return the sum of `registered` across all events. An empty list totals 0.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "Code Dojo", capacity: 392, registered: 348, format: "hybrid", free: false},
  {id: 2, name: "AI Panel", capacity: 306, registered: 185, format: "hybrid", free: false},
  {id: 3, name: "Book Club", capacity: 111, registered: 202, format: "hybrid", free: true},
  {id: 4, name: "Open Mic", capacity: 222, registered: 245, format: "hybrid", free: false},
  {id: 5, name: "Hackathon", capacity: 374, registered: 249, format: "in-person", free: false},
  {id: 6, name: "Workshop", capacity: 25, registered: 13, format: "online", free: false},
  {id: 7, name: "Game Night", capacity: 126, registered: 213, format: "in-person", free: false},
  {id: 8, name: "Design Jam", capacity: 326, registered: 93, format: "online", free: false}
]
```
