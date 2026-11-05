---
slug: "express-predict-13"
title: "What Does the Server Respond? #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `GET /plants` get?\n\n```js\nconst app = express();\napp.get('/plants', async () => {\n  throw new Error('db down');\n});\napp.use((err, req, res, next) => res.status(503).json({ error: 'try later' }));\n```","options":["201","204","400","503"],"answer":3,"explanation":"The real response is 503."},{"prompt":"What JSON body does `GET /events/4` get?\n\n```js\nconst app = express();\napp.get('/events/:id', (req, res) => res.json({ n: Number(req.params.id) + 4 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"n\":8}`","`{\"n\":9}`"],"answer":2,"explanation":"The real response is `{\"n\":8}`."},{"prompt":"What JSON body does `GET /api/tasks` get?\n\n```js\nconst app = express();\nconst api = express.Router();\napi.get('/tasks', (req, res) => res.json({ base: req.baseUrl, path: req.path }));\napp.use('/api', api);\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"base\":\"/apix\",\"path\":\"/tasksx\"}`","`{\"base\":\"/api\",\"path\":\"/tasks\"}`","`{}`"],"answer":2,"explanation":"The real response is `{\"base\":\"/api\",\"path\":\"/tasks\"}`."},{"prompt":"What JSON body does `GET /books/3` get?\n\n```js\nconst app = express();\napp.get('/books/:id', (req, res) => res.json({ n: req.params.id + 3 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"n\":\"33\"}`","`{\"n\":33}`"],"answer":2,"explanation":"The real response is `{\"n\":\"33\"}`."},{"prompt":"What JSON body does `GET /courses?page=1` get?\n\n```js\nconst app = express();\napp.get('/courses', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"page\":1,\"type\":\"stringx\"}`","`{}`","`{\"page\":\"1\",\"type\":\"string\"}`"],"answer":3,"explanation":"The real response is `{\"page\":\"1\",\"type\":\"string\"}`."}]
---
# What Does the Server Respond? #13

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
