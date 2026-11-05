---
slug: "debug-events-percent"
title: "Debug: What share of events are free?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: What share of events are free?

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the percentage (0–100, rounded to a whole number) of events where `free` is true. Return 0 for an empty list.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "AI Panel", capacity: 292, registered: 146, format: "in-person", free: true},
  {id: 2, name: "Career Fair", capacity: 70, registered: 113, format: "online", free: true},
  {id: 3, name: "Design Jam", capacity: 28, registered: 68, format: "online", free: true},
  {id: 4, name: "Workshop", capacity: 199, registered: 218, format: "hybrid", free: true},
  {id: 5, name: "Code Dojo", capacity: 256, registered: 7, format: "hybrid", free: false},
  {id: 6, name: "Demo Day", capacity: 347, registered: 240, format: "in-person", free: true},
  {id: 7, name: "Startup Night", capacity: 320, registered: 338, format: "hybrid", free: false},
  {id: 8, name: "Game Night", capacity: 88, registered: 65, format: "hybrid", free: true}
]
```
