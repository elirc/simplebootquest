---
slug: "ts-data-tickets-count-cat"
title: "Data: Count tickets by channel"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Count tickets by channel

Return how many tickets have `channel` equal to `value`.

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Slow page", ageHours: 98, replies: 4, priority: "normal", channel: "phone", resolved: false},
  {id: 2, subject: "Wrong invoice", ageHours: 128, replies: 5, priority: "urgent", channel: "chat", resolved: true},
  {id: 3, subject: "Billing error", ageHours: 102, replies: 12, priority: "low", channel: "chat", resolved: true},
  {id: 4, subject: "Bug in export", ageHours: 84, replies: 3, priority: "urgent", channel: "phone", resolved: false},
  {id: 5, subject: "App crash", ageHours: 98, replies: 0, priority: "urgent", channel: "email", resolved: false},
  {id: 6, subject: "Missing order", ageHours: 25, replies: 5, priority: "normal", channel: "chat", resolved: false},
  {id: 7, subject: "Login fails", ageHours: 106, replies: 8, priority: "urgent", channel: "chat", resolved: false},
  {id: 8, subject: "Feature idea", ageHours: 61, replies: 3, priority: "normal", channel: "phone", resolved: true}
]
```

Type the parameters and the return value. The interface is already written for you.
