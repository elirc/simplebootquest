---
slug: "debug-events-lookup"
title: "Debug: Look up a event's capacity"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Look up a event's capacity

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the `capacity` of the event whose name is `name`, or `null` if there isn't one.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "Game Night", capacity: 334, registered: 172, format: "online", free: true},
  {id: 2, name: "JS Meetup", capacity: 23, registered: 195, format: "online", free: false},
  {id: 3, name: "Open Mic", capacity: 44, registered: 191, format: "in-person", free: false},
  {id: 4, name: "Hackathon", capacity: 144, registered: 262, format: "online", free: false},
  {id: 5, name: "AI Panel", capacity: 294, registered: 226, format: "online", free: false},
  {id: 6, name: "Book Club", capacity: 151, registered: 339, format: "in-person", free: true},
  {id: 7, name: "Career Fair", capacity: 334, registered: 319, format: "hybrid", free: true},
  {id: 8, name: "Demo Day", capacity: 219, registered: 346, format: "online", free: false}
]
```
