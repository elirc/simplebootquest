---
slug: "express-predict-15"
title: "What Does the Server Respond? #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `DELETE /tasks` get?\n\n```js\nconst app = express();\napp.get('/tasks', (req, res) => res.json([]));\n```","options":["503","401","422","404"],"answer":3,"explanation":"The real response is 404."},{"prompt":"What JSON body does `GET /recipes/5` get?\n\n```js\nconst app = express();\napp.get('/recipes/:id', (req, res, next) => {\n  if (req.params.id === '5') return next();\n  res.json({ from: 'first' });\n});\napp.get('/recipes/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"from\":\"second\"}`","`{\"from\":\"secondx\"}`"],"answer":2,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `POST /movies` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.post('/movies', (req, res) => res.status(201).json({ got: req.body ?? null }));\napp.use(express.json());\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"got\":null}`","`{\"id\":\"stats\"}`"],"answer":2,"explanation":"The real response is `{\"got\":null}`."},{"prompt":"What status code does `GET /flights` get?\n\n```js\nconst app = express();\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\napp.get('/flights', (req, res) => res.json([]));\n```","options":["503","500","404","401"],"answer":3,"explanation":"The real response is 401."},{"prompt":"What JSON body does `GET /plants/4` get?\n\n```js\nconst app = express();\napp.get('/plants/:id', (req, res) => res.json({ n: Number(req.params.id) + 4 }));\n```","options":["`{}`","`{\"n\":9}`","`{\"n\":8}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"n\":8}`."}]
---
# What Does the Server Respond? #15

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
