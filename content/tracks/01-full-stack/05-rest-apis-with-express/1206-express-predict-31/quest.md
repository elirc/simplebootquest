---
slug: "express-predict-31"
title: "What Does the Server Respond? #31"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /tickets/4` get?\n\n```js\nconst app = express();\napp.use('/tickets', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/tickets/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"seen\":\"/4\"}`","`{}`","`{\"seen\":\"/4x\"}`"],"answer":1,"explanation":"The real response is `{\"seen\":\"/4\"}`."},{"prompt":"What JSON body does `GET /events/stats` get?\n\n```js\nconst app = express();\napp.get('/events/stats', (req, res) => res.json({ count: 5 }));\napp.get('/events/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"count\":5}`","`{\"count\":6}`","`{}`"],"answer":1,"explanation":"The real response is `{\"count\":5}`."},{"prompt":"What JSON body does `GET /cities/1` get?\n\n```js\nconst app = express();\napp.get('/cities/:id', (req, res) => res.json({ n: req.params.id + 1 }));\n```","options":["`{}`","`{\"n\":11}`","`{\"n\":\"11\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"n\":\"11\"}`."},{"prompt":"What status code does `POST /transactions` with body `{\"name\":\"no title\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/transactions', (req, res) => {\n  if (!req.body.title) return res.status(422).json({ error: 'title' });\n  res.status(201).json(req.body);\n});\n```","options":["404","400","201","422"],"answer":3,"explanation":"The real response is 422."},{"prompt":"What JSON body does `GET /cities/stats` get?\n\n```js\nconst app = express();\napp.get('/cities/stats', (req, res) => res.json({ count: 5 }));\napp.get('/cities/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"count\":5}`","`{\"count\":6}`"],"answer":2,"explanation":"The real response is `{\"count\":5}`."}]
---
# What Does the Server Respond? #31

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
