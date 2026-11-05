---
slug: "express-workouts-list"
title: "Express: List all workouts"
type: "code"
language: "js"
xp: 20
optional: true
section: "Practice: Express Routes"
hints: ["Each route is `app.METHOD(path, (req, res) => { … })`. Path params live in `req.params`, the query string in `req.query`, and the JSON body in `req.body`.","Every code path must send exactly one response: `return res.status(404).json(…)` stops the handler early."]
---
# Express: List all workouts

Add `GET /workouts` returning every workout as JSON (status 200).

The app, `express.json()` and the in-memory `workouts` array are set up for you. Write real Express code: the tests call your app with Supertest-style `request(app)`, exactly like an integration test in a real project.

```js
// What the tests do:
const res = await request(app).get('/workouts');
expect(res.status).toBe(…);
```
