---
slug: "express-predict-7"
title: "What Does the Server Respond? #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `POST /events` get?\n\n```js\nconst app = express();\napp.post('/events', (req, res) => res.sendStatus(202));\n```","options":["202","400","422","401"],"answer":0,"explanation":"The real response is 202."},{"prompt":"What JSON body does `GET /events/stats` get?\n\n```js\nconst app = express();\napp.get('/events/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/events/stats', (req, res) => res.json({ count: 1 }));\n```","options":["`{\"id\":\"statsx\"}`","`{\"id\":\"stats\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":1,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What status code does `GET /transactions` get?\n\n```js\nconst app = express();\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\napp.get('/transactions', (req, res) => res.json([]));\n```","options":["401","400","204","500"],"answer":0,"explanation":"The real response is 401."},{"prompt":"What status code does `GET /employees` get?\n\n```js\nconst app = express();\napp.get('/employees', (req, res) => res.json([]));\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\n```","options":["404","200","400","401"],"answer":1,"explanation":"The real response is 200."},{"prompt":"What status code does `GET /recipes` get?\n\n```js\nconst app = express();\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\napp.get('/recipes', (req, res) => res.json([]));\n```","options":["401","503","400","422"],"answer":0,"explanation":"The real response is 401."}]
---
# What Does the Server Respond? #7

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
