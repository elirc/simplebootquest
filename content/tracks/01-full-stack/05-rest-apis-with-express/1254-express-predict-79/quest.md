---
slug: "express-predict-79"
title: "What Does the Server Respond? #79"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /products/3` get?\n\n```js\nconst app = express();\napp.get('/products/:id', (req, res) => res.json({ n: Number(req.params.id) + 3 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"n\":6}`","`{\"n\":7}`","`{}`"],"answer":1,"explanation":"The real response is `{\"n\":6}`."},{"prompt":"What JSON body does `GET /cars/4` get?\n\n```js\nconst app = express();\napp.get('/cars/:id', (req, res, next) => {\n  if (req.params.id === '4') return next();\n  res.json({ from: 'first' });\n});\napp.get('/cars/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"from\":\"secondx\"}`","`{}`","`{\"from\":\"second\"}`"],"answer":3,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `GET /employees?page=4` get?\n\n```js\nconst app = express();\napp.get('/employees', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"page\":4,\"type\":\"stringx\"}`","`{\"page\":\"4\",\"type\":\"string\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`"],"answer":1,"explanation":"The real response is `{\"page\":\"4\",\"type\":\"string\"}`."},{"prompt":"What JSON body does `GET /api/orders` get?\n\n```js\nconst app = express();\nconst api = express.Router();\napi.get('/orders', (req, res) => res.json({ base: req.baseUrl, path: req.path }));\napp.use('/api', api);\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"base\":\"/api\",\"path\":\"/orders\"}`","`{\"base\":\"/apix\",\"path\":\"/ordersx\"}`"],"answer":2,"explanation":"The real response is `{\"base\":\"/api\",\"path\":\"/orders\"}`."},{"prompt":"What JSON body does `GET /workouts?page=5` get?\n\n```js\nconst app = express();\napp.get('/workouts', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"page\":5,\"type\":\"stringx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"page\":\"5\",\"type\":\"string\"}`","`{}`"],"answer":2,"explanation":"The real response is `{\"page\":\"5\",\"type\":\"string\"}`."}]
---
# What Does the Server Respond? #79

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
