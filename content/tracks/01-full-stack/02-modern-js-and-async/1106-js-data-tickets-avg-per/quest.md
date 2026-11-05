---
slug: "js-data-tickets-avg-per"
title: "Data: Average age (hours) per channel"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average age (hours) per channel

Return an object mapping each `channel` to the average `ageHours` of its tickets, rounded to a whole number.

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "App crash", ageHours: 86, replies: 1, priority: "urgent", channel: "phone", resolved: false},
  {id: 2, subject: "Missing order", ageHours: 35, replies: 5, priority: "low", channel: "chat", resolved: true},
  {id: 3, subject: "Email change", ageHours: 144, replies: 12, priority: "low", channel: "chat", resolved: false},
  {id: 4, subject: "Bug in export", ageHours: 87, replies: 8, priority: "normal", channel: "chat", resolved: true},
  {id: 5, subject: "Password reset", ageHours: 159, replies: 4, priority: "low", channel: "chat", resolved: false},
  {id: 6, subject: "Billing error", ageHours: 186, replies: 4, priority: "low", channel: "chat", resolved: true},
  {id: 7, subject: "Refund request", ageHours: 162, replies: 5, priority: "normal", channel: "phone", resolved: true},
  {id: 8, subject: "Dark mode", ageHours: 199, replies: 1, priority: "urgent", channel: "chat", resolved: false}
]
```
