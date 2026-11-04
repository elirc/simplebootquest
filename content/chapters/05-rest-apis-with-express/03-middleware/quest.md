---
slug: express-middleware
title: Middleware
type: code
language: js
xp: 25
---
# Middleware

In Express, **everything is middleware**: a function `(req, res, next)` that can

- read or modify `req` and `res`,
- end the request by sending a response, or
- call `next()` to pass control to the next middleware.

```js
app.use(express.json());           // parses JSON bodies into req.body
app.use((req, res, next) => {      // logs every request
  console.log(req.method, req.url);
  next();
});
app.get('/todos', requireAuth, listTodos); // route-level middleware
```

The request flows through the chain like an assembly line. If a middleware neither responds nor calls `next()`, the request **hangs forever**. That's a classic bug.

Calling `next(err)` with an argument skips straight to the error handler (next quest).

## Your task

1. `compose(middlewares)` returns a function `(req, res)` that runs the middlewares in order. Each one receives `(req, res, next)`, and calling `next()` runs the next one. Return a promise that resolves when the chain finishes (middlewares may be `async`). If `next(err)` is called with an error, stop the chain and **reject** with that error.
2. `requireJson(req, res, next)`: if `req.method` is `POST`, `PUT` or `PATCH` and the `content-type` header doesn't start with `application/json`, respond with `res.status(415).json({ error: 'Content-Type must be application/json' })`. Otherwise call `next()`.
3. `requestTimer(clock)` returns a middleware that records `req.startTime = clock()` and calls `next()`.
