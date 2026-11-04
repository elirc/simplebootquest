---
slug: testing-testable-code
title: Designing Testable Code
type: code
language: ts
xp: 30
---
# Designing Testable Code

Code is hard to test when it **reaches out** for its dependencies:

```ts
// 😖 How do you test this without sending real emails, at a real time?
export async function sendReminders() {
  const users = await prisma.user.findMany();
  for (const u of users) {
    if (new Date().getHours() === 9) await sendgrid.send(u.email, 'Reminder!');
  }
}
```

Make dependencies **parameters** instead (dependency injection), and the hard parts become trivial:

```ts
export function createReminderJob(deps: { listUsers; sendEmail; now: () => Date }) {
  return async () => { ... };
}

// In tests:
const sendEmail = fn();
await createReminderJob({ listUsers: async () => [user], sendEmail, now: () => new Date('2026-01-01T09:00:00Z') })();
expect(sendEmail.mock.calls).toHaveLength(1);
```

A useful rule: **pure core, imperative shell.** Keep decisions in pure functions, and push I/O (DB, network, clock) to the edges.

## Your task

Build a "streak reminder" job, like the one this very app could use.

1. `shouldRemind(user, now)` (pure) returns `true` when:
   - `user.remindersEnabled` is true, **and**
   - `user.lastActiveDate` (a `"YYYY-MM-DD"` UTC day) is **yesterday** relative to `now`, which means they'll lose their streak today, **and**
   - `user.streak >= 2`.
2. `createReminderJob({ listUsers, sendEmail, now })` returns an async function that:
   - loads users with `await listUsers()`,
   - for each user where `shouldRemind(user, now())`, calls `await sendEmail(user.email, "Keep your <streak>-day streak alive!")`,
   - keeps going if one email fails, and
   - resolves to `{ sent: <count>, failed: [<emails that threw>] }`.
