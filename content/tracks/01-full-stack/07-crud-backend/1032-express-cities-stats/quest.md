---
slug: "express-cities-stats"
title: "Express: A stats endpoint"
type: "code"
language: "js"
xp: 20
optional: true
section: "Practice: CRUD Endpoints"
hints: ["Each route is `app.METHOD(path, (req, res) => { … })`. Path params live in `req.params`, the query string in `req.query`, and the JSON body in `req.body`.","Every code path must send exactly one response: `return res.status(404).json(…)` stops the handler early."]
---
# Express: A stats endpoint

Add `GET /cities/stats` returning `{ count, totalPopulation, averagePopulation }`, with the average rounded to a whole number (0 when there are no cities).

The app, `express.json()` and the in-memory `cities` array are set up for you. Write real Express code: the tests call your app with Supertest-style `request(app)`, exactly like an integration test in a real project.

```js
// What the tests do:
const res = await request(app).get('/cities/stats');
expect(res.status).toBe(…);
```
