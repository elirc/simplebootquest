---
slug: "debug-tickets-between"
title: "Debug: Tickets in a reply count range"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Tickets in a reply count range

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the subjects of tickets whose `replies` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Feature idea", ageHours: 6, replies: 6, priority: "low", channel: "chat", resolved: false},
  {id: 2, subject: "Password reset", ageHours: 1, replies: 1, priority: "urgent", channel: "email", resolved: false},
  {id: 3, subject: "Email change", ageHours: 104, replies: 2, priority: "urgent", channel: "phone", resolved: true},
  {id: 4, subject: "Missing order", ageHours: 45, replies: 8, priority: "normal", channel: "phone", resolved: true},
  {id: 5, subject: "App crash", ageHours: 13, replies: 1, priority: "urgent", channel: "email", resolved: false},
  {id: 6, subject: "Slow page", ageHours: 152, replies: 2, priority: "normal", channel: "email", resolved: false},
  {id: 7, subject: "Bug in export", ageHours: 11, replies: 9, priority: "low", channel: "email", resolved: false},
  {id: 8, subject: "Billing error", ageHours: 149, replies: 11, priority: "low", channel: "chat", resolved: false}
]
```
