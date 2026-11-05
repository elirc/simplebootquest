---
slug: "express-movies-search"
title: "Express: Search movies"
type: "code"
language: "js"
xp: 20
optional: true
section: "Practice: Express Routes"
hints: ["Each route is `app.METHOD(path, (req, res) => { … })`. Path params live in `req.params`, the query string in `req.query`, and the JSON body in `req.body`.","Every code path must send exactly one response: `return res.status(404).json(…)` stops the handler early."]
---
# Express: Search movies

Add `GET /movies/search` taking `?q=` and returning the titles that contain `q` (case-insensitive). A missing or blank `q` → **400** `{ error: 'q is required' }`. Make sure `/movies/search` isn't swallowed by an `/:id` route if you add one!

The app, `express.json()` and the in-memory `movies` array are set up for you. Write real Express code: the tests call your app with Supertest-style `request(app)`, exactly like an integration test in a real project.

```js
// What the tests do:
const res = await request(app).get('/movies/search?q=gl');
expect(res.status).toBe(…);
```
