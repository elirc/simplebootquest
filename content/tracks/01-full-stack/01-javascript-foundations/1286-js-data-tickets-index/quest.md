---
slug: "js-data-tickets-index"
title: "Data: Index tickets by id"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Index tickets by id

Return an object mapping each `id` to the ticket's subject, for fast lookups.

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "App crash", ageHours: 17, replies: 6, priority: "normal", channel: "phone", resolved: true},
  {id: 2, subject: "Missing order", ageHours: 72, replies: 2, priority: "urgent", channel: "phone", resolved: false},
  {id: 3, subject: "Email change", ageHours: 143, replies: 9, priority: "urgent", channel: "email", resolved: false},
  {id: 4, subject: "Wrong invoice", ageHours: 75, replies: 2, priority: "urgent", channel: "phone", resolved: true},
  {id: 5, subject: "Password reset", ageHours: 75, replies: 1, priority: "urgent", channel: "email", resolved: false},
  {id: 6, subject: "Login fails", ageHours: 168, replies: 6, priority: "urgent", channel: "chat", resolved: false},
  {id: 7, subject: "Bug in export", ageHours: 174, replies: 12, priority: "normal", channel: "phone", resolved: false},
  {id: 8, subject: "Slow page", ageHours: 32, replies: 5, priority: "normal", channel: "email", resolved: true}
]
```
