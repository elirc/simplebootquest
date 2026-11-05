---
slug: "express-plants-filter"
title: "Express: Filter plants with a query parameter"
type: "code"
language: "js"
xp: 20
optional: true
section: "Practice: Express Routes"
hints: ["Each route is `app.METHOD(path, (req, res) => { … })`. Path params live in `req.params`, the query string in `req.query`, and the JSON body in `req.body`.","Every code path must send exactly one response: `return res.status(404).json(…)` stops the handler early."]
---
# Express: Filter plants with a query parameter

Add `GET /plants`. When `?light=…` is given, return only plants with that `light`. Without it, return all of them.

The app, `express.json()` and the in-memory `plants` array are set up for you. Write real Express code: the tests call your app with Supertest-style `request(app)`, exactly like an integration test in a real project.

```js
// What the tests do:
const res = await request(app).get('/plants?light=medium');
expect(res.status).toBe(…);
```
