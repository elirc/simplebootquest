---
slug: "express-predict-81"
title: "What Does the Server Respond? #81"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /songs/1` get?\n\n```js\nconst app = express();\napp.get('/songs/:id', (req, res) => res.json({ n: req.params.id + 1 }));\n```","options":["`{\"n\":11}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"n\":\"11\"}`"],"answer":3,"explanation":"The real response is `{\"n\":\"11\"}`."},{"prompt":"What JSON body does `GET /events/1` get?\n\n```js\nconst app = express();\napp.use('/events', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/events/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{}`","`{\"seen\":\"/1x\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"seen\":\"/1\"}`"],"answer":3,"explanation":"The real response is `{\"seen\":\"/1\"}`."},{"prompt":"What JSON body does `GET /students/4` get?\n\n```js\nconst app = express();\napp.use('/students', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/students/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{}`","`{\"seen\":\"/4\"}`","`{\"seen\":\"/4x\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":1,"explanation":"The real response is `{\"seen\":\"/4\"}`."},{"prompt":"What status code does `GET /students` get?\n\n```js\nconst app = express();\napp.get('/students', async () => {\n  throw new Error('db down');\n});\n```","options":["500","422","200","503"],"answer":0,"explanation":"The real response is 500."},{"prompt":"What status code does `POST /flights` get?\n\n```js\nconst app = express();\napp.post('/flights', (req, res) => res.sendStatus(202));\n```","options":["400","202","201","500"],"answer":1,"explanation":"The real response is 202."}]
---
# What Does the Server Respond? #81

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
