---
slug: "express-courses-filter"
title: "Express: Filter courses with a query parameter"
type: "code"
language: "js"
xp: 20
optional: true
section: "Practice: Express Routes"
hints: ["Each route is `app.METHOD(path, (req, res) => { … })`. Path params live in `req.params`, the query string in `req.query`, and the JSON body in `req.body`.","Every code path must send exactly one response: `return res.status(404).json(…)` stops the handler early."]
---
# Express: Filter courses with a query parameter

Add `GET /courses`. When `?level=…` is given, return only courses with that `level`. Without it, return all of them.

The app, `express.json()` and the in-memory `courses` array are set up for you. Write real Express code: the tests call your app with Supertest-style `request(app)`, exactly like an integration test in a real project.

```js
// What the tests do:
const res = await request(app).get('/courses?level=beginner');
expect(res.status).toBe(…);
```
