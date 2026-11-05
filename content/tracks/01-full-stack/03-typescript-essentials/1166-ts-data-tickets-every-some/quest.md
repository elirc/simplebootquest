---
slug: "ts-data-tickets-every-some"
title: "Data: Are all tickets under a reply count limit?"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all tickets under a reply count limit?

Return `true` if **every** ticket has `replies` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Wrong invoice", ageHours: 157, replies: 5, priority: "urgent", channel: "chat", resolved: false},
  {id: 2, subject: "Missing order", ageHours: 11, replies: 7, priority: "normal", channel: "phone", resolved: false},
  {id: 3, subject: "Email change", ageHours: 74, replies: 11, priority: "normal", channel: "email", resolved: false},
  {id: 4, subject: "Bug in export", ageHours: 64, replies: 5, priority: "urgent", channel: "chat", resolved: true},
  {id: 5, subject: "Feature idea", ageHours: 33, replies: 9, priority: "low", channel: "phone", resolved: true},
  {id: 6, subject: "App crash", ageHours: 101, replies: 1, priority: "urgent", channel: "chat", resolved: false},
  {id: 7, subject: "Billing error", ageHours: 145, replies: 2, priority: "normal", channel: "email", resolved: false},
  {id: 8, subject: "Refund request", ageHours: 23, replies: 10, priority: "urgent", channel: "phone", resolved: false}
]
```

Type the parameters and the return value. The interface is already written for you.
