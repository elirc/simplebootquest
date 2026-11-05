---
slug: "express-p-mini-router"
title: "Practice: Build a Mini Router"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Store each route as `{ method, parts, handlers }`, with the pattern pre-split into segments.", "For each handler, pass a `next` that records whether it was called (and with what), then decide whether to continue."]
---
# Practice: Build a Mini Router

What does `express.Router()` actually do? It keeps a list of `(method, pattern, handlers)` and, for each request, runs the handlers of the first matching route, passing `next` along the chain.

## Your task
Write `createRouter()` returning an object with:
- `get(path, ...handlers)`, `post(...)`, `patch(...)`, `delete(...)`: register a route. They return the router, so calls can be chained.
- `async handle(req, res)`: finds the first route whose method and pattern match `req.method` and `req.path` (`:name` segments capture into `req.params`). Then it runs the handlers in order: each is called as `handler(req, res, next)` and may be async. The next handler runs only if the previous one calls `next()`. Await each handler.
  - Returns `true` if a route matched, `false` if not (so the caller can send a 404).
  - If a handler throws (or rejects), or calls `next(err)` with an error, `handle` rejects with that error.
