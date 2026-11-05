---
slug: "debug-tickets-count-cat"
title: "Debug: Count tickets by priority"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Count tickets by priority

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return how many tickets have `priority` equal to `value`.

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Bug in export", ageHours: 85, replies: 9, priority: "urgent", channel: "phone", resolved: false},
  {id: 2, subject: "Password reset", ageHours: 126, replies: 0, priority: "urgent", channel: "email", resolved: true},
  {id: 3, subject: "Dark mode", ageHours: 77, replies: 9, priority: "normal", channel: "phone", resolved: false},
  {id: 4, subject: "Wrong invoice", ageHours: 165, replies: 2, priority: "urgent", channel: "chat", resolved: true},
  {id: 5, subject: "Login fails", ageHours: 129, replies: 5, priority: "urgent", channel: "email", resolved: true},
  {id: 6, subject: "Email change", ageHours: 82, replies: 8, priority: "urgent", channel: "email", resolved: false},
  {id: 7, subject: "App crash", ageHours: 102, replies: 9, priority: "normal", channel: "phone", resolved: true},
  {id: 8, subject: "Feature idea", ageHours: 33, replies: 10, priority: "low", channel: "email", resolved: false}
]
```
