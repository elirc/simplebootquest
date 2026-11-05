---
slug: "js-data-tickets-update"
title: "Data: Update tickets immutably"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Spread to copy: `{ ...x, field: newValue }`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Update tickets immutably

Return a **new** array where every ticket with `priority` equal to `value` has `ageHours` increased by `amount`. Other tickets are unchanged. **Don't mutate** the input objects (React state depends on this).

The tests call your function with this data (also available as `TICKETS` in the tests):

```js
const TICKETS = [
  {id: 1, subject: "Bug in export", ageHours: 181, replies: 9, priority: "normal", channel: "chat", resolved: true},
  {id: 2, subject: "Password reset", ageHours: 41, replies: 8, priority: "low", channel: "phone", resolved: true},
  {id: 3, subject: "Billing error", ageHours: 114, replies: 2, priority: "normal", channel: "chat", resolved: false},
  {id: 4, subject: "Dark mode", ageHours: 64, replies: 1, priority: "low", channel: "phone", resolved: false},
  {id: 5, subject: "App crash", ageHours: 123, replies: 0, priority: "urgent", channel: "email", resolved: true},
  {id: 6, subject: "Missing order", ageHours: 171, replies: 8, priority: "normal", channel: "chat", resolved: false},
  {id: 7, subject: "Slow page", ageHours: 8, replies: 2, priority: "normal", channel: "chat", resolved: true},
  {id: 8, subject: "Refund request", ageHours: 130, replies: 9, priority: "urgent", channel: "phone", resolved: false}
]
```
