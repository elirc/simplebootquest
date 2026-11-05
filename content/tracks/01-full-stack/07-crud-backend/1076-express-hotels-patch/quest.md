---
slug: "express-hotels-patch"
title: "Express: Partially update a hotel"
type: "code"
language: "js"
xp: 20
optional: true
section: "Practice: CRUD Endpoints"
hints: ["Each route is `app.METHOD(path, (req, res) => { … })`. Path params live in `req.params`, the query string in `req.query`, and the JSON body in `req.body`.","Every code path must send exactly one response: `return res.status(404).json(…)` stops the handler early."]
---
# Express: Partially update a hotel

Add `PATCH /hotels/:id` that updates **only** `name` and/or `stars` from the body (ignore every other field, including `id`). Respond 200 with the updated hotel, or **404** with `{ error: 'Not found' }`.

The app, `express.json()` and the in-memory `hotels` array are set up for you. Write real Express code: the tests call your app with Supertest-style `request(app)`, exactly like an integration test in a real project.

```js
// What the tests do:
const res = await request(app).patch('/hotels/3');
expect(res.status).toBe(…);
```
