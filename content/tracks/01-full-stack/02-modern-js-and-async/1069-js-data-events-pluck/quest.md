---
slug: "js-data-events-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `name` and `capacity` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "Hackathon", capacity: 283, registered: 270, format: "hybrid", free: false},
  {id: 2, name: "Workshop", capacity: 251, registered: 359, format: "hybrid", free: false},
  {id: 3, name: "Career Fair", capacity: 27, registered: 62, format: "in-person", free: true},
  {id: 4, name: "Book Club", capacity: 308, registered: 373, format: "online", free: true},
  {id: 5, name: "Design Jam", capacity: 86, registered: 143, format: "online", free: true},
  {id: 6, name: "Demo Day", capacity: 102, registered: 196, format: "online", free: true},
  {id: 7, name: "Startup Night", capacity: 29, registered: 158, format: "online", free: true},
  {id: 8, name: "JS Meetup", capacity: 108, registered: 69, format: "hybrid", free: true}
]
```
