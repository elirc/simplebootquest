---
slug: "debug-events-above"
title: "Debug: Events with a registrations above a limit"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Events with a registrations above a limit

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the name of every event whose `registered` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "Workshop", capacity: 122, registered: 222, format: "hybrid", free: false},
  {id: 2, name: "JS Meetup", capacity: 108, registered: 68, format: "in-person", free: true},
  {id: 3, name: "AI Panel", capacity: 395, registered: 335, format: "online", free: true},
  {id: 4, name: "Design Jam", capacity: 379, registered: 120, format: "online", free: false},
  {id: 5, name: "Startup Night", capacity: 208, registered: 139, format: "in-person", free: false},
  {id: 6, name: "Demo Day", capacity: 158, registered: 144, format: "in-person", free: false},
  {id: 7, name: "Game Night", capacity: 351, registered: 256, format: "hybrid", free: true},
  {id: 8, name: "Career Fair", capacity: 38, registered: 77, format: "online", free: false}
]
```
