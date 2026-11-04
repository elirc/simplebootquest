---
slug: "node-mini-framework"
title: "Build a Mini Express"
type: "code"
language: "js"
xp: 35
hints: ["Store every registration as a \"layer\" `{ method, pattern, handler, exact }` in one array.", "Walk the layers with a `for` loop, skipping error handlers until there is an error (and normal handlers once there is one).", "Wrap each handler call in try/catch and `await` it, so thrown and async errors both become `error`."]
resources: [{"title": "Express source: router", "url": "https://github.com/expressjs/router"}]
---
# Build a Mini Express

Time to assemble everything from this chapter into a tiny framework. Express's core is surprisingly small:

1. A list of **layers**, each with a method (or "any"), a path pattern, and a handler.
2. A `handle(req, res)` function that walks the layers in order, calling each matching handler with `next`.
3. `req.params` filled from `:name` segments, and `req.query` from the query string.
4. Errors passed to `next(err)` skip ahead to the first **error handler**, a function with 4 parameters.

We simulate `req` (`{ method, url }`) and `res` (with `status()`, `json()`, `send()`) as plain objects, so it all runs here.

## Your task

`createApp()` returns `{ use, get, post, handle }`:

- `use(handler)` or `use(pathPrefix, handler)`: runs for every method, when the path **starts with** the prefix (default `/`). If `handler.length === 4`, it's an error handler.
- `get(pattern, ...handlers)` / `post(pattern, ...handlers)`: exact match with `:params`.
- `handle(req, res)` sets `req.path`, `req.query` (single values as strings) and `req.params`, then runs the chain. Handlers may be `async`. A rejected promise or a thrown error is treated like `next(err)`.
- If nothing sends a response, respond `404` with `{ error: 'Not found' }`. If an error reaches the end, respond `500` with `{ error: 'Internal Server Error' }`.

`handle` returns a promise that resolves once the chain is done.
