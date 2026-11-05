---
slug: "test-p-request-helper"
title: "Practice: A Supertest-Style Request Helper"
type: "code"
language: "js"
xp: 15
hints: ["Wrap everything in `new Promise((resolve, reject) => ...)`. `res.json`, `res.send` and `res.end` call `resolve`.", "Run the handler with `Promise.resolve().then(() => handler(req, res))`, so sync throws and async rejections are handled the same way."]
resources: [{"title": "Supertest on GitHub", "url": "https://github.com/ladjs/supertest"}]
---
# Practice: A Supertest-Style Request Helper

Supertest lets you call an Express app in tests without opening a real port:

```js
const res = await request(app).post('/todos').send({ title: 'Milk' });
expect(res.status).toBe(201);
```

Under the hood it builds a request, gives the app a response object, and resolves when the response ends. Here you build a mini version for a single handler.

## Your task
Write `testRequest(handler)` returning `async (method, path, { body, headers = {} } = {})`, which resolves `{ status, headers, body }`:
- The `req` passed to the handler has `method`, `path` (without the query), `query` (parsed with `URLSearchParams` into a plain object), `headers` (keys lowercased), and `body`.
- The `res` has `status(code)` (chainable), `set(name, value)` (chainable, stores the lowercased name), `json(obj)` (sets `content-type: application/json` and ends), `send(text)`, and `end()`. The status defaults to 200.
- It resolves when the response ends. If the handler throws or rejects before that, resolve `{ status: 500, headers: {}, body: { error: <message> } }`.
- If the handler finishes (its promise settles) without ending the response, reject with `Error('Handler did not send a response')`.
