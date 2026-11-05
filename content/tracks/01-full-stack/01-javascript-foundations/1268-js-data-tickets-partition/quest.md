---
slug: "js-data-tickets-partition"
title: "Data: Split tickets by \"resolved\""
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Split tickets by "resolved"

Return `{ yes, no }`: the subjects of tickets where `resolved` is true, and those where it's false. Keep the original order.

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Wrong invoice", ageHours: 31, replies: 6, priority: "low", channel: "chat", resolved: false},
  {id: 2, subject: "Password reset", ageHours: 67, replies: 1, priority: "normal", channel: "phone", resolved: true},
  {id: 3, subject: "Missing order", ageHours: 48, replies: 11, priority: "normal", channel: "chat", resolved: true},
  {id: 4, subject: "Bug in export", ageHours: 151, replies: 11, priority: "normal", channel: "phone", resolved: false},
  {id: 5, subject: "Feature idea", ageHours: 38, replies: 8, priority: "low", channel: "chat", resolved: true},
  {id: 6, subject: "Slow page", ageHours: 132, replies: 4, priority: "urgent", channel: "chat", resolved: false},
  {id: 7, subject: "Login fails", ageHours: 121, replies: 0, priority: "urgent", channel: "chat", resolved: false},
  {id: 8, subject: "Refund request", ageHours: 6, replies: 3, priority: "normal", channel: "chat", resolved: false}
]
```
