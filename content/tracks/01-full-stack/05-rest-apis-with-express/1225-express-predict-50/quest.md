---
slug: "express-predict-50"
title: "What Does the Server Respond? #50"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /hotels/1` get?\n\n```js\nconst app = express();\napp.use('/hotels', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/hotels/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"seen\":\"/1\"}`","`{\"seen\":\"/1x\"}`"],"answer":2,"explanation":"The real response is `{\"seen\":\"/1\"}`."},{"prompt":"What JSON body does `POST /workouts` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.post('/workouts', (req, res) => res.status(201).json({ got: req.body ?? null }));\napp.use(express.json());\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"id\":\"stats\"}`","`{\"got\":null}`"],"answer":3,"explanation":"The real response is `{\"got\":null}`."},{"prompt":"What JSON body does `GET /books?page=3` get?\n\n```js\nconst app = express();\napp.get('/books', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"page\":\"3\",\"type\":\"string\"}`","`{\"page\":3,\"type\":\"stringx\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"page\":\"3\",\"type\":\"string\"}`."},{"prompt":"What JSON body does `GET /recipes/2` get?\n\n```js\nconst app = express();\napp.get('/recipes/:id', (req, res) => res.json({ n: req.params.id + 2 }));\n```","options":["`{\"n\":22}`","`{\"n\":\"22\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`"],"answer":1,"explanation":"The real response is `{\"n\":\"22\"}`."},{"prompt":"What JSON body does `GET /products/5` get?\n\n```js\nconst app = express();\napp.use('/products', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/products/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"seen\":\"/5x\"}`","`{\"seen\":\"/5\"}`","`{}`"],"answer":2,"explanation":"The real response is `{\"seen\":\"/5\"}`."}]
---
# What Does the Server Respond? #50

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
