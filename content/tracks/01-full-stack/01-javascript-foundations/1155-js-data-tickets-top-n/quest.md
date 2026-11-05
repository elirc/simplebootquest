---
slug: "js-data-tickets-top-n"
title: "Data: Top tickets by reply count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Top tickets by reply count

Return the subjects of the `n` tickets with the **highest** `replies`, highest first. Don't mutate the input.

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Wrong invoice", ageHours: 35, replies: 4, priority: "urgent", channel: "chat", resolved: true},
  {id: 2, subject: "Bug in export", ageHours: 129, replies: 5, priority: "urgent", channel: "email", resolved: true},
  {id: 3, subject: "Slow page", ageHours: 6, replies: 7, priority: "urgent", channel: "chat", resolved: true},
  {id: 4, subject: "Billing error", ageHours: 77, replies: 0, priority: "normal", channel: "email", resolved: true},
  {id: 5, subject: "App crash", ageHours: 176, replies: 2, priority: "low", channel: "chat", resolved: false},
  {id: 6, subject: "Dark mode", ageHours: 33, replies: 10, priority: "normal", channel: "email", resolved: true},
  {id: 7, subject: "Password reset", ageHours: 39, replies: 4, priority: "low", channel: "chat", resolved: true},
  {id: 8, subject: "Refund request", ageHours: 143, replies: 0, priority: "low", channel: "chat", resolved: true}
]
```
