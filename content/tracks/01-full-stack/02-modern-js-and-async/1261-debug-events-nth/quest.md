---
slug: "debug-events-nth"
title: "Debug: The n-th event by registrations"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: The n-th event by registrations

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the name of the event ranked `n` (1 = highest `registered`), or `null` if `n` is out of range.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "Open Mic", capacity: 343, registered: 77, format: "online", free: true},
  {id: 2, name: "Startup Night", capacity: 286, registered: 91, format: "hybrid", free: false},
  {id: 3, name: "Game Night", capacity: 41, registered: 360, format: "hybrid", free: false},
  {id: 4, name: "Career Fair", capacity: 156, registered: 302, format: "in-person", free: false},
  {id: 5, name: "Book Club", capacity: 329, registered: 262, format: "hybrid", free: false},
  {id: 6, name: "Design Jam", capacity: 237, registered: 193, format: "online", free: true},
  {id: 7, name: "Hackathon", capacity: 262, registered: 117, format: "in-person", free: true},
  {id: 8, name: "JS Meetup", capacity: 103, registered: 260, format: "online", free: true}
]
```
