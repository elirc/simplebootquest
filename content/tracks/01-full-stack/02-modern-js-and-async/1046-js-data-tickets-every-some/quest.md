---
slug: "js-data-tickets-every-some"
title: "Data: Are all tickets under a reply count limit?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all tickets under a reply count limit?

Return `true` if **every** ticket has `replies` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Billing error", ageHours: 11, replies: 9, priority: "normal", channel: "phone", resolved: false},
  {id: 2, subject: "Refund request", ageHours: 60, replies: 3, priority: "normal", channel: "phone", resolved: false},
  {id: 3, subject: "Wrong invoice", ageHours: 197, replies: 9, priority: "normal", channel: "phone", resolved: false},
  {id: 4, subject: "Feature idea", ageHours: 162, replies: 0, priority: "low", channel: "chat", resolved: true},
  {id: 5, subject: "Login fails", ageHours: 121, replies: 3, priority: "normal", channel: "email", resolved: false},
  {id: 6, subject: "Missing order", ageHours: 22, replies: 11, priority: "urgent", channel: "phone", resolved: true},
  {id: 7, subject: "App crash", ageHours: 119, replies: 0, priority: "urgent", channel: "phone", resolved: false},
  {id: 8, subject: "Slow page", ageHours: 49, replies: 11, priority: "normal", channel: "email", resolved: false}
]
```
