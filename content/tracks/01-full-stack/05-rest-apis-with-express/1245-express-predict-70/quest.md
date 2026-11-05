---
slug: "express-predict-70"
title: "What Does the Server Respond? #70"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `GET /employees` get?\n\n```js\nconst app = express();\napp.get('/employees', async () => {\n  throw new Error('db down');\n});\n```","options":["404","500","503","200"],"answer":1,"explanation":"The real response is 500."},{"prompt":"What JSON body does `GET /repos/3` get?\n\n```js\nconst app = express();\napp.get('/repos/:id', (req, res) => res.json({ n: req.params.id + 3 }));\n```","options":["`{}`","`{\"n\":33}`","`{\"n\":\"33\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"n\":\"33\"}`."},{"prompt":"What JSON body does `GET /cars/2` get?\n\n```js\nconst app = express();\napp.get('/cars/:id', (req, res) => res.json({ n: Number(req.params.id) + 2 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"n\":4}`","`{\"n\":5}`","`{}`"],"answer":1,"explanation":"The real response is `{\"n\":4}`."},{"prompt":"What JSON body does `GET /workouts/4` get?\n\n```js\nconst app = express();\napp.get('/workouts/:id', (req, res) => res.json({ n: Number(req.params.id) + 4 }));\n```","options":["`{}`","`{\"n\":9}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":8}`"],"answer":3,"explanation":"The real response is `{\"n\":8}`."},{"prompt":"What JSON body does `GET /employees/stats` get?\n\n```js\nconst app = express();\napp.get('/employees/stats', (req, res) => res.json({ count: 4 }));\napp.get('/employees/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"count\":4}`","`{\"got\":{\"name\":\"x\"}}`","`{\"count\":5}`","`{}`"],"answer":0,"explanation":"The real response is `{\"count\":4}`."}]
---
# What Does the Server Respond? #70

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
