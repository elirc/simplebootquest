---
slug: "ts-p-status-labels"
title: "Practice: Unions Instead of Enums"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice"
hints: ["A state machine is just a lookup table: `Record<Status, Status[]>`."]
---
# Practice: Unions Instead of Enums

TypeScript has `enum`, but many teams prefer **string literal unions**. They're plain strings at runtime, which makes JSON simpler and produces no extra generated code.

```ts
type OrderStatus = 'pending' | 'paid' | 'shipped' | 'cancelled';
const LABELS: Record<OrderStatus, string> = { pending: 'Pending', ... };  // every status is required
```

## Your task
1. `statusLabel(status)` returns `"Awaiting payment"`, `"Paid"`, `"On its way"` or `"Cancelled"`, using a `Record<OrderStatus, string>`.
2. `canTransition(from, to)` allows: pending → paid or cancelled, paid → shipped or cancelled. Nothing else is allowed (including staying in the same status).
