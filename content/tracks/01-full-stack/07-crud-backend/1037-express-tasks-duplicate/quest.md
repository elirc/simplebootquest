---
slug: "express-tasks-duplicate"
title: "Express: Reject duplicates with 409"
type: "code"
language: "js"
xp: 20
optional: true
section: "Practice: CRUD Endpoints"
hints: ["Each route is `app.METHOD(path, (req, res) => { … })`. Path params live in `req.params`, the query string in `req.query`, and the JSON body in `req.body`.","Every code path must send exactly one response: `return res.status(404).json(…)` stops the handler early."]
---
# Express: Reject duplicates with 409

Add `POST /tasks` that creates `{ id, title }` (201). If a task with the same title already exists (case-insensitive), respond **409** `{ error: 'Task already exists' }` instead.

The app, `express.json()` and the in-memory `tasks` array are set up for you. Write real Express code: the tests call your app with Supertest-style `request(app)`, exactly like an integration test in a real project.

```js
// What the tests do:
const res = await request(app).post('/tasks');
expect(res.status).toBe(…);
```
