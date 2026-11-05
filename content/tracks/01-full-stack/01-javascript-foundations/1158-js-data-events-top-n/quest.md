---
slug: "js-data-events-top-n"
title: "Data: Top events by capacity"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Top events by capacity

Return the names of the `n` events with the **highest** `capacity`, highest first. Don't mutate the input.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "Code Dojo", capacity: 110, registered: 41, format: "online", free: true},
  {id: 2, name: "Open Mic", capacity: 214, registered: 335, format: "online", free: false},
  {id: 3, name: "JS Meetup", capacity: 169, registered: 93, format: "online", free: true},
  {id: 4, name: "AI Panel", capacity: 115, registered: 197, format: "hybrid", free: true},
  {id: 5, name: "Game Night", capacity: 251, registered: 329, format: "hybrid", free: false},
  {id: 6, name: "Design Jam", capacity: 385, registered: 215, format: "online", free: false},
  {id: 7, name: "Career Fair", capacity: 299, registered: 94, format: "in-person", free: false},
  {id: 8, name: "Workshop", capacity: 108, registered: 234, format: "hybrid", free: true}
]
```
