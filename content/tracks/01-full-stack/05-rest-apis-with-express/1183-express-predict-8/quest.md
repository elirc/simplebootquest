---
slug: "express-predict-8"
title: "What Does the Server Respond? #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `GET /cities` get?\n\n```js\nconst app = express();\napp.get('/cities', async () => {\n  throw new Error('db down');\n});\napp.use((err, req, res, next) => res.status(503).json({ error: 'try later' }));\n```","options":["500","503","204","401"],"answer":1,"explanation":"The real response is 503."},{"prompt":"What JSON body does `GET /api/hotels` get?\n\n```js\nconst app = express();\nconst api = express.Router();\napi.get('/hotels', (req, res) => res.json({ base: req.baseUrl, path: req.path }));\napp.use('/api', api);\n```","options":["`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"base\":\"/api\",\"path\":\"/hotels\"}`","`{\"base\":\"/apix\",\"path\":\"/hotelsx\"}`"],"answer":2,"explanation":"The real response is `{\"base\":\"/api\",\"path\":\"/hotels\"}`."},{"prompt":"What status code does `GET /movies` get?\n\n```js\nconst app = express();\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\napp.get('/movies', (req, res) => res.json([]));\n```","options":["500","401","204","400"],"answer":1,"explanation":"The real response is 401."},{"prompt":"What JSON body does `GET /tasks/stats` get?\n\n```js\nconst app = express();\napp.get('/tasks/stats', (req, res) => res.json({ count: 3 }));\napp.get('/tasks/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"count\":4}`","`{}`","`{\"count\":3}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"count\":3}`."},{"prompt":"What JSON body does `GET /courses/3` get?\n\n```js\nconst app = express();\napp.get('/courses/:id', (req, res) => res.json({ n: req.params.id + 3 }));\n```","options":["`{\"n\":33}`","`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":\"33\"}`"],"answer":3,"explanation":"The real response is `{\"n\":\"33\"}`."}]
---
# What Does the Server Respond? #8

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
