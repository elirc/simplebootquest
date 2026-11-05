---
slug: "express-tasks-delete"
title: "Express: Delete a task"
type: "code"
language: "js"
xp: 20
hints: ["Each route is `app.METHOD(path, (req, res) => { … })`. Path params live in `req.params`, the query string in `req.query`, and the JSON body in `req.body`.","Every code path must send exactly one response: `return res.status(404).json(…)` stops the handler early."]
---
# Express: Delete a task

Add `DELETE /tasks/:id`. Respond **204** with no body when it's deleted, or **404** with `{ error: 'Not found' }`. A second delete of the same id must 404.

The app, `express.json()` and the in-memory `tasks` array are set up for you. Write real Express code: the tests call your app with Supertest-style `request(app)`, exactly like an integration test in a real project.

```js
// What the tests do:
const res = await request(app).delete('/tasks/1');
expect(res.status).toBe(…);
```
