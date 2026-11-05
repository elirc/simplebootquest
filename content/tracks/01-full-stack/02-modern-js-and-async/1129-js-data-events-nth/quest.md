---
slug: "js-data-events-nth"
title: "Data: The n-th event by capacity"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The n-th event by capacity

Return the name of the event ranked `n` (1 = highest `capacity`), or `null` if `n` is out of range.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "Open Mic", capacity: 216, registered: 7, format: "online", free: true},
  {id: 2, name: "Design Jam", capacity: 151, registered: 210, format: "hybrid", free: true},
  {id: 3, name: "Workshop", capacity: 168, registered: 272, format: "in-person", free: false},
  {id: 4, name: "Demo Day", capacity: 168, registered: 275, format: "online", free: false},
  {id: 5, name: "Code Dojo", capacity: 394, registered: 84, format: "hybrid", free: true},
  {id: 6, name: "AI Panel", capacity: 184, registered: 161, format: "online", free: true},
  {id: 7, name: "Career Fair", capacity: 84, registered: 280, format: "in-person", free: false},
  {id: 8, name: "Game Night", capacity: 146, registered: 236, format: "in-person", free: true}
]
```
