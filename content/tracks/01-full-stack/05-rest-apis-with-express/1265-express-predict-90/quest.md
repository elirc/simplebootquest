---
slug: "express-predict-90"
title: "What Does the Server Respond? #90"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /api/songs` get?\n\n```js\nconst app = express();\nconst api = express.Router();\napi.get('/songs', (req, res) => res.json({ base: req.baseUrl, path: req.path }));\napp.use('/api', api);\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"base\":\"/api\",\"path\":\"/songs\"}`","`{\"base\":\"/apix\",\"path\":\"/songsx\"}`","`{}`"],"answer":1,"explanation":"The real response is `{\"base\":\"/api\",\"path\":\"/songs\"}`."},{"prompt":"What JSON body does `POST /flights` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/flights', (req, res) => res.status(201).json({ got: req.body ?? null }));\n```","options":["`{\"got\":null}`","`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"stats\"}`"],"answer":2,"explanation":"The real response is `{\"got\":{\"name\":\"x\"}}`."},{"prompt":"What JSON body does `GET /flights/1` get?\n\n```js\nconst app = express();\napp.use('/flights', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/flights/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"seen\":\"/1\"}`","`{\"seen\":\"/1x\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`"],"answer":0,"explanation":"The real response is `{\"seen\":\"/1\"}`."},{"prompt":"What JSON body does `GET /hotels/4` get?\n\n```js\nconst app = express();\napp.get('/hotels/:id', (req, res) => res.json({ n: Number(req.params.id) + 4 }));\n```","options":["`{\"n\":9}`","`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":8}`"],"answer":3,"explanation":"The real response is `{\"n\":8}`."},{"prompt":"What JSON body does `GET /plants?page=1` get?\n\n```js\nconst app = express();\napp.get('/plants', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"page\":\"1\",\"type\":\"string\"}`","`{\"page\":1,\"type\":\"stringx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`"],"answer":0,"explanation":"The real response is `{\"page\":\"1\",\"type\":\"string\"}`."}]
---
# What Does the Server Respond? #90

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
