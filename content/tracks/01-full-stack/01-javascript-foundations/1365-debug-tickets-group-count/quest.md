---
slug: "debug-tickets-group-count"
title: "Debug: How many tickets per channel?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: How many tickets per channel?

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes counts that are off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return an object mapping each `channel` to the number of tickets with it. Only include values that appear.

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Bug in export", ageHours: 136, replies: 9, priority: "low", channel: "phone", resolved: false},
  {id: 2, subject: "Feature idea", ageHours: 2, replies: 6, priority: "urgent", channel: "email", resolved: true},
  {id: 3, subject: "Wrong invoice", ageHours: 149, replies: 8, priority: "normal", channel: "chat", resolved: false},
  {id: 4, subject: "Dark mode", ageHours: 17, replies: 10, priority: "urgent", channel: "phone", resolved: true},
  {id: 5, subject: "Slow page", ageHours: 33, replies: 0, priority: "low", channel: "phone", resolved: true},
  {id: 6, subject: "Billing error", ageHours: 191, replies: 3, priority: "low", channel: "chat", resolved: true},
  {id: 7, subject: "Email change", ageHours: 80, replies: 0, priority: "low", channel: "chat", resolved: false},
  {id: 8, subject: "App crash", ageHours: 95, replies: 4, priority: "urgent", channel: "email", resolved: false}
]
```
