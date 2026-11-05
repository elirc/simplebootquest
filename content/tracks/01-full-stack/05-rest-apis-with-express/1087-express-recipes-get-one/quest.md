---
slug: "express-recipes-get-one"
title: "Express: Get one recipe by id"
type: "code"
language: "js"
xp: 20
optional: true
section: "Practice: Express Routes"
hints: ["Each route is `app.METHOD(path, (req, res) => { … })`. Path params live in `req.params`, the query string in `req.query`, and the JSON body in `req.body`.","Every code path must send exactly one response: `return res.status(404).json(…)` stops the handler early."]
---
# Express: Get one recipe by id

Add `GET /recipes/:id`. Respond 200 with the recipe, **404** with `{ error: 'Not found' }` when it doesn't exist, and **400** with `{ error: 'Invalid id' }` when `:id` isn't a whole number.

The app, `express.json()` and the in-memory `recipes` array are set up for you. Write real Express code: the tests call your app with Supertest-style `request(app)`, exactly like an integration test in a real project.

```js
// What the tests do:
const res = await request(app).get('/recipes/2');
expect(res.status).toBe(…);
```
