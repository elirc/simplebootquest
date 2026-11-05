---
slug: "ts-data-tickets-between"
title: "Data: Tickets in a reply count range"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Tickets in a reply count range

Return the subjects of tickets whose `replies` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Password reset", ageHours: 165, replies: 11, priority: "normal", channel: "phone", resolved: false},
  {id: 2, subject: "Missing order", ageHours: 17, replies: 10, priority: "urgent", channel: "phone", resolved: false},
  {id: 3, subject: "Feature idea", ageHours: 141, replies: 2, priority: "urgent", channel: "phone", resolved: true},
  {id: 4, subject: "App crash", ageHours: 139, replies: 7, priority: "urgent", channel: "email", resolved: false},
  {id: 5, subject: "Bug in export", ageHours: 50, replies: 5, priority: "low", channel: "chat", resolved: true},
  {id: 6, subject: "Wrong invoice", ageHours: 47, replies: 1, priority: "low", channel: "phone", resolved: true},
  {id: 7, subject: "Refund request", ageHours: 74, replies: 9, priority: "normal", channel: "phone", resolved: true},
  {id: 8, subject: "Email change", ageHours: 167, replies: 2, priority: "normal", channel: "email", resolved: false}
]
```

Type the parameters and the return value. The interface is already written for you.
