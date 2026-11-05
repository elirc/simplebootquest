---
slug: "express-courses-api-key"
title: "Express: Protect writes with an API key"
type: "code"
language: "js"
xp: 20
optional: true
section: "Practice: Express Routes"
hints: ["Each route is `app.METHOD(path, (req, res) => { … })`. Path params live in `req.params`, the query string in `req.query`, and the JSON body in `req.body`.","Every code path must send exactly one response: `return res.status(404).json(…)` stops the handler early."]
---
# Express: Protect writes with an API key

Add a middleware `requireKey` that responds **401** `{ error: 'Missing or invalid API key' }` unless the `x-api-key` header equals `'letmein'`. Use it on `POST /courses` (which adds `{ id, title }` and responds 201), but **not** on `GET /courses`.

The app, `express.json()` and the in-memory `courses` array are set up for you. Write real Express code: the tests call your app with Supertest-style `request(app)`, exactly like an integration test in a real project.

```js
// What the tests do:
const res = await request(app).get('/courses');
expect(res.status).toBe(…);
```
