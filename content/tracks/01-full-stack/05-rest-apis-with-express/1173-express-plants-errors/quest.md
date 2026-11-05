---
slug: "express-plants-errors"
title: "Express: JSON 404s and a safe error handler"
type: "code"
language: "js"
xp: 20
optional: true
section: "Practice: Express Routes"
hints: ["Each route is `app.METHOD(path, (req, res) => { … })`. Path params live in `req.params`, the query string in `req.query`, and the JSON body in `req.body`.","Every code path must send exactly one response: `return res.status(404).json(…)` stops the handler early."]
---
# Express: JSON 404s and a safe error handler

Add `GET /plants/:id` that **throws** `new Error('database exploded')` when the id is `0`, and otherwise returns the plant (or 404 `{ error: 'Not found' }`). Then add a catch-all 404 middleware responding `{ error: 'Route not found' }`, and an error-handling middleware responding **500** with `{ error: 'Internal server error' }`, so internal messages never leak.

The app, `express.json()` and the in-memory `plants` array are set up for you. Write real Express code: the tests call your app with Supertest-style `request(app)`, exactly like an integration test in a real project.

```js
// What the tests do:
const res = await request(app).get('/plants/1');
expect(res.status).toBe(…);
```
