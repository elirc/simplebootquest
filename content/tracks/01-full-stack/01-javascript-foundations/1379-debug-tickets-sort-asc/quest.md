---
slug: "debug-tickets-sort-asc"
title: "Debug: Sort tickets by reply count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Sort tickets by reply count

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes results in the wrong order. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the subjects sorted by `replies` from **lowest to highest**. Ties keep their original order. Don't mutate the input array.

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Password reset", ageHours: 127, replies: 12, priority: "low", channel: "phone", resolved: true},
  {id: 2, subject: "Feature idea", ageHours: 170, replies: 11, priority: "normal", channel: "phone", resolved: false},
  {id: 3, subject: "Missing order", ageHours: 72, replies: 10, priority: "normal", channel: "chat", resolved: false},
  {id: 4, subject: "Email change", ageHours: 113, replies: 12, priority: "normal", channel: "chat", resolved: true},
  {id: 5, subject: "Bug in export", ageHours: 82, replies: 5, priority: "normal", channel: "chat", resolved: true},
  {id: 6, subject: "Refund request", ageHours: 47, replies: 8, priority: "urgent", channel: "chat", resolved: false},
  {id: 7, subject: "Billing error", ageHours: 198, replies: 9, priority: "urgent", channel: "email", resolved: false},
  {id: 8, subject: "Login fails", ageHours: 96, replies: 1, priority: "urgent", channel: "chat", resolved: false}
]
```
