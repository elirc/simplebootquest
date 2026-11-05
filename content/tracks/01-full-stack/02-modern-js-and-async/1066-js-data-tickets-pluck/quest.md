---
slug: "js-data-tickets-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `subject` and `ageHours` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Slow page", ageHours: 12, replies: 6, priority: "low", channel: "chat", resolved: false},
  {id: 2, subject: "Billing error", ageHours: 3, replies: 11, priority: "normal", channel: "email", resolved: true},
  {id: 3, subject: "Refund request", ageHours: 17, replies: 2, priority: "urgent", channel: "chat", resolved: true},
  {id: 4, subject: "Login fails", ageHours: 155, replies: 3, priority: "normal", channel: "chat", resolved: false},
  {id: 5, subject: "Wrong invoice", ageHours: 30, replies: 7, priority: "normal", channel: "phone", resolved: true},
  {id: 6, subject: "Missing order", ageHours: 124, replies: 7, priority: "urgent", channel: "email", resolved: false},
  {id: 7, subject: "Email change", ageHours: 32, replies: 2, priority: "urgent", channel: "chat", resolved: false},
  {id: 8, subject: "Bug in export", ageHours: 97, replies: 4, priority: "low", channel: "phone", resolved: true}
]
```
