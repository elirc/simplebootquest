---
slug: "js-data-tickets-count-cat"
title: "Data: Count tickets by priority"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Count tickets by priority

Return how many tickets have `priority` equal to `value`.

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Missing order", ageHours: 119, replies: 9, priority: "low", channel: "phone", resolved: true},
  {id: 2, subject: "Password reset", ageHours: 68, replies: 8, priority: "urgent", channel: "email", resolved: false},
  {id: 3, subject: "Refund request", ageHours: 138, replies: 5, priority: "normal", channel: "email", resolved: true},
  {id: 4, subject: "Wrong invoice", ageHours: 74, replies: 4, priority: "low", channel: "chat", resolved: true},
  {id: 5, subject: "Dark mode", ageHours: 92, replies: 3, priority: "normal", channel: "email", resolved: false},
  {id: 6, subject: "Slow page", ageHours: 23, replies: 8, priority: "normal", channel: "email", resolved: false},
  {id: 7, subject: "App crash", ageHours: 190, replies: 3, priority: "low", channel: "email", resolved: false},
  {id: 8, subject: "Bug in export", ageHours: 62, replies: 7, priority: "low", channel: "phone", resolved: true}
]
```
