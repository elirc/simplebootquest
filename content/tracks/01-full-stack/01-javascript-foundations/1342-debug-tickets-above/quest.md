---
slug: "debug-tickets-above"
title: "Debug: Tickets with a age (hours) above a limit"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Tickets with a age (hours) above a limit

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the subject of every ticket whose `ageHours` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Password reset", ageHours: 138, replies: 6, priority: "urgent", channel: "phone", resolved: false},
  {id: 2, subject: "Billing error", ageHours: 197, replies: 9, priority: "low", channel: "phone", resolved: false},
  {id: 3, subject: "Email change", ageHours: 31, replies: 2, priority: "low", channel: "chat", resolved: false},
  {id: 4, subject: "App crash", ageHours: 10, replies: 4, priority: "low", channel: "chat", resolved: false},
  {id: 5, subject: "Feature idea", ageHours: 78, replies: 8, priority: "normal", channel: "phone", resolved: false},
  {id: 6, subject: "Dark mode", ageHours: 199, replies: 9, priority: "urgent", channel: "phone", resolved: false},
  {id: 7, subject: "Login fails", ageHours: 177, replies: 2, priority: "normal", channel: "chat", resolved: false},
  {id: 8, subject: "Slow page", ageHours: 183, replies: 3, priority: "urgent", channel: "email", resolved: true}
]
```
