---
slug: "express-async-handler"
title: "asyncHandler (the Express 4 way)"
type: "code"
language: "js"
xp: 15
hints: ["`Promise.resolve(fn(...))` turns sync return values into promises, but a sync throw happens before that, so wrap it in try/catch too."]
---
# asyncHandler (the Express 4 way)

Express 5 forwards errors from `async` handlers automatically. Express 4, which you'll meet in countless existing codebases, does **not**: a rejected promise is silently lost, and the request hangs until it times out.

The standard fix is a wrapper:

```js
const asyncHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

app.get('/users/:id', asyncHandler(async (req, res) => {
  const user = await db.user.findUnique(...);   // if this throws → next(err)
  res.json(user);
}));
```

Understanding this teaches you exactly what Express 5 now does for you.

## Your task

1. `asyncHandler(fn)` as above. It must also catch **synchronous** throws.
2. `wrapRouter(routes)` takes `{ 'GET /todos': handler, ... }` and returns the same object with every handler wrapped.
