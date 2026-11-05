---
slug: "express-predict-97"
title: "What Does the Server Respond? #97"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `POST /cars` with body `{\"name\":\"no title\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/cars', (req, res) => {\n  if (!req.body.title) return res.status(422).json({ error: 'title' });\n  res.status(201).json(req.body);\n});\n```","options":["422","500","404","503"],"answer":0,"explanation":"The real response is 422."},{"prompt":"What JSON body does `GET /cars/stats` get?\n\n```js\nconst app = express();\napp.get('/cars/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/cars/stats', (req, res) => res.json({ count: 3 }));\n```","options":["`{\"id\":\"stats\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"statsx\"}`","`{}`"],"answer":0,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What JSON body does `GET /repos/5` get?\n\n```js\nconst app = express();\napp.get('/repos/:id', (req, res) => res.json({ n: Number(req.params.id) + 5 }));\n```","options":["`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":11}`","`{\"n\":10}`"],"answer":3,"explanation":"The real response is `{\"n\":10}`."},{"prompt":"What JSON body does `GET /api/courses` get?\n\n```js\nconst app = express();\nconst api = express.Router();\napi.get('/courses', (req, res) => res.json({ base: req.baseUrl, path: req.path }));\napp.use('/api', api);\n```","options":["`{}`","`{\"base\":\"/apix\",\"path\":\"/coursesx\"}`","`{\"base\":\"/api\",\"path\":\"/courses\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"base\":\"/api\",\"path\":\"/courses\"}`."},{"prompt":"What JSON body does `GET /workouts/4` get?\n\n```js\nconst app = express();\napp.get('/workouts/:id', (req, res, next) => {\n  if (req.params.id === '4') return next();\n  res.json({ from: 'first' });\n});\napp.get('/workouts/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"from\":\"second\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"from\":\"secondx\"}`"],"answer":0,"explanation":"The real response is `{\"from\":\"second\"}`."}]
---
# What Does the Server Respond? #97

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
