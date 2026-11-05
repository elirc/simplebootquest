---
slug: "express-predict-30"
title: "What Does the Server Respond? #30"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /plants/1` get?\n\n```js\nconst app = express();\napp.use('/plants', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/plants/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{}`","`{\"seen\":\"/1x\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"seen\":\"/1\"}`"],"answer":3,"explanation":"The real response is `{\"seen\":\"/1\"}`."},{"prompt":"What JSON body does `GET /api/workouts` get?\n\n```js\nconst app = express();\nconst api = express.Router();\napi.get('/workouts', (req, res) => res.json({ base: req.baseUrl, path: req.path }));\napp.use('/api', api);\n```","options":["`{\"base\":\"/api\",\"path\":\"/workouts\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"base\":\"/apix\",\"path\":\"/workoutsx\"}`"],"answer":0,"explanation":"The real response is `{\"base\":\"/api\",\"path\":\"/workouts\"}`."},{"prompt":"What JSON body does `GET /courses?page=4` get?\n\n```js\nconst app = express();\napp.get('/courses', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"page\":4,\"type\":\"stringx\"}`","`{\"page\":\"4\",\"type\":\"string\"}`"],"answer":3,"explanation":"The real response is `{\"page\":\"4\",\"type\":\"string\"}`."},{"prompt":"What status code does `GET /courses` get?\n\n```js\nconst app = express();\napp.get('/courses', async () => {\n  throw new Error('db down');\n});\napp.use((err, req, res, next) => res.status(503).json({ error: 'try later' }));\n```","options":["401","404","204","503"],"answer":3,"explanation":"The real response is 503."},{"prompt":"What status code does `DELETE /books` get?\n\n```js\nconst app = express();\napp.get('/books', (req, res) => res.json([]));\n```","options":["404","500","401","201"],"answer":0,"explanation":"The real response is 404."}]
---
# What Does the Server Respond? #30

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
