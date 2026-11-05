---
slug: "debug-events-average"
title: "Debug: Average registrations"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Average registrations

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes a total that is off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the average `registered` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `EVENTS` in the tests):

```js
const EVENTS = [
  {id: 1, name: "Game Night", capacity: 149, registered: 105, format: "in-person", free: true},
  {id: 2, name: "JS Meetup", capacity: 216, registered: 319, format: "online", free: false},
  {id: 3, name: "Career Fair", capacity: 142, registered: 104, format: "in-person", free: false},
  {id: 4, name: "AI Panel", capacity: 325, registered: 345, format: "hybrid", free: false},
  {id: 5, name: "Demo Day", capacity: 97, registered: 352, format: "hybrid", free: true},
  {id: 6, name: "Code Dojo", capacity: 23, registered: 54, format: "online", free: false},
  {id: 7, name: "Design Jam", capacity: 155, registered: 40, format: "online", free: false},
  {id: 8, name: "Hackathon", capacity: 302, registered: 172, format: "in-person", free: false}
]
```
