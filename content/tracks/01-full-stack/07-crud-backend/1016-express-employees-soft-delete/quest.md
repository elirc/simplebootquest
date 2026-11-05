---
slug: "express-employees-soft-delete"
title: "Express: Soft delete"
type: "code"
language: "js"
xp: 20
optional: true
section: "Practice: CRUD Endpoints"
hints: ["Each route is `app.METHOD(path, (req, res) => { … })`. Path params live in `req.params`, the query string in `req.query`, and the JSON body in `req.body`.","Every code path must send exactly one response: `return res.status(404).json(…)` stops the handler early."]
---
# Express: Soft delete

Instead of removing rows, `DELETE /employees/:id` sets `deletedAt` to `'2026-01-01'` and responds 204 (404 `{ error: 'Not found' }` if missing or already deleted). `GET /employees` returns only employees that are not deleted, as names.

The app, `express.json()` and the in-memory `employees` array are set up for you. Write real Express code: the tests call your app with Supertest-style `request(app)`, exactly like an integration test in a real project.

```js
// What the tests do:
const res = await request(app).delete('/employees/2');
expect(res.status).toBe(…);
```
