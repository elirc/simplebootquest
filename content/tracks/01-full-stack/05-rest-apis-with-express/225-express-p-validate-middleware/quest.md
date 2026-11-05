---
slug: "express-p-validate-middleware"
title: "Practice: Validation Middleware"
type: "code"
language: "js"
xp: 15
hints: ["Both factories are the same apart from which property of `req` they read and write. Write one helper that takes the property name."]
---
# Practice: Validation Middleware

Validating inside every handler is repetitive. Instead, write a **middleware factory**:

```js
app.post('/todos', validateBody(todoSchema), createTodo);
```

If the body is invalid, the middleware answers **400** and the handler never runs. If it's valid, it **replaces** `req.body` with the clean data, so the handler can trust it.

The tests use a tiny fake `res` with `status()`, `set()`, `get()`, `json()` and `end()` (header names are stored lowercase), the same shape as Express's.

## Your task
Write `validateBody(schema)` and `validateQuery(schema)`. A schema here is any object with `safeParse(input)` returning `{ success: true, data }` or `{ success: false, error: { issues: [{ path: [...], message }] } }` (exactly Zod's shape).
- On failure: `res.status(400).json({ error: 'Validation failed', issues: [{ path: 'a.b', message }] })`, joining each path with `.`. Don't call `next`.
- On success: set `req.body` (or `req.query`) to `data` and call `next()`.
