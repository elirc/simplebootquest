---
slug: "express-books-create"
title: "Express: Create a book with validation"
type: "code"
language: "js"
xp: 20
optional: true
section: "Practice: Express Routes"
hints: ["Each route is `app.METHOD(path, (req, res) => { … })`. Path params live in `req.params`, the query string in `req.query`, and the JSON body in `req.body`.","Every code path must send exactly one response: `return res.status(404).json(…)` stops the handler early."]
---
# Express: Create a book with validation

Add `POST /books`. The JSON body must have a non-empty string `title` and a number `pages` that is ≥ 0. Otherwise respond **400** with `{ error: 'Invalid book' }`. On success, add `{ id, title, pages }` (id = the highest existing id + 1), and respond **201** with it and a `Location: /books/<id>` header.

The app, `express.json()` and the in-memory `books` array are set up for you. Write real Express code: the tests call your app with Supertest-style `request(app)`, exactly like an integration test in a real project.

```js
// What the tests do:
const res = await request(app).post('/books');
expect(res.status).toBe(…);
```
