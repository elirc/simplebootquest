---
slug: "express-workouts-filter"
title: "Express: Filter workouts with a query parameter"
type: "code"
language: "js"
xp: 20
optional: true
section: "Practice: Express Routes"
hints: ["Each route is `app.METHOD(path, (req, res) => { … })`. Path params live in `req.params`, the query string in `req.query`, and the JSON body in `req.body`.","Every code path must send exactly one response: `return res.status(404).json(…)` stops the handler early."]
---
# Express: Filter workouts with a query parameter

Add `GET /workouts`. When `?kind=…` is given, return only workouts with that `kind`. Without it, return all of them.

The app, `express.json()` and the in-memory `workouts` array are set up for you. Write real Express code: the tests call your app with Supertest-style `request(app)`, exactly like an integration test in a real project.

```js
// What the tests do:
const res = await request(app).get('/workouts?kind=strength');
expect(res.status).toBe(…);
```
