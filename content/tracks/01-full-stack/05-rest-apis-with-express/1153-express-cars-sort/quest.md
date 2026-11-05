---
slug: "express-cars-sort"
title: "Express: Sort cars safely"
type: "code"
language: "js"
xp: 20
optional: true
section: "Practice: Express Routes"
hints: ["Each route is `app.METHOD(path, (req, res) => { … })`. Path params live in `req.params`, the query string in `req.query`, and the JSON body in `req.body`.","Every code path must send exactly one response: `return res.status(404).json(…)` stops the handler early."]
---
# Express: Sort cars safely

Add `GET /cars` supporting `?sort=<field>` and `&order=asc|desc` (default asc). Only `model` and `km` may be sorted on. Any other field → **400** `{ error: 'Cannot sort by <field>' }`. Without `sort`, return the cars as stored. Return just the models.

The app, `express.json()` and the in-memory `cars` array are set up for you. Write real Express code: the tests call your app with Supertest-style `request(app)`, exactly like an integration test in a real project.

```js
// What the tests do:
const res = await request(app).get('/cars?sort=km&order=desc');
expect(res.status).toBe(…);
```
