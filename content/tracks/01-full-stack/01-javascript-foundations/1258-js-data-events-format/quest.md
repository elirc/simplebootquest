---
slug: "js-data-events-format"
title: "Data: Format events as labels"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Format events as labels

Return one string per event: `"<name> (<registered>)"`, e.g. `"Startup Night (317)"`.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "Startup Night", capacity: 206, registered: 317, format: "in-person", free: false},
  {id: 2, name: "Book Club", capacity: 34, registered: 338, format: "in-person", free: false},
  {id: 3, name: "Workshop", capacity: 58, registered: 108, format: "online", free: false},
  {id: 4, name: "Design Jam", capacity: 324, registered: 63, format: "in-person", free: false},
  {id: 5, name: "Open Mic", capacity: 43, registered: 164, format: "in-person", free: false},
  {id: 6, name: "Code Dojo", capacity: 86, registered: 363, format: "online", free: false},
  {id: 7, name: "Career Fair", capacity: 91, registered: 298, format: "hybrid", free: true},
  {id: 8, name: "Game Night", capacity: 341, registered: 49, format: "hybrid", free: false}
]
```
