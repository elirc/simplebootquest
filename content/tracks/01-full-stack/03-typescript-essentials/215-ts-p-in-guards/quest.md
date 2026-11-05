---
slug: "ts-p-in-guards"
title: "Practice: Narrowing with in & instanceof"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice"
hints: ["Check the most specific shapes or classes first."]
---
# Practice: Narrowing with in & instanceof

```ts
type Admin = { role: 'admin'; permissions: string[] };
type Guest = { sessionId: string };

function describe(u: Admin | Guest) {
  if ('permissions' in u) return u.permissions.length;   // narrowed to Admin
  return u.sessionId;                                     // narrowed to Guest
}
```

`instanceof` narrows classes, which is handy for error handling.

## Your task
1. `describeActor(actor)` handles `{ email, permissions }` (an admin), `{ email }` (a user) and `{ sessionId }` (a guest), returning `"admin:<email>:<n perms>"`, `"user:<email>"` or `"guest:<sessionId>"`.
2. `toUserMessage(err: unknown)`: a `TypeError` → `"Something was the wrong type"`, a `RangeError` → `"A value was out of range"`, any other `Error` → its message, anything else → `"Unknown error"`.
