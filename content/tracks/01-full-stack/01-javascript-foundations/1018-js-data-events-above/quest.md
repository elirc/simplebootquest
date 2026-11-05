---
slug: "js-data-events-above"
title: "Data: Events with a registrations above a limit"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Events with a registrations above a limit

Return the name of every event whose `registered` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "Open Mic", capacity: 30, registered: 44, format: "online", free: false},
  {id: 2, name: "Game Night", capacity: 153, registered: 273, format: "in-person", free: true},
  {id: 3, name: "JS Meetup", capacity: 266, registered: 368, format: "hybrid", free: false},
  {id: 4, name: "Design Jam", capacity: 27, registered: 256, format: "online", free: false},
  {id: 5, name: "Book Club", capacity: 39, registered: 31, format: "hybrid", free: false},
  {id: 6, name: "Code Dojo", capacity: 235, registered: 167, format: "in-person", free: true},
  {id: 7, name: "Startup Night", capacity: 31, registered: 111, format: "in-person", free: true},
  {id: 8, name: "Workshop", capacity: 230, registered: 330, format: "in-person", free: false}
]
```
