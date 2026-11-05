---
slug: "auth-p-session-store"
title: "Practice: A Session Store with Sliding Expiry"
type: "code"
language: "js"
xp: 15
hints: ["Store `createdAt` and `idleUntil` for each session. `get` checks both, then pushes `idleUntil` forward."]
---
# Practice: A Session Store with Sliding Expiry

Server-side sessions store `sessionId → { userId, expiresAt }`, usually in Redis or a `sessions` table. The cookie holds only the random id.

**Sliding expiry** means each use extends the session, so active users stay logged in and idle sessions die. Many apps also keep an **absolute** limit, so a stolen session can't live forever.

## Your task
Write `createSessionStore({ idleMs, absoluteMs, now, newId })` returning:
- `create(userId)`: stores a session with a fresh id from `newId()` and returns the id.
- `get(id)`: returns `{ userId }` if the session exists and is valid, and **extends** its idle expiry to `now() + idleMs`. It's invalid (deleted, returns `null`) if `now()` is past its idle expiry, or more than `absoluteMs` after creation.
- `destroy(id)`: logs out one session.
- `destroyAllFor(userId)`: logs out everywhere (after a password change!). Returns how many sessions were removed.
