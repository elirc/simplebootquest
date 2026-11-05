---
slug: "crud-p-idempotent-create"
title: "Practice: Idempotent Creates with Client IDs"
type: "code"
language: "js"
xp: 15
hints: ["Use a composite key string like `${userId}:${clientId}`, the in-memory equivalent of `@@unique([userId, clientId])` in Prisma."]
---
# Practice: Idempotent Creates with Client IDs

Mobile networks drop responses. If the app retries `POST /todos`, you get **duplicate todos**. One fix is to let the client generate a unique `clientId` (a UUID) for each item it creates, and store it with a unique constraint. A retry finds the existing row instead of making a new one.

## Your task
Write `createStore()` returning `{ create(userId, { clientId, title }), count() }`:
- The first `create` for a `(userId, clientId)` pair inserts `{ id, userId, clientId, title }` (ids from 1) and returns `{ status: 201, todo }`.
- A retry with the same pair returns `{ status: 200, todo }` with the **original** todo, even if the title differs.
- If the same pair arrives with a **different title**, it's probably a client bug: return `{ status: 409, error: 'clientId already used with different data' }`.
- The same `clientId` from a different user is a separate todo (it's scoped per user).
- Missing `clientId` → always create (`201`).
