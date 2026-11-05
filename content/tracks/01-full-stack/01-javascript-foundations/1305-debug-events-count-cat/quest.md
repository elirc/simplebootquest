---
slug: "debug-events-count-cat"
title: "Debug: Count events by format"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Count events by format

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return how many events have `format` equal to `value`.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "Open Mic", capacity: 229, registered: 73, format: "online", free: false},
  {id: 2, name: "Demo Day", capacity: 77, registered: 314, format: "in-person", free: false},
  {id: 3, name: "Code Dojo", capacity: 341, registered: 276, format: "hybrid", free: false},
  {id: 4, name: "Book Club", capacity: 85, registered: 190, format: "online", free: true},
  {id: 5, name: "Career Fair", capacity: 347, registered: 131, format: "online", free: false},
  {id: 6, name: "JS Meetup", capacity: 34, registered: 130, format: "hybrid", free: true},
  {id: 7, name: "Workshop", capacity: 251, registered: 345, format: "online", free: false},
  {id: 8, name: "Game Night", capacity: 209, registered: 89, format: "hybrid", free: true}
]
```
