---
slug: "js-data-events-group-count"
title: "Data: How many events per format?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# How many events per format?

Return an object mapping each `format` to the number of events with it. Only include values that appear.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "Code Dojo", capacity: 297, registered: 179, format: "in-person", free: false},
  {id: 2, name: "Workshop", capacity: 139, registered: 92, format: "online", free: false},
  {id: 3, name: "Game Night", capacity: 89, registered: 41, format: "in-person", free: false},
  {id: 4, name: "JS Meetup", capacity: 262, registered: 229, format: "hybrid", free: false},
  {id: 5, name: "Open Mic", capacity: 280, registered: 85, format: "online", free: false},
  {id: 6, name: "Hackathon", capacity: 337, registered: 136, format: "hybrid", free: false},
  {id: 7, name: "Book Club", capacity: 350, registered: 44, format: "hybrid", free: false},
  {id: 8, name: "Career Fair", capacity: 204, registered: 218, format: "online", free: true}
]
```
