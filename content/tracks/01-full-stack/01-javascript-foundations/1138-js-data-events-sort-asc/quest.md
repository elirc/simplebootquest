---
slug: "js-data-events-sort-asc"
title: "Data: Sort events by capacity"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["`[...array].sort(...)` copies first, so the original stays untouched.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Sort events by capacity

Return the names sorted by `capacity` from **lowest to highest**. Ties keep their original order. Don't mutate the input array.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "Demo Day", capacity: 252, registered: 343, format: "hybrid", free: false},
  {id: 2, name: "Open Mic", capacity: 366, registered: 194, format: "hybrid", free: false},
  {id: 3, name: "Game Night", capacity: 39, registered: 198, format: "hybrid", free: true},
  {id: 4, name: "Code Dojo", capacity: 397, registered: 29, format: "in-person", free: false},
  {id: 5, name: "Career Fair", capacity: 397, registered: 181, format: "hybrid", free: false},
  {id: 6, name: "Design Jam", capacity: 310, registered: 349, format: "in-person", free: true},
  {id: 7, name: "JS Meetup", capacity: 67, registered: 178, format: "in-person", free: false},
  {id: 8, name: "Workshop", capacity: 368, registered: 80, format: "in-person", free: false}
]
```
