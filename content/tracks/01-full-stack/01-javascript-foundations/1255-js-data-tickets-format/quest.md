---
slug: "js-data-tickets-format"
title: "Data: Format tickets as labels"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Format tickets as labels

Return one string per ticket: `"<subject> (<replies>)"`, e.g. `"Billing error (6)"`.

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Billing error", ageHours: 27, replies: 6, priority: "normal", channel: "chat", resolved: false},
  {id: 2, subject: "Wrong invoice", ageHours: 152, replies: 2, priority: "low", channel: "chat", resolved: false},
  {id: 3, subject: "Bug in export", ageHours: 131, replies: 9, priority: "low", channel: "chat", resolved: false},
  {id: 4, subject: "Missing order", ageHours: 55, replies: 9, priority: "normal", channel: "email", resolved: false},
  {id: 5, subject: "Slow page", ageHours: 29, replies: 12, priority: "urgent", channel: "phone", resolved: true},
  {id: 6, subject: "Feature idea", ageHours: 173, replies: 2, priority: "urgent", channel: "email", resolved: true},
  {id: 7, subject: "Refund request", ageHours: 130, replies: 5, priority: "low", channel: "phone", resolved: false},
  {id: 8, subject: "Email change", ageHours: 119, replies: 8, priority: "low", channel: "chat", resolved: false}
]
```
