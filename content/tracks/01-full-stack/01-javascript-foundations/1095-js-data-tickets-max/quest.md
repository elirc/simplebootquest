---
slug: "js-data-tickets-max"
title: "Data: The ticket with the highest reply count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The ticket with the highest reply count

Return the subject of the ticket with the **highest** `replies`. If several tie, return the first. Return `null` for an empty list.

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Dark mode", ageHours: 101, replies: 10, priority: "urgent", channel: "email", resolved: false},
  {id: 2, subject: "Slow page", ageHours: 128, replies: 6, priority: "low", channel: "email", resolved: false},
  {id: 3, subject: "Refund request", ageHours: 113, replies: 10, priority: "urgent", channel: "email", resolved: false},
  {id: 4, subject: "Bug in export", ageHours: 148, replies: 5, priority: "urgent", channel: "phone", resolved: false},
  {id: 5, subject: "Email change", ageHours: 176, replies: 5, priority: "urgent", channel: "phone", resolved: false},
  {id: 6, subject: "Login fails", ageHours: 7, replies: 10, priority: "normal", channel: "email", resolved: true},
  {id: 7, subject: "Feature idea", ageHours: 192, replies: 11, priority: "urgent", channel: "phone", resolved: true},
  {id: 8, subject: "App crash", ageHours: 176, replies: 6, priority: "normal", channel: "chat", resolved: true}
]
```
