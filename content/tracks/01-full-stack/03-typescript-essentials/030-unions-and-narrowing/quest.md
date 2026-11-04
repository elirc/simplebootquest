---
slug: ts-unions-and-narrowing
title: Unions & Narrowing
type: code
language: ts
xp: 20
hints: ["`switch (event.type)` narrows each case.", "Track placed orders in a Map and delete cancelled ones."]
resources: [{"title": "TS Handbook: Narrowing", "url": "https://www.typescriptlang.org/docs/handbook/2/narrowing.html"}]
---
# Unions & Narrowing

A **union** type means "one of these":

```ts
type Status = 'todo' | 'in_progress' | 'done'; // string literal union
let id: string | number;
```

TypeScript makes you **narrow** a union before using type-specific features:

```ts
function show(id: string | number) {
  if (typeof id === 'string') return id.toUpperCase(); // id: string here
  return id.toFixed(0);                                // id: number here
}
```

### Discriminated unions

The most useful pattern in TypeScript. Give every variant a shared literal field, the *discriminant*:

```ts
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'rect'; width: number; height: number };

function area(s: Shape): number {
  switch (s.kind) {
    case 'circle': return Math.PI * s.radius ** 2;
    case 'rect': return s.width * s.height;
  }
}
```

Inside each `case`, TypeScript knows exactly which fields exist. Add a new variant and forget to handle it, and the compiler tells you. Redux actions, API responses, and UI states all use this pattern.

## Your task

Events arrive from a message queue as a discriminated union (see the starter).

1. `describeEvent(event)` returns:
   - `user_signed_up` → `"<email> signed up"`
   - `order_placed` → `"Order #<orderId> placed for $<total with 2 decimals>"` (total is in cents)
   - `order_cancelled` → `"Order #<orderId> cancelled: <reason>"`, or `"Order #<orderId> cancelled"` when there's no reason
2. `totalRevenue(events)` sums `total` for placed orders, **minus** any order that was later cancelled, and returns cents.
