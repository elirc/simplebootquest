---
slug: "debug-events-histogram"
title: "Debug: Bucket events by registrations"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Bucket events by registrations

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes counts that are off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Group events into buckets of width `width` by `registered`: the bucket key is `Math.floor(value / width) * width`. Return an object of bucket → count.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "Demo Day", capacity: 237, registered: 14, format: "hybrid", free: false},
  {id: 2, name: "Workshop", capacity: 26, registered: 341, format: "hybrid", free: false},
  {id: 3, name: "Book Club", capacity: 102, registered: 284, format: "in-person", free: false},
  {id: 4, name: "Game Night", capacity: 100, registered: 69, format: "online", free: false},
  {id: 5, name: "Open Mic", capacity: 219, registered: 288, format: "hybrid", free: false},
  {id: 6, name: "JS Meetup", capacity: 80, registered: 182, format: "hybrid", free: false},
  {id: 7, name: "Career Fair", capacity: 142, registered: 99, format: "online", free: true},
  {id: 8, name: "AI Panel", capacity: 24, registered: 295, format: "online", free: true}
]
```
