---
slug: "js-data-tickets-paginate"
title: "Data: Paginate tickets"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Paginate tickets

Return `{ items, page, totalPages }` where `items` are the subjects on page `page` (1-based) of size `size`. Out-of-range pages return an empty `items` array.

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Feature idea", ageHours: 72, replies: 12, priority: "low", channel: "chat", resolved: false},
  {id: 2, subject: "Password reset", ageHours: 163, replies: 2, priority: "low", channel: "phone", resolved: false},
  {id: 3, subject: "Bug in export", ageHours: 175, replies: 9, priority: "urgent", channel: "phone", resolved: true},
  {id: 4, subject: "Email change", ageHours: 32, replies: 4, priority: "low", channel: "chat", resolved: false},
  {id: 5, subject: "App crash", ageHours: 65, replies: 6, priority: "low", channel: "chat", resolved: false},
  {id: 6, subject: "Slow page", ageHours: 78, replies: 9, priority: "urgent", channel: "phone", resolved: true},
  {id: 7, subject: "Billing error", ageHours: 183, replies: 6, priority: "low", channel: "phone", resolved: true},
  {id: 8, subject: "Missing order", ageHours: 192, replies: 11, priority: "normal", channel: "email", resolved: true}
]
```
