---
slug: "express-predict-39"
title: "What Does the Server Respond? #39"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /workouts/stats` get?\n\n```js\nconst app = express();\napp.get('/workouts/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/workouts/stats', (req, res) => res.json({ count: 3 }));\n```","options":["`{}`","`{\"id\":\"statsx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"stats\"}`"],"answer":3,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What JSON body does `GET /courses/5` get?\n\n```js\nconst app = express();\napp.use('/courses', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/courses/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"seen\":\"/5\"}`","`{\"seen\":\"/5x\"}`"],"answer":2,"explanation":"The real response is `{\"seen\":\"/5\"}`."},{"prompt":"What JSON body does `POST /transactions` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/transactions', (req, res) => res.status(201).json({ got: req.body ?? null }));\n```","options":["`{\"id\":\"stats\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"got\":null}`","`{}`"],"answer":1,"explanation":"The real response is `{\"got\":{\"name\":\"x\"}}`."},{"prompt":"What status code does `GET /repos` get?\n\n```js\nconst app = express();\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\napp.get('/repos', (req, res) => res.json([]));\n```","options":["500","400","422","401"],"answer":3,"explanation":"The real response is 401."},{"prompt":"What status code does `DELETE /movies` get?\n\n```js\nconst app = express();\napp.get('/movies', (req, res) => res.json([]));\n```","options":["201","400","200","404"],"answer":3,"explanation":"The real response is 404."}]
---
# What Does the Server Respond? #39

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
