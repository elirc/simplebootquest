---
slug: "ts-data-tickets-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `subject` and `ageHours` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Dark mode", ageHours: 150, replies: 12, priority: "normal", channel: "phone", resolved: false},
  {id: 2, subject: "App crash", ageHours: 38, replies: 9, priority: "low", channel: "phone", resolved: false},
  {id: 3, subject: "Refund request", ageHours: 11, replies: 10, priority: "normal", channel: "chat", resolved: true},
  {id: 4, subject: "Feature idea", ageHours: 25, replies: 0, priority: "urgent", channel: "phone", resolved: true},
  {id: 5, subject: "Billing error", ageHours: 198, replies: 6, priority: "low", channel: "chat", resolved: true},
  {id: 6, subject: "Wrong invoice", ageHours: 115, replies: 2, priority: "urgent", channel: "chat", resolved: true},
  {id: 7, subject: "Login fails", ageHours: 28, replies: 1, priority: "urgent", channel: "email", resolved: false},
  {id: 8, subject: "Email change", ageHours: 71, replies: 0, priority: "normal", channel: "chat", resolved: true}
]
```

Type the parameters and the return value. The interface is already written for you.
