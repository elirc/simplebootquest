---
slug: "js-data-tickets-chain"
title: "Data: Filter, sort, map: tickets in one channel"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Filter, sort, map: tickets in one channel

Return the subjects of tickets whose `channel` equals `value`, sorted by `ageHours` **highest first**. One chain of array methods is enough.

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Bug in export", ageHours: 8, replies: 4, priority: "urgent", channel: "email", resolved: false},
  {id: 2, subject: "Missing order", ageHours: 148, replies: 4, priority: "urgent", channel: "chat", resolved: false},
  {id: 3, subject: "Email change", ageHours: 154, replies: 0, priority: "urgent", channel: "chat", resolved: true},
  {id: 4, subject: "Login fails", ageHours: 95, replies: 7, priority: "urgent", channel: "chat", resolved: false},
  {id: 5, subject: "App crash", ageHours: 178, replies: 4, priority: "low", channel: "email", resolved: false},
  {id: 6, subject: "Slow page", ageHours: 23, replies: 10, priority: "urgent", channel: "email", resolved: true},
  {id: 7, subject: "Password reset", ageHours: 178, replies: 8, priority: "urgent", channel: "chat", resolved: false},
  {id: 8, subject: "Feature idea", ageHours: 156, replies: 2, priority: "urgent", channel: "phone", resolved: false}
]
```
