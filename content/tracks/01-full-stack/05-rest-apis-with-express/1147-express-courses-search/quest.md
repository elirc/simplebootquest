---
slug: "express-courses-search"
title: "Express: Search courses"
type: "code"
language: "js"
xp: 20
optional: true
section: "Practice: Express Routes"
hints: ["Each route is `app.METHOD(path, (req, res) => { … })`. Path params live in `req.params`, the query string in `req.query`, and the JSON body in `req.body`.","Every code path must send exactly one response: `return res.status(404).json(…)` stops the handler early."]
---
# Express: Search courses

Add `GET /courses/search` taking `?q=` and returning the titles that contain `q` (case-insensitive). A missing or blank `q` → **400** `{ error: 'q is required' }`. Make sure `/courses/search` isn't swallowed by an `/:id` route if you add one!

The app, `express.json()` and the in-memory `courses` array are set up for you. Write real Express code: the tests call your app with Supertest-style `request(app)`, exactly like an integration test in a real project.

```js
// What the tests do:
const res = await request(app).get('/courses/search?q=we');
expect(res.status).toBe(…);
```
