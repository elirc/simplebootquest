---
slug: "express-predict-9"
title: "What Does the Server Respond? #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `POST /hotels` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.post('/hotels', (req, res) => res.status(201).json({ got: req.body ?? null }));\napp.use(express.json());\n```","options":["`{\"id\":\"stats\"}`","`{\"got\":null}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":1,"explanation":"The real response is `{\"got\":null}`."},{"prompt":"What JSON body does `GET /repos/1` get?\n\n```js\nconst app = express();\napp.get('/repos/:id', (req, res) => res.json({ n: req.params.id + 1 }));\n```","options":["`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":11}`","`{\"n\":\"11\"}`"],"answer":3,"explanation":"The real response is `{\"n\":\"11\"}`."},{"prompt":"What JSON body does `GET /plants/2` get?\n\n```js\nconst app = express();\napp.get('/plants/:id', (req, res) => res.json({ n: Number(req.params.id) + 2 }));\n```","options":["`{\"n\":5}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"n\":4}`"],"answer":3,"explanation":"The real response is `{\"n\":4}`."},{"prompt":"What JSON body does `GET /events/4` get?\n\n```js\nconst app = express();\napp.use('/events', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/events/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{}`","`{\"seen\":\"/4x\"}`","`{\"seen\":\"/4\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"seen\":\"/4\"}`."},{"prompt":"What JSON body does `POST /tickets` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.post('/tickets', (req, res) => res.status(201).json({ got: req.body ?? null }));\napp.use(express.json());\n```","options":["`{\"id\":\"stats\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"got\":null}`"],"answer":3,"explanation":"The real response is `{\"got\":null}`."}]
---
# What Does the Server Respond? #9

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
