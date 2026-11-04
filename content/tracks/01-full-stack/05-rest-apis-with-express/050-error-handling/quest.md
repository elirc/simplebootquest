---
slug: express-error-handling
title: Centralised Error Handling
type: code
language: js
xp: 25
hints: ["Check `instanceof HttpError` first, then the parse-error type, then everything else.", "`req.path` gives the path without the query string."]
resources: [{"title": "Express: Error handling", "url": "https://expressjs.com/en/guide/error-handling.html"}]
---
# Centralised Error Handling

Without a plan, error handling ends up copy-pasted into every route:

```js
app.get('/todos/:id', async (req, res) => {
  try {
    const todo = await db.todo.findUnique(...);
    if (!todo) return res.status(404).json({ error: 'Not found' });
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});
```

A better pattern: **throw typed errors anywhere, and handle them in one place.**

```js
class HttpError extends Error {
  constructor(status, message, details) { ... }
}

app.get('/todos/:id', async (req, res) => {
  const todo = await db.todo.findUnique(...);
  if (!todo) throw new HttpError(404, 'Todo not found');
  res.json(todo);
});

// Registered LAST. The 4 arguments tell Express it's an error handler.
app.use((err, req, res, next) => { ... });
```

Express 5 automatically forwards errors thrown in `async` handlers to the error handler. (Express 4 needed a wrapper for that.)

### Never leak internals

For unexpected errors, log the details on the server, but send the client a generic message. Stack traces and SQL errors tell attackers how your system works.

## Your task

1. `class HttpError extends Error` with `status`, `message` and an optional `details`. Its `name` is `'HttpError'`.
2. `createErrorHandler(logger)` returns an Express error middleware `(err, req, res, next)`:
   - `HttpError` → `res.status(err.status).json({ error: err.message })`, plus a `details` key when details exist.
   - An error with `type === 'entity.parse.failed'` (what `express.json()` throws for malformed JSON) → `400` with `{ error: 'Invalid JSON' }`.
   - Anything else → call `logger(err)`, then respond with `500` and `{ error: 'Internal Server Error' }`. Never include the original message.
3. `notFound(req, res)` responds with `404` and `{ error: 'Route <METHOD> <path> not found' }`, using `req.method` and `req.path`.
