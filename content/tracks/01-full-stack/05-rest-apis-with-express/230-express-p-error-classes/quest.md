---
slug: "express-p-error-classes"
title: "Practice: HTTP Error Classes"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Subclasses call `super(status, message, code)` with the values they're fixed to.", "Check `instanceof HttpError` first, then `Array.isArray(err.issues)`, then fall through to 500."]
---
# Practice: HTTP Error Classes

Instead of `res.status(404).json(...)` scattered through every handler, throw **typed errors** and let one error-handling middleware turn them into responses:

```js
const todo = await prisma.todo.findUnique({ where: { id } });
if (!todo) throw new NotFoundError('Todo');
```

The tests use a tiny fake `res` with `status()`, `set()`, `get()`, `json()` and `end()` (header names are stored lowercase), the same shape as Express's.

## Your task
1. `class HttpError extends Error` with a constructor `(status, message, code)`. Set `name = 'HttpError'`.
2. `class NotFoundError extends HttpError`: `new NotFoundError('Todo')` → status 404, message `"Todo not found"`, code `"NOT_FOUND"`.
3. `class ConflictError extends HttpError`: status 409, code `"CONFLICT"`, with the message you pass.
4. `errorHandler(err, req, res, next)`:
   - An `HttpError` → `res.status(err.status).json({ error: { code, message } })`.
   - An error with an `issues` array (a ZodError) → 400 `{ error: { code: 'VALIDATION', message: 'Invalid request', issues } }`.
   - Anything else → 500 `{ error: { code: 'INTERNAL', message: 'Something went wrong' } }`. **Never** leak the real message or stack trace to clients. Call `req.log(err)` so it is recorded server-side.
