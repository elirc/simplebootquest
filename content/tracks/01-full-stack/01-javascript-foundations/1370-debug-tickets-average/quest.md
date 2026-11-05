---
slug: "debug-tickets-average"
title: "Debug: Average age (hours)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Average age (hours)

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes a total that is off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the average `ageHours` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Password reset", ageHours: 130, replies: 12, priority: "urgent", channel: "email", resolved: true},
  {id: 2, subject: "Email change", ageHours: 18, replies: 11, priority: "low", channel: "chat", resolved: true},
  {id: 3, subject: "Slow page", ageHours: 192, replies: 3, priority: "normal", channel: "chat", resolved: true},
  {id: 4, subject: "Feature idea", ageHours: 175, replies: 7, priority: "low", channel: "email", resolved: false},
  {id: 5, subject: "App crash", ageHours: 129, replies: 0, priority: "normal", channel: "chat", resolved: false},
  {id: 6, subject: "Missing order", ageHours: 158, replies: 2, priority: "normal", channel: "chat", resolved: false},
  {id: 7, subject: "Dark mode", ageHours: 14, replies: 10, priority: "normal", channel: "email", resolved: true},
  {id: 8, subject: "Refund request", ageHours: 145, replies: 7, priority: "normal", channel: "chat", resolved: true}
]
```
