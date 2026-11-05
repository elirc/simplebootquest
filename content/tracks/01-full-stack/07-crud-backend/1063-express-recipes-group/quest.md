---
slug: "express-recipes-group"
title: "Express: Counts per difficulty"
type: "code"
language: "js"
xp: 20
optional: true
section: "Practice: CRUD Endpoints"
hints: ["Each route is `app.METHOD(path, (req, res) => { … })`. Path params live in `req.params`, the query string in `req.query`, and the JSON body in `req.body`.","Every code path must send exactly one response: `return res.status(404).json(…)` stops the handler early."]
---
# Express: Counts per difficulty

Add `GET /recipes/by-difficulty` returning an object mapping each `difficulty` to how many recipes have it.

The app, `express.json()` and the in-memory `recipes` array are set up for you. Write real Express code: the tests call your app with Supertest-style `request(app)`, exactly like an integration test in a real project.

```js
// What the tests do:
const res = await request(app).get('/recipes/by-difficulty');
expect(res.status).toBe(…);
```
