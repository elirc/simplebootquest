---
slug: "js-data-events-update"
title: "Data: Update events immutably"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Spread to copy: `{ ...x, field: newValue }`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Update events immutably

Return a **new** array where every event with `format` equal to `value` has `capacity` increased by `amount`. Other events are unchanged. **Don't mutate** the input objects (React state depends on this).

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "Startup Night", capacity: 320, registered: 288, format: "in-person", free: false},
  {id: 2, name: "Open Mic", capacity: 327, registered: 47, format: "online", free: true},
  {id: 3, name: "Workshop", capacity: 289, registered: 124, format: "hybrid", free: false},
  {id: 4, name: "AI Panel", capacity: 311, registered: 191, format: "hybrid", free: false},
  {id: 5, name: "Career Fair", capacity: 195, registered: 52, format: "in-person", free: false},
  {id: 6, name: "Code Dojo", capacity: 97, registered: 305, format: "in-person", free: false},
  {id: 7, name: "Game Night", capacity: 383, registered: 350, format: "in-person", free: false},
  {id: 8, name: "Demo Day", capacity: 75, registered: 59, format: "online", free: false}
]
```
