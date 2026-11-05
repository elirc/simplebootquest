---
slug: "ts-data-tickets-max"
title: "Data: The ticket with the highest age (hours)"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The ticket with the highest age (hours)

Return the subject of the ticket with the **highest** `ageHours`. If several tie, return the first. Return `null` for an empty list.

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Password reset", ageHours: 99, replies: 7, priority: "low", channel: "email", resolved: false},
  {id: 2, subject: "Email change", ageHours: 179, replies: 1, priority: "urgent", channel: "chat", resolved: false},
  {id: 3, subject: "Billing error", ageHours: 118, replies: 7, priority: "low", channel: "phone", resolved: true},
  {id: 4, subject: "Refund request", ageHours: 145, replies: 5, priority: "normal", channel: "phone", resolved: false},
  {id: 5, subject: "Missing order", ageHours: 155, replies: 1, priority: "low", channel: "email", resolved: false},
  {id: 6, subject: "App crash", ageHours: 97, replies: 6, priority: "normal", channel: "chat", resolved: false},
  {id: 7, subject: "Slow page", ageHours: 68, replies: 4, priority: "normal", channel: "phone", resolved: true},
  {id: 8, subject: "Login fails", ageHours: 85, replies: 1, priority: "normal", channel: "email", resolved: false}
]
```

Type the parameters and the return value. The interface is already written for you.
