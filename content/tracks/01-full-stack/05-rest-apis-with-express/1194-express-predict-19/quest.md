---
slug: "express-predict-19"
title: "What Does the Server Respond? #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `POST /flights` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.post('/flights', (req, res) => res.status(201).json({ got: req.body ?? null }));\napp.use(express.json());\n```","options":["`{\"got\":null}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"stats\"}`","`{}`"],"answer":0,"explanation":"The real response is `{\"got\":null}`."},{"prompt":"What JSON body does `POST /students` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.post('/students', (req, res) => res.status(201).json({ got: req.body ?? null }));\napp.use(express.json());\n```","options":["`{}`","`{\"got\":null}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"stats\"}`"],"answer":1,"explanation":"The real response is `{\"got\":null}`."},{"prompt":"What JSON body does `GET /plants/5` get?\n\n```js\nconst app = express();\napp.use('/plants', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/plants/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"seen\":\"/5x\"}`","`{\"seen\":\"/5\"}`"],"answer":3,"explanation":"The real response is `{\"seen\":\"/5\"}`."},{"prompt":"What JSON body does `GET /api/repos` get?\n\n```js\nconst app = express();\nconst api = express.Router();\napi.get('/repos', (req, res) => res.json({ base: req.baseUrl, path: req.path }));\napp.use('/api', api);\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"base\":\"/apix\",\"path\":\"/reposx\"}`","`{\"base\":\"/api\",\"path\":\"/repos\"}`","`{}`"],"answer":2,"explanation":"The real response is `{\"base\":\"/api\",\"path\":\"/repos\"}`."},{"prompt":"What status code does `GET /courses` get?\n\n```js\nconst app = express();\napp.get('/courses', (req, res) => res.json([]));\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\n```","options":["404","201","500","200"],"answer":3,"explanation":"The real response is 200."}]
---
# What Does the Server Respond? #19

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
