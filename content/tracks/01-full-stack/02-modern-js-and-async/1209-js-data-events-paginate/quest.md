---
slug: "js-data-events-paginate"
title: "Data: Paginate events"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Paginate events

Return `{ items, page, totalPages }` where `items` are the names on page `page` (1-based) of size `size`. Out-of-range pages return an empty `items` array.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "Code Dojo", capacity: 237, registered: 27, format: "online", free: false},
  {id: 2, name: "Startup Night", capacity: 306, registered: 248, format: "hybrid", free: false},
  {id: 3, name: "Game Night", capacity: 300, registered: 198, format: "hybrid", free: false},
  {id: 4, name: "Workshop", capacity: 206, registered: 79, format: "in-person", free: true},
  {id: 5, name: "Career Fair", capacity: 79, registered: 260, format: "in-person", free: true},
  {id: 6, name: "Design Jam", capacity: 145, registered: 270, format: "in-person", free: false},
  {id: 7, name: "Open Mic", capacity: 338, registered: 112, format: "hybrid", free: true},
  {id: 8, name: "Hackathon", capacity: 338, registered: 112, format: "online", free: true}
]
```
