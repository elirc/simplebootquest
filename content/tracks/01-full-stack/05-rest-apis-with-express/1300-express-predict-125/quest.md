---
slug: "express-predict-125"
title: "What Does the Server Respond? #125"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /plants/stats` get?\n\n```js\nconst app = express();\napp.get('/plants/stats', (req, res) => res.json({ count: 5 }));\napp.get('/plants/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{}`","`{\"count\":6}`","`{\"got\":{\"name\":\"x\"}}`","`{\"count\":5}`"],"answer":3,"explanation":"The real response is `{\"count\":5}`."},{"prompt":"What JSON body does `GET /api/movies` get?\n\n```js\nconst app = express();\nconst api = express.Router();\napi.get('/movies', (req, res) => res.json({ base: req.baseUrl, path: req.path }));\napp.use('/api', api);\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"base\":\"/apix\",\"path\":\"/moviesx\"}`","`{}`","`{\"base\":\"/api\",\"path\":\"/movies\"}`"],"answer":3,"explanation":"The real response is `{\"base\":\"/api\",\"path\":\"/movies\"}`."},{"prompt":"What JSON body does `GET /employees/1` get?\n\n```js\nconst app = express();\napp.get('/employees/:id', (req, res) => res.json({ n: Number(req.params.id) + 1 }));\n```","options":["`{\"n\":3}`","`{}`","`{\"n\":2}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"n\":2}`."},{"prompt":"What JSON body does `GET /cities/3` get?\n\n```js\nconst app = express();\napp.get('/cities/:id', (req, res, next) => {\n  if (req.params.id === '3') return next();\n  res.json({ from: 'first' });\n});\napp.get('/cities/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"from\":\"second\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"from\":\"secondx\"}`"],"answer":0,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What status code does `GET /cars` get?\n\n```js\nconst app = express();\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\napp.get('/cars', (req, res) => res.json([]));\n```","options":["200","422","401","404"],"answer":2,"explanation":"The real response is 401."}]
---
# What Does the Server Respond? #125

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
