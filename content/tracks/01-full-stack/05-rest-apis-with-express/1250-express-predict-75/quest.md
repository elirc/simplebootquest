---
slug: "express-predict-75"
title: "What Does the Server Respond? #75"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `GET /employees` get?\n\n```js\nconst app = express();\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\napp.get('/employees', (req, res) => res.json([]));\n```","options":["200","404","201","401"],"answer":3,"explanation":"The real response is 401."},{"prompt":"What JSON body does `GET /workouts?page=3` get?\n\n```js\nconst app = express();\napp.get('/workouts', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"page\":\"3\",\"type\":\"string\"}`","`{\"page\":3,\"type\":\"stringx\"}`"],"answer":2,"explanation":"The real response is `{\"page\":\"3\",\"type\":\"string\"}`."},{"prompt":"What JSON body does `GET /events?page=4` get?\n\n```js\nconst app = express();\napp.get('/events', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"page\":4,\"type\":\"stringx\"}`","`{\"page\":\"4\",\"type\":\"string\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":1,"explanation":"The real response is `{\"page\":\"4\",\"type\":\"string\"}`."},{"prompt":"What JSON body does `GET /cities/4` get?\n\n```js\nconst app = express();\napp.get('/cities/:id', (req, res) => res.json({ n: req.params.id + 4 }));\n```","options":["`{\"n\":\"44\"}`","`{\"n\":44}`","`{\"got\":{\"name\":\"x\"}}`","`{}`"],"answer":0,"explanation":"The real response is `{\"n\":\"44\"}`."},{"prompt":"What JSON body does `GET /movies/stats` get?\n\n```js\nconst app = express();\napp.get('/movies/stats', (req, res) => res.json({ count: 2 }));\napp.get('/movies/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"count\":2}`","`{\"count\":3}`","`{\"got\":{\"name\":\"x\"}}`","`{}`"],"answer":0,"explanation":"The real response is `{\"count\":2}`."}]
---
# What Does the Server Respond? #75

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
