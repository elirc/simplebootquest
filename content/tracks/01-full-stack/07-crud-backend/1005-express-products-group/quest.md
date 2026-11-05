---
slug: "express-products-group"
title: "Express: Counts per category"
type: "code"
language: "js"
xp: 20
optional: true
section: "Practice: CRUD Endpoints"
hints: ["Each route is `app.METHOD(path, (req, res) => { … })`. Path params live in `req.params`, the query string in `req.query`, and the JSON body in `req.body`.","Every code path must send exactly one response: `return res.status(404).json(…)` stops the handler early."]
---
# Express: Counts per category

Add `GET /products/by-category` returning an object mapping each `category` to how many products have it.

The app, `express.json()` and the in-memory `products` array are set up for you. Write real Express code: the tests call your app with Supertest-style `request(app)`, exactly like an integration test in a real project.

```js
// What the tests do:
const res = await request(app).get('/products/by-category');
expect(res.status).toBe(…);
```
