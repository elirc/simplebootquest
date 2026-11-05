---
slug: "express-recipes-filter"
title: "Express: Filter recipes with a query parameter"
type: "code"
language: "js"
xp: 20
optional: true
section: "Practice: Express Routes"
hints: ["Each route is `app.METHOD(path, (req, res) => { … })`. Path params live in `req.params`, the query string in `req.query`, and the JSON body in `req.body`.","Every code path must send exactly one response: `return res.status(404).json(…)` stops the handler early."]
---
# Express: Filter recipes with a query parameter

Add `GET /recipes`. When `?difficulty=…` is given, return only recipes with that `difficulty`. Without it, return all of them.

The app, `express.json()` and the in-memory `recipes` array are set up for you. Write real Express code: the tests call your app with Supertest-style `request(app)`, exactly like an integration test in a real project.

```js
// What the tests do:
const res = await request(app).get('/recipes?difficulty=medium');
expect(res.status).toBe(…);
```
