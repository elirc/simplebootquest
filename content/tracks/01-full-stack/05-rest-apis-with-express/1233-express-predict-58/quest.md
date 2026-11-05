---
slug: "express-predict-58"
title: "What Does the Server Respond? #58"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /students/1` get?\n\n```js\nconst app = express();\napp.get('/students/:id', (req, res, next) => {\n  if (req.params.id === '1') return next();\n  res.json({ from: 'first' });\n});\napp.get('/students/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{}`","`{\"from\":\"secondx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"from\":\"second\"}`"],"answer":3,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `GET /students/2` get?\n\n```js\nconst app = express();\napp.use('/students', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/students/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"seen\":\"/2\"}`","`{\"seen\":\"/2x\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"seen\":\"/2\"}`."},{"prompt":"What status code does `POST /cities` get?\n\n```js\nconst app = express();\napp.post('/cities', (req, res) => res.sendStatus(201));\n```","options":["503","201","400","422"],"answer":1,"explanation":"The real response is 201."},{"prompt":"What JSON body does `GET /tasks/5` get?\n\n```js\nconst app = express();\napp.get('/tasks/:id', (req, res) => res.json({ n: Number(req.params.id) + 5 }));\n```","options":["`{\"n\":10}`","`{\"n\":11}`","`{\"got\":{\"name\":\"x\"}}`","`{}`"],"answer":0,"explanation":"The real response is `{\"n\":10}`."},{"prompt":"What JSON body does `GET /events/2` get?\n\n```js\nconst app = express();\napp.get('/events/:id', (req, res) => res.json({ n: req.params.id + 2 }));\n```","options":["`{\"n\":\"22\"}`","`{\"n\":22}`","`{\"got\":{\"name\":\"x\"}}`","`{}`"],"answer":0,"explanation":"The real response is `{\"n\":\"22\"}`."}]
---
# What Does the Server Respond? #58

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
