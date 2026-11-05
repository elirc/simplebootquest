---
slug: "js-data-events-unique"
title: "Data: Distinct format values"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Distinct format values

Return every distinct `format` that appears, sorted alphabetically.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "AI Panel", capacity: 219, registered: 35, format: "hybrid", free: true},
  {id: 2, name: "Code Dojo", capacity: 311, registered: 47, format: "online", free: true},
  {id: 3, name: "Book Club", capacity: 338, registered: 230, format: "online", free: false},
  {id: 4, name: "Open Mic", capacity: 339, registered: 289, format: "in-person", free: true},
  {id: 5, name: "Game Night", capacity: 174, registered: 73, format: "online", free: false},
  {id: 6, name: "Design Jam", capacity: 218, registered: 265, format: "online", free: false},
  {id: 7, name: "Hackathon", capacity: 204, registered: 186, format: "hybrid", free: true},
  {id: 8, name: "JS Meetup", capacity: 114, registered: 331, format: "in-person", free: false}
]
```
