---
slug: "express-products-get-one"
title: "Express: Get one product by id"
type: "code"
language: "js"
xp: 20
optional: true
section: "Practice: Express Routes"
hints: ["Each route is `app.METHOD(path, (req, res) => { … })`. Path params live in `req.params`, the query string in `req.query`, and the JSON body in `req.body`.","Every code path must send exactly one response: `return res.status(404).json(…)` stops the handler early."]
---
# Express: Get one product by id

Add `GET /products/:id`. Respond 200 with the product, **404** with `{ error: 'Not found' }` when it doesn't exist, and **400** with `{ error: 'Invalid id' }` when `:id` isn't a whole number.

The app, `express.json()` and the in-memory `products` array are set up for you. Write real Express code: the tests call your app with Supertest-style `request(app)`, exactly like an integration test in a real project.

```js
// What the tests do:
const res = await request(app).get('/products/2');
expect(res.status).toBe(…);
```
