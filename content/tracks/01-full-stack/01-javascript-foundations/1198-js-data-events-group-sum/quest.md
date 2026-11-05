---
slug: "js-data-events-group-sum"
title: "Data: Total capacity per format"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total capacity per format

Return an object mapping each `format` to the **sum** of `capacity` for events in it.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "Hackathon", capacity: 206, registered: 128, format: "in-person", free: true},
  {id: 2, name: "Book Club", capacity: 249, registered: 300, format: "in-person", free: false},
  {id: 3, name: "Game Night", capacity: 182, registered: 167, format: "in-person", free: false},
  {id: 4, name: "Career Fair", capacity: 98, registered: 350, format: "online", free: true},
  {id: 5, name: "Code Dojo", capacity: 286, registered: 240, format: "online", free: false},
  {id: 6, name: "Demo Day", capacity: 157, registered: 241, format: "hybrid", free: false},
  {id: 7, name: "Startup Night", capacity: 117, registered: 320, format: "online", free: true},
  {id: 8, name: "JS Meetup", capacity: 75, registered: 32, format: "in-person", free: true}
]
```
