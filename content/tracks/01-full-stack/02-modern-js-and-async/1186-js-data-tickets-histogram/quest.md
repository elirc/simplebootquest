---
slug: "js-data-tickets-histogram"
title: "Data: Bucket tickets by age (hours)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Bucket tickets by age (hours)

Group tickets into buckets of width `width` by `ageHours`: the bucket key is `Math.floor(value / width) * width`. Return an object of bucket → count.

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Dark mode", ageHours: 116, replies: 3, priority: "low", channel: "phone", resolved: false},
  {id: 2, subject: "Billing error", ageHours: 194, replies: 4, priority: "urgent", channel: "phone", resolved: true},
  {id: 3, subject: "Refund request", ageHours: 23, replies: 2, priority: "urgent", channel: "chat", resolved: false},
  {id: 4, subject: "Password reset", ageHours: 184, replies: 0, priority: "normal", channel: "phone", resolved: true},
  {id: 5, subject: "Feature idea", ageHours: 42, replies: 7, priority: "urgent", channel: "phone", resolved: true},
  {id: 6, subject: "App crash", ageHours: 20, replies: 4, priority: "urgent", channel: "chat", resolved: true},
  {id: 7, subject: "Wrong invoice", ageHours: 169, replies: 5, priority: "urgent", channel: "chat", resolved: true},
  {id: 8, subject: "Email change", ageHours: 128, replies: 4, priority: "normal", channel: "email", resolved: true}
]
```
