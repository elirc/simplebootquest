---
slug: "ts-data-tickets-average"
title: "Data: Average age (hours)"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average age (hours)

Return the average `ageHours` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Wrong invoice", ageHours: 18, replies: 0, priority: "normal", channel: "phone", resolved: false},
  {id: 2, subject: "Dark mode", ageHours: 184, replies: 4, priority: "urgent", channel: "phone", resolved: false},
  {id: 3, subject: "App crash", ageHours: 41, replies: 3, priority: "low", channel: "chat", resolved: true},
  {id: 4, subject: "Slow page", ageHours: 87, replies: 4, priority: "normal", channel: "chat", resolved: false},
  {id: 5, subject: "Refund request", ageHours: 84, replies: 7, priority: "urgent", channel: "phone", resolved: false},
  {id: 6, subject: "Email change", ageHours: 192, replies: 3, priority: "urgent", channel: "email", resolved: false},
  {id: 7, subject: "Login fails", ageHours: 160, replies: 6, priority: "low", channel: "chat", resolved: false},
  {id: 8, subject: "Feature idea", ageHours: 198, replies: 0, priority: "normal", channel: "chat", resolved: false}
]
```

Type the parameters and the return value. The interface is already written for you.
