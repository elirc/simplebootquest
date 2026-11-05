---
slug: "express-predict-113"
title: "What Does the Server Respond? #113"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /employees/4` get?\n\n```js\nconst app = express();\napp.get('/employees/:id', (req, res) => res.json({ n: req.params.id + 4 }));\n```","options":["`{\"n\":\"44\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"n\":44}`"],"answer":0,"explanation":"The real response is `{\"n\":\"44\"}`."},{"prompt":"What JSON body does `GET /tasks/3` get?\n\n```js\nconst app = express();\napp.get('/tasks/:id', (req, res) => res.json({ n: req.params.id + 3 }));\n```","options":["`{\"n\":\"33\"}`","`{\"n\":33}`","`{\"got\":{\"name\":\"x\"}}`","`{}`"],"answer":0,"explanation":"The real response is `{\"n\":\"33\"}`."},{"prompt":"What JSON body does `GET /cars/stats` get?\n\n```js\nconst app = express();\napp.get('/cars/stats', (req, res) => res.json({ count: 1 }));\napp.get('/cars/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"count\":2}`","`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"count\":1}`"],"answer":3,"explanation":"The real response is `{\"count\":1}`."},{"prompt":"What JSON body does `GET /cars/stats` get?\n\n```js\nconst app = express();\napp.get('/cars/stats', (req, res) => res.json({ count: 2 }));\napp.get('/cars/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"count\":2}`","`{\"count\":3}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"count\":2}`."},{"prompt":"What JSON body does `GET /events/stats` get?\n\n```js\nconst app = express();\napp.get('/events/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/events/stats', (req, res) => res.json({ count: 4 }));\n```","options":["`{\"id\":\"stats\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"statsx\"}`"],"answer":0,"explanation":"The real response is `{\"id\":\"stats\"}`."}]
---
# What Does the Server Respond? #113

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
