---
slug: "express-tasks-patch"
title: "Express: Partially update a task"
type: "code"
language: "js"
xp: 20
hints: ["Each route is `app.METHOD(path, (req, res) => { … })`. Path params live in `req.params`, the query string in `req.query`, and the JSON body in `req.body`.","Every code path must send exactly one response: `return res.status(404).json(…)` stops the handler early."]
---
# Express: Partially update a task

Add `PATCH /tasks/:id` that updates **only** `title` and/or `priority` from the body (ignore every other field, including `id`). Respond 200 with the updated task, or **404** with `{ error: 'Not found' }`.

The app, `express.json()` and the in-memory `tasks` array are set up for you. Write real Express code: the tests call your app with Supertest-style `request(app)`, exactly like an integration test in a real project.

```js
// What the tests do:
const res = await request(app).patch('/tasks/3');
expect(res.status).toBe(…);
```
