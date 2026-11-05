---
slug: "debug-events-top-n"
title: "Debug: Top events by capacity"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Top events by capacity

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes results in the wrong order. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the names of the `n` events with the **highest** `capacity`, highest first. Don't mutate the input.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "Game Night", capacity: 208, registered: 313, format: "hybrid", free: true},
  {id: 2, name: "Demo Day", capacity: 308, registered: 197, format: "hybrid", free: true},
  {id: 3, name: "JS Meetup", capacity: 279, registered: 224, format: "online", free: false},
  {id: 4, name: "Design Jam", capacity: 297, registered: 80, format: "online", free: true},
  {id: 5, name: "Open Mic", capacity: 185, registered: 15, format: "online", free: true},
  {id: 6, name: "Code Dojo", capacity: 105, registered: 167, format: "hybrid", free: true},
  {id: 7, name: "AI Panel", capacity: 102, registered: 295, format: "in-person", free: true},
  {id: 8, name: "Career Fair", capacity: 361, registered: 96, format: "hybrid", free: false}
]
```
