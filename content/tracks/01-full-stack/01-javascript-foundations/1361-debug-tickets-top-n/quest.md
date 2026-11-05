---
slug: "debug-tickets-top-n"
title: "Debug: Top tickets by reply count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Top tickets by reply count

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes results in the wrong order. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the subjects of the `n` tickets with the **highest** `replies`, highest first. Don't mutate the input.

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Refund request", ageHours: 17, replies: 7, priority: "urgent", channel: "chat", resolved: false},
  {id: 2, subject: "Password reset", ageHours: 158, replies: 3, priority: "urgent", channel: "chat", resolved: true},
  {id: 3, subject: "Slow page", ageHours: 118, replies: 11, priority: "low", channel: "email", resolved: false},
  {id: 4, subject: "Dark mode", ageHours: 59, replies: 10, priority: "low", channel: "chat", resolved: false},
  {id: 5, subject: "Feature idea", ageHours: 152, replies: 2, priority: "urgent", channel: "phone", resolved: true},
  {id: 6, subject: "Missing order", ageHours: 57, replies: 6, priority: "normal", channel: "email", resolved: false},
  {id: 7, subject: "App crash", ageHours: 66, replies: 7, priority: "low", channel: "chat", resolved: true},
  {id: 8, subject: "Wrong invoice", ageHours: 192, replies: 11, priority: "urgent", channel: "email", resolved: false}
]
```
