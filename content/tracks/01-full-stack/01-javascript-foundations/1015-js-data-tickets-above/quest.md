---
slug: "js-data-tickets-above"
title: "Data: Tickets with a reply count above a limit"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Tickets with a reply count above a limit

Return the subject of every ticket whose `replies` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Refund request", ageHours: 108, replies: 6, priority: "normal", channel: "chat", resolved: true},
  {id: 2, subject: "Slow page", ageHours: 163, replies: 9, priority: "low", channel: "phone", resolved: true},
  {id: 3, subject: "Email change", ageHours: 36, replies: 3, priority: "urgent", channel: "email", resolved: true},
  {id: 4, subject: "Login fails", ageHours: 81, replies: 8, priority: "normal", channel: "phone", resolved: true},
  {id: 5, subject: "App crash", ageHours: 175, replies: 7, priority: "normal", channel: "phone", resolved: false},
  {id: 6, subject: "Password reset", ageHours: 191, replies: 5, priority: "normal", channel: "email", resolved: false},
  {id: 7, subject: "Wrong invoice", ageHours: 95, replies: 12, priority: "urgent", channel: "phone", resolved: false},
  {id: 8, subject: "Bug in export", ageHours: 61, replies: 5, priority: "urgent", channel: "chat", resolved: false}
]
```
