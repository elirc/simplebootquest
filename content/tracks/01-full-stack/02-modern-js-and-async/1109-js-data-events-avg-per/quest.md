---
slug: "js-data-events-avg-per"
title: "Data: Average capacity per format"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average capacity per format

Return an object mapping each `format` to the average `capacity` of its events, rounded to a whole number.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "Startup Night", capacity: 135, registered: 49, format: "hybrid", free: true},
  {id: 2, name: "JS Meetup", capacity: 346, registered: 263, format: "online", free: false},
  {id: 3, name: "Game Night", capacity: 319, registered: 219, format: "hybrid", free: false},
  {id: 4, name: "Demo Day", capacity: 121, registered: 22, format: "hybrid", free: true},
  {id: 5, name: "AI Panel", capacity: 136, registered: 181, format: "hybrid", free: false},
  {id: 6, name: "Career Fair", capacity: 99, registered: 119, format: "in-person", free: false},
  {id: 7, name: "Hackathon", capacity: 345, registered: 198, format: "in-person", free: true},
  {id: 8, name: "Book Club", capacity: 179, registered: 155, format: "in-person", free: true}
]
```
