---
slug: "express-predict-29"
title: "What Does the Server Respond? #29"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /api/plants` get?\n\n```js\nconst app = express();\nconst api = express.Router();\napi.get('/plants', (req, res) => res.json({ base: req.baseUrl, path: req.path }));\napp.use('/api', api);\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"base\":\"/api\",\"path\":\"/plants\"}`","`{\"base\":\"/apix\",\"path\":\"/plantsx\"}`","`{}`"],"answer":1,"explanation":"The real response is `{\"base\":\"/api\",\"path\":\"/plants\"}`."},{"prompt":"What JSON body does `GET /cars/1` get?\n\n```js\nconst app = express();\napp.get('/cars/:id', (req, res) => res.json({ n: Number(req.params.id) + 1 }));\n```","options":["`{\"n\":3}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"n\":2}`"],"answer":3,"explanation":"The real response is `{\"n\":2}`."},{"prompt":"What JSON body does `GET /flights/2` get?\n\n```js\nconst app = express();\napp.get('/flights/:id', (req, res, next) => {\n  if (req.params.id === '2') return next();\n  res.json({ from: 'first' });\n});\napp.get('/flights/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"from\":\"second\"}`","`{\"from\":\"secondx\"}`","`{}`"],"answer":1,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What status code does `GET /songs` get?\n\n```js\nconst app = express();\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\napp.get('/songs', (req, res) => res.json([]));\n```","options":["401","200","500","503"],"answer":0,"explanation":"The real response is 401."},{"prompt":"What JSON body does `GET /tasks/1` get?\n\n```js\nconst app = express();\napp.get('/tasks/:id', (req, res) => res.json({ n: Number(req.params.id) + 1 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"n\":3}`","`{\"n\":2}`","`{}`"],"answer":2,"explanation":"The real response is `{\"n\":2}`."}]
---
# What Does the Server Respond? #29

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
