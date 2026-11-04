---
slug: "auth-account-lockout"
title: "Login Throttling & Lockout"
type: "code"
language: "ts"
xp: 25
hints: ["Keep `{ failures, lockouts, lockedUntil }` per account in a Map.", "Lock duration: `baseLockMs * 2 ** lockouts`, and increment `lockouts` afterwards."]
resources: [{"title": "OWASP: Authentication cheat sheet", "url": "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html"}]
---
# Login Throttling & Lockout

Rate limiting by IP isn't enough: attackers rotate through thousands of IPs. Protect each **account** too:

- Count consecutive failed logins per account.
- After N failures, lock the account for a while, with each lockout longer than the last (exponential).
- A successful login resets the counter.
- **Don't reveal** that an account is locked with a different message than "invalid credentials" unless you've decided the UX trade-off is worth it. Here we'll return a distinct status so the UI can show a timer.

## Your task

`createLoginGuard({ maxAttempts = 5, baseLockMs = 60_000, now })` returns:

- `check(account)` → `{ allowed: true }` or `{ allowed: false, retryInMs }` while locked.
- `recordFailure(account)`: increments failures. When they reach `maxAttempts`, it locks for `baseLockMs * 2 ** lockouts`, where `lockouts` counts previous lockouts. The failure counter then resets, but the lockout count remains.
- `recordSuccess(account)`: resets everything for the account.
