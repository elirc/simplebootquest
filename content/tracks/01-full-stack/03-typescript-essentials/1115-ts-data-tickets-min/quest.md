---
slug: "ts-data-tickets-min"
title: "Data: The ticket with the lowest reply count"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The ticket with the lowest reply count

Return the subject of the ticket with the **lowest** `replies` (first one on ties), or `null` for an empty list.

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Bug in export", ageHours: 150, replies: 4, priority: "low", channel: "phone", resolved: true},
  {id: 2, subject: "Wrong invoice", ageHours: 53, replies: 8, priority: "normal", channel: "chat", resolved: false},
  {id: 3, subject: "Email change", ageHours: 115, replies: 8, priority: "normal", channel: "phone", resolved: true},
  {id: 4, subject: "Feature idea", ageHours: 155, replies: 7, priority: "normal", channel: "chat", resolved: true},
  {id: 5, subject: "Password reset", ageHours: 182, replies: 2, priority: "low", channel: "phone", resolved: false},
  {id: 6, subject: "Refund request", ageHours: 108, replies: 1, priority: "normal", channel: "phone", resolved: true},
  {id: 7, subject: "Missing order", ageHours: 69, replies: 7, priority: "urgent", channel: "phone", resolved: false},
  {id: 8, subject: "Login fails", ageHours: 60, replies: 1, priority: "normal", channel: "email", resolved: true}
]
```

Type the parameters and the return value. The interface is already written for you.
