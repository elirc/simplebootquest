---
slug: "js-data-tickets-search"
title: "Data: Search tickets by subject"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Search tickets by subject

Return the subjects that **contain** `query`, ignoring case. An empty (or whitespace-only) query returns every subject.

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Missing order", ageHours: 174, replies: 3, priority: "low", channel: "chat", resolved: true},
  {id: 2, subject: "Email change", ageHours: 31, replies: 4, priority: "normal", channel: "phone", resolved: false},
  {id: 3, subject: "Login fails", ageHours: 177, replies: 5, priority: "low", channel: "phone", resolved: true},
  {id: 4, subject: "Password reset", ageHours: 105, replies: 9, priority: "normal", channel: "email", resolved: false},
  {id: 5, subject: "Bug in export", ageHours: 179, replies: 3, priority: "urgent", channel: "phone", resolved: true},
  {id: 6, subject: "Feature idea", ageHours: 86, replies: 6, priority: "urgent", channel: "email", resolved: true},
  {id: 7, subject: "Billing error", ageHours: 4, replies: 11, priority: "normal", channel: "chat", resolved: true},
  {id: 8, subject: "Dark mode", ageHours: 1, replies: 5, priority: "low", channel: "phone", resolved: false}
]
```
