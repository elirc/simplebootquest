---
slug: "js-data-tickets-min"
title: "Data: The ticket with the lowest reply count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The ticket with the lowest reply count

Return the subject of the ticket with the **lowest** `replies` (first one on ties), or `null` for an empty list.

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Email change", ageHours: 88, replies: 8, priority: "normal", channel: "email", resolved: false},
  {id: 2, subject: "Billing error", ageHours: 144, replies: 0, priority: "low", channel: "chat", resolved: false},
  {id: 3, subject: "Password reset", ageHours: 179, replies: 12, priority: "low", channel: "phone", resolved: false},
  {id: 4, subject: "Dark mode", ageHours: 43, replies: 5, priority: "normal", channel: "phone", resolved: false},
  {id: 5, subject: "Login fails", ageHours: 117, replies: 8, priority: "normal", channel: "chat", resolved: false},
  {id: 6, subject: "Wrong invoice", ageHours: 132, replies: 11, priority: "low", channel: "phone", resolved: true},
  {id: 7, subject: "Slow page", ageHours: 25, replies: 7, priority: "normal", channel: "email", resolved: false},
  {id: 8, subject: "Feature idea", ageHours: 151, replies: 11, priority: "low", channel: "phone", resolved: true}
]
```
