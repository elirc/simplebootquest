---
slug: "express-orders-sort"
title: "Express: Sort orders safely"
type: "code"
language: "js"
xp: 20
optional: true
section: "Practice: Express Routes"
hints: ["Each route is `app.METHOD(path, (req, res) => { … })`. Path params live in `req.params`, the query string in `req.query`, and the JSON body in `req.body`.","Every code path must send exactly one response: `return res.status(404).json(…)` stops the handler early."]
---
# Express: Sort orders safely

Add `GET /orders` supporting `?sort=<field>` and `&order=asc|desc` (default asc). Only `code` and `totalCents` may be sorted on. Any other field → **400** `{ error: 'Cannot sort by <field>' }`. Without `sort`, return the orders as stored. Return just the codes.

The app, `express.json()` and the in-memory `orders` array are set up for you. Write real Express code: the tests call your app with Supertest-style `request(app)`, exactly like an integration test in a real project.

```js
// What the tests do:
const res = await request(app).get('/orders?sort=totalCents&order=desc');
expect(res.status).toBe(…);
```
