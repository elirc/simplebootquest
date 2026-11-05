---
slug: "js-data-tickets-diff"
title: "Data: What changed between two snapshots?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What changed between two snapshots?

Given yesterday's and today's tickets (same ids), return the ids whose `ageHours` changed, in today's order.

The tests call your function with this data (also available as `BEFORE` / `AFTER` in the tests):

```js
const BEFORE = [
  {id: 1, subject: "Billing error", ageHours: 4, replies: 10, priority: "normal", channel: "chat", resolved: true},
  {id: 2, subject: "Email change", ageHours: 44, replies: 11, priority: "urgent", channel: "email", resolved: false},
  {id: 3, subject: "Login fails", ageHours: 118, replies: 0, priority: "urgent", channel: "email", resolved: false},
  {id: 4, subject: "Wrong invoice", ageHours: 14, replies: 10, priority: "low", channel: "phone", resolved: true},
  {id: 5, subject: "Dark mode", ageHours: 191, replies: 1, priority: "normal", channel: "phone", resolved: false},
  {id: 6, subject: "Password reset", ageHours: 97, replies: 11, priority: "normal", channel: "phone", resolved: false},
  {id: 7, subject: "Feature idea", ageHours: 192, replies: 3, priority: "low", channel: "email", resolved: true},
  {id: 8, subject: "App crash", ageHours: 84, replies: 4, priority: "normal", channel: "email", resolved: false}
]
```
