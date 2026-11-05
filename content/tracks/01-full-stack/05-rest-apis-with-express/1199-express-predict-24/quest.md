---
slug: "express-predict-24"
title: "What Does the Server Respond? #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `GET /orders` get?\n\n```js\nconst app = express();\napp.get('/orders', async () => {\n  throw new Error('db down');\n});\napp.use((err, req, res, next) => res.status(503).json({ error: 'try later' }));\n```","options":["200","503","422","500"],"answer":1,"explanation":"The real response is 503."},{"prompt":"What status code does `DELETE /workouts` get?\n\n```js\nconst app = express();\napp.get('/workouts', (req, res) => res.json([]));\n```","options":["400","404","401","200"],"answer":1,"explanation":"The real response is 404."},{"prompt":"What status code does `POST /repos` with body `{\"name\":\"no title\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/repos', (req, res) => {\n  if (!req.body.title) return res.status(422).json({ error: 'title' });\n  res.status(201).json(req.body);\n});\n```","options":["503","401","204","422"],"answer":3,"explanation":"The real response is 422."},{"prompt":"What JSON body does `POST /recipes` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.post('/recipes', (req, res) => res.status(201).json({ got: req.body ?? null }));\napp.use(express.json());\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"got\":null}`","`{}`","`{\"id\":\"stats\"}`"],"answer":1,"explanation":"The real response is `{\"got\":null}`."},{"prompt":"What status code does `GET /tasks` get?\n\n```js\nconst app = express();\napp.get('/tasks', async () => {\n  throw new Error('db down');\n});\napp.use((err, req, res, next) => res.status(503).json({ error: 'try later' }));\n```","options":["401","500","200","503"],"answer":3,"explanation":"The real response is 503."}]
---
# What Does the Server Respond? #24

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
