---
slug: "js-data-tickets-nth"
title: "Data: The n-th ticket by age (hours)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The n-th ticket by age (hours)

Return the subject of the ticket ranked `n` (1 = highest `ageHours`), or `null` if `n` is out of range.

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Email change", ageHours: 126, replies: 5, priority: "low", channel: "chat", resolved: false},
  {id: 2, subject: "Password reset", ageHours: 86, replies: 6, priority: "urgent", channel: "chat", resolved: false},
  {id: 3, subject: "App crash", ageHours: 58, replies: 5, priority: "normal", channel: "chat", resolved: true},
  {id: 4, subject: "Missing order", ageHours: 32, replies: 7, priority: "normal", channel: "phone", resolved: true},
  {id: 5, subject: "Login fails", ageHours: 188, replies: 12, priority: "normal", channel: "phone", resolved: false},
  {id: 6, subject: "Dark mode", ageHours: 169, replies: 0, priority: "urgent", channel: "phone", resolved: false},
  {id: 7, subject: "Billing error", ageHours: 195, replies: 11, priority: "low", channel: "email", resolved: true},
  {id: 8, subject: "Wrong invoice", ageHours: 78, replies: 2, priority: "normal", channel: "email", resolved: true}
]
```
