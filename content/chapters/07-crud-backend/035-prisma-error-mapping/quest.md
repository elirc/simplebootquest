---
slug: "crud-prisma-errors"
title: "Mapping Database Errors to HTTP"
type: "code"
language: "ts"
xp: 20
hints: ["Write type guards for \"looks like a Prisma error\" and \"looks like an HttpError\".", "Unrecognised Prisma codes should fall through to the 500 case."]
resources: [{"title": "Prisma: Error reference", "url": "https://www.prisma.io/docs/orm/reference/error-reference"}]
---
# Mapping Database Errors to HTTP

The database is your last line of validation. When a constraint fails, Prisma throws a `PrismaClientKnownRequestError` with a **code**:

| Code | Meaning | HTTP |
|------|---------|------|
| `P2002` | Unique constraint failed (`meta.target` lists the fields) | **409 Conflict** |
| `P2025` | Record to update/delete not found | **404** |
| `P2003` | Foreign key constraint failed | **400** (or 409) |

Mapping these in **one** place (your error handler) means routes can simply `await prisma.user.create(...)` and still get correct status codes.

## Your task

`toHttpError(err)` returns `{ status, body }`:

- `P2002` → `409`, `{ error: 'Already exists', fields: meta.target }` (target may be an array, or a string like `"User_email_key"`, in which case use `[target]`).
- `P2025` → `404`, `{ error: 'Not found' }`.
- `P2003` → `400`, `{ error: 'Related record does not exist' }`.
- An object with `status` and `message` (your own HttpError) → that status, with `{ error: message }`.
- Anything else → `500`, `{ error: 'Internal Server Error' }`. Never leak the message.
