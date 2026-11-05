---
slug: "ts-data-tickets-above"
title: "Data: Tickets with a reply count above a limit"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Tickets with a reply count above a limit

Return the subject of every ticket whose `replies` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Login fails", ageHours: 154, replies: 6, priority: "low", channel: "email", resolved: true},
  {id: 2, subject: "Missing order", ageHours: 35, replies: 8, priority: "normal", channel: "phone", resolved: false},
  {id: 3, subject: "Wrong invoice", ageHours: 22, replies: 6, priority: "urgent", channel: "email", resolved: true},
  {id: 4, subject: "Billing error", ageHours: 130, replies: 4, priority: "normal", channel: "email", resolved: true},
  {id: 5, subject: "Slow page", ageHours: 187, replies: 4, priority: "urgent", channel: "email", resolved: false},
  {id: 6, subject: "Password reset", ageHours: 177, replies: 1, priority: "normal", channel: "phone", resolved: true},
  {id: 7, subject: "Feature idea", ageHours: 47, replies: 9, priority: "urgent", channel: "email", resolved: true},
  {id: 8, subject: "Dark mode", ageHours: 154, replies: 9, priority: "normal", channel: "email", resolved: true}
]
```

Type the parameters and the return value. The interface is already written for you.
