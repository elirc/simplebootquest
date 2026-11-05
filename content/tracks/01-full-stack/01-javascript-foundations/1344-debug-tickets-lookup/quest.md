---
slug: "debug-tickets-lookup"
title: "Debug: Look up a ticket's reply count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Look up a ticket's reply count

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the `replies` of the ticket whose subject is `subject`, or `null` if there isn't one.

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Password reset", ageHours: 9, replies: 5, priority: "low", channel: "chat", resolved: true},
  {id: 2, subject: "Dark mode", ageHours: 194, replies: 12, priority: "normal", channel: "chat", resolved: true},
  {id: 3, subject: "Refund request", ageHours: 67, replies: 1, priority: "low", channel: "phone", resolved: true},
  {id: 4, subject: "Feature idea", ageHours: 6, replies: 2, priority: "low", channel: "phone", resolved: false},
  {id: 5, subject: "Billing error", ageHours: 11, replies: 9, priority: "low", channel: "email", resolved: false},
  {id: 6, subject: "App crash", ageHours: 129, replies: 3, priority: "normal", channel: "phone", resolved: false},
  {id: 7, subject: "Slow page", ageHours: 100, replies: 12, priority: "urgent", channel: "phone", resolved: false},
  {id: 8, subject: "Wrong invoice", ageHours: 9, replies: 7, priority: "urgent", channel: "phone", resolved: false}
]
```
