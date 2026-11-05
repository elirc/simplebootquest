---
slug: "express-movies-paginate"
title: "Express: Paginate movies"
type: "code"
language: "js"
xp: 20
optional: true
section: "Practice: Express Routes"
hints: ["Each route is `app.METHOD(path, (req, res) => { … })`. Path params live in `req.params`, the query string in `req.query`, and the JSON body in `req.body`.","Every code path must send exactly one response: `return res.status(404).json(…)` stops the handler early."]
---
# Express: Paginate movies

Add `GET /movies` with `?page` (default 1) and `?limit` (default 3, max 5). Respond with `{ data, meta: { page, limit, total } }`, where `data` holds the titles on that page. Invalid numbers (non-integers, < 1) fall back to the defaults.

The app, `express.json()` and the in-memory `movies` array are set up for you. Write real Express code: the tests call your app with Supertest-style `request(app)`, exactly like an integration test in a real project.

```js
// What the tests do:
const res = await request(app).get('/movies');
expect(res.status).toBe(…);
```
