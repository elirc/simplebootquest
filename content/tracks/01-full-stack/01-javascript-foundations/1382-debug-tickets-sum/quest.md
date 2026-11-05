---
slug: "debug-tickets-sum"
title: "Debug: Total age (hours) of all tickets"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Total age (hours) of all tickets

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes a total that is off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the sum of `ageHours` across all tickets. An empty list totals 0.

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Login fails", ageHours: 151, replies: 2, priority: "urgent", channel: "email", resolved: false},
  {id: 2, subject: "Wrong invoice", ageHours: 165, replies: 0, priority: "urgent", channel: "email", resolved: true},
  {id: 3, subject: "Dark mode", ageHours: 127, replies: 7, priority: "normal", channel: "email", resolved: true},
  {id: 4, subject: "Slow page", ageHours: 126, replies: 1, priority: "low", channel: "phone", resolved: false},
  {id: 5, subject: "Bug in export", ageHours: 121, replies: 4, priority: "low", channel: "phone", resolved: true},
  {id: 6, subject: "Refund request", ageHours: 31, replies: 5, priority: "normal", channel: "email", resolved: true},
  {id: 7, subject: "Billing error", ageHours: 149, replies: 3, priority: "normal", channel: "chat", resolved: false},
  {id: 8, subject: "App crash", ageHours: 154, replies: 12, priority: "urgent", channel: "email", resolved: false}
]
```
