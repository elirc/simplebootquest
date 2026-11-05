---
slug: "js-data-tickets-group-count"
title: "Data: How many tickets per channel?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# How many tickets per channel?

Return an object mapping each `channel` to the number of tickets with it. Only include values that appear.

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Billing error", ageHours: 178, replies: 5, priority: "urgent", channel: "chat", resolved: true},
  {id: 2, subject: "Login fails", ageHours: 167, replies: 2, priority: "low", channel: "phone", resolved: true},
  {id: 3, subject: "Password reset", ageHours: 141, replies: 1, priority: "low", channel: "phone", resolved: false},
  {id: 4, subject: "Bug in export", ageHours: 8, replies: 1, priority: "urgent", channel: "phone", resolved: false},
  {id: 5, subject: "Missing order", ageHours: 163, replies: 2, priority: "low", channel: "chat", resolved: false},
  {id: 6, subject: "Slow page", ageHours: 53, replies: 1, priority: "low", channel: "phone", resolved: false},
  {id: 7, subject: "Dark mode", ageHours: 195, replies: 3, priority: "normal", channel: "email", resolved: false},
  {id: 8, subject: "Email change", ageHours: 55, replies: 10, priority: "urgent", channel: "email", resolved: true}
]
```
