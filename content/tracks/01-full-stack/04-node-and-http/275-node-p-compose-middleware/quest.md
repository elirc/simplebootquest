---
slug: "node-p-compose-middleware"
title: "Practice: Composing Async Middleware"
type: "code"
language: "js"
xp: 15
hints: ["Write a recursive `dispatch(i)` that calls `middlewares[i](ctx, () => dispatch(i + 1))`.", "Track the highest index dispatched so far. Dispatching an index that is not greater means `next` ran twice."]
resources: [{"title": "koa-compose source (≈50 lines)", "url": "https://github.com/koajs/compose/blob/master/index.js"}]
---
# Practice: Composing Async Middleware

Express middleware calls `next()` and moves on. Koa (and Express 5 with async handlers) uses an "onion" model: each middleware can run code **before and after** the rest of the chain by awaiting `next()`:

```js
async function timer(ctx, next) {
  const start = Date.now();
  await next();          // run everything downstream
  ctx.ms = Date.now() - start;
}
```

## Your task
Write `compose(middlewares)` that returns `async (ctx) => {...}`:
- Runs the middlewares in order. Each is called as `mw(ctx, next)`, where `next()` runs the rest and returns a promise.
- If a middleware doesn't call `next`, the later ones don't run.
- Calling `next()` twice in one middleware rejects with `Error('next() called multiple times')`.
- Errors thrown (or rejected) anywhere propagate to the caller, so an outer middleware can `try { await next() } catch` them.
