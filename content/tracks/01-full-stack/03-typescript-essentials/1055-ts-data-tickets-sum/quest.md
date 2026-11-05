---
slug: "ts-data-tickets-sum"
title: "Data: Total reply count of all tickets"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total reply count of all tickets

Return the sum of `replies` across all tickets. An empty list totals 0.

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Refund request", ageHours: 189, replies: 9, priority: "low", channel: "phone", resolved: true},
  {id: 2, subject: "Bug in export", ageHours: 179, replies: 8, priority: "normal", channel: "phone", resolved: false},
  {id: 3, subject: "Password reset", ageHours: 17, replies: 10, priority: "normal", channel: "email", resolved: true},
  {id: 4, subject: "Missing order", ageHours: 1, replies: 3, priority: "normal", channel: "chat", resolved: true},
  {id: 5, subject: "App crash", ageHours: 8, replies: 9, priority: "urgent", channel: "email", resolved: true},
  {id: 6, subject: "Feature idea", ageHours: 102, replies: 5, priority: "normal", channel: "email", resolved: true},
  {id: 7, subject: "Wrong invoice", ageHours: 109, replies: 10, priority: "urgent", channel: "phone", resolved: true},
  {id: 8, subject: "Login fails", ageHours: 134, replies: 3, priority: "urgent", channel: "phone", resolved: true}
]
```

Type the parameters and the return value. The interface is already written for you.
