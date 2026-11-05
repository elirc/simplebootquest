---
slug: "express-predict-124"
title: "What Does the Server Respond? #124"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /tasks/stats` get?\n\n```js\nconst app = express();\napp.get('/tasks/stats', (req, res) => res.json({ count: 1 }));\napp.get('/tasks/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"count\":1}`","`{}`","`{\"count\":2}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"count\":1}`."},{"prompt":"What status code does `GET /students` get?\n\n```js\nconst app = express();\napp.get('/students', async () => {\n  throw new Error('db down');\n});\napp.use((err, req, res, next) => res.status(503).json({ error: 'try later' }));\n```","options":["400","201","503","401"],"answer":2,"explanation":"The real response is 503."},{"prompt":"What JSON body does `GET /employees/stats` get?\n\n```js\nconst app = express();\napp.get('/employees/stats', (req, res) => res.json({ count: 5 }));\napp.get('/employees/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"count\":6}`","`{\"count\":5}`"],"answer":3,"explanation":"The real response is `{\"count\":5}`."},{"prompt":"What JSON body does `GET /plants/1` get?\n\n```js\nconst app = express();\napp.get('/plants/:id', (req, res) => res.json({ n: req.params.id + 1 }));\n```","options":["`{\"n\":11}`","`{}`","`{\"n\":\"11\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"n\":\"11\"}`."},{"prompt":"What JSON body does `GET /tasks/4` get?\n\n```js\nconst app = express();\napp.get('/tasks/:id', (req, res) => res.json({ n: Number(req.params.id) + 4 }));\n```","options":["`{}`","`{\"n\":8}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":9}`"],"answer":1,"explanation":"The real response is `{\"n\":8}`."}]
---
# What Does the Server Respond? #124

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
