---
slug: "ts-data-tickets-percent"
title: "Data: What share of tickets are resolved?"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What share of tickets are resolved?

Return the percentage (0–100, rounded to a whole number) of tickets where `resolved` is true. Return 0 for an empty list.

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Feature idea", ageHours: 85, replies: 1, priority: "low", channel: "email", resolved: true},
  {id: 2, subject: "Billing error", ageHours: 84, replies: 11, priority: "normal", channel: "email", resolved: false},
  {id: 3, subject: "Login fails", ageHours: 126, replies: 4, priority: "normal", channel: "email", resolved: false},
  {id: 4, subject: "Bug in export", ageHours: 95, replies: 12, priority: "normal", channel: "email", resolved: false},
  {id: 5, subject: "Missing order", ageHours: 82, replies: 6, priority: "normal", channel: "phone", resolved: true},
  {id: 6, subject: "Refund request", ageHours: 45, replies: 4, priority: "normal", channel: "email", resolved: true},
  {id: 7, subject: "Slow page", ageHours: 49, replies: 11, priority: "low", channel: "email", resolved: false},
  {id: 8, subject: "Wrong invoice", ageHours: 39, replies: 4, priority: "normal", channel: "chat", resolved: true}
]
```

Type the parameters and the return value. The interface is already written for you.
