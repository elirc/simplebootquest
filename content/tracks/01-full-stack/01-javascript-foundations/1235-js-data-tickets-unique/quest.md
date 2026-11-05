---
slug: "js-data-tickets-unique"
title: "Data: Distinct priority values"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Distinct priority values

Return every distinct `priority` that appears, sorted alphabetically.

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Missing order", ageHours: 133, replies: 7, priority: "normal", channel: "email", resolved: true},
  {id: 2, subject: "Password reset", ageHours: 138, replies: 1, priority: "urgent", channel: "email", resolved: false},
  {id: 3, subject: "Feature idea", ageHours: 146, replies: 6, priority: "urgent", channel: "chat", resolved: false},
  {id: 4, subject: "Refund request", ageHours: 169, replies: 8, priority: "low", channel: "phone", resolved: true},
  {id: 5, subject: "Dark mode", ageHours: 71, replies: 6, priority: "low", channel: "chat", resolved: true},
  {id: 6, subject: "Bug in export", ageHours: 24, replies: 12, priority: "low", channel: "chat", resolved: true},
  {id: 7, subject: "App crash", ageHours: 134, replies: 11, priority: "low", channel: "chat", resolved: false},
  {id: 8, subject: "Billing error", ageHours: 89, replies: 4, priority: "low", channel: "chat", resolved: false}
]
```
