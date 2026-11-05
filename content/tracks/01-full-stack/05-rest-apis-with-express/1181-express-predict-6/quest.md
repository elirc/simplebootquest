---
slug: "express-predict-6"
title: "What Does the Server Respond? #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `POST /tickets` get?\n\n```js\nconst app = express();\napp.post('/tickets', (req, res) => res.sendStatus(201));\n```","options":["200","422","503","201"],"answer":3,"explanation":"The real response is 201."},{"prompt":"What status code does `GET /recipes` get?\n\n```js\nconst app = express();\napp.get('/recipes', (req, res) => res.json([]));\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\n```","options":["200","404","201","422"],"answer":0,"explanation":"The real response is 200."},{"prompt":"What status code does `GET /hotels` get?\n\n```js\nconst app = express();\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\napp.get('/hotels', (req, res) => res.json([]));\n```","options":["503","401","404","200"],"answer":1,"explanation":"The real response is 401."},{"prompt":"What JSON body does `GET /repos?page=3` get?\n\n```js\nconst app = express();\napp.get('/repos', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"page\":\"3\",\"type\":\"string\"}`","`{\"page\":3,\"type\":\"stringx\"}`","`{}`"],"answer":1,"explanation":"The real response is `{\"page\":\"3\",\"type\":\"string\"}`."},{"prompt":"What status code does `GET /tickets` get?\n\n```js\nconst app = express();\napp.get('/tickets', async () => {\n  throw new Error('db down');\n});\napp.use((err, req, res, next) => res.status(503).json({ error: 'try later' }));\n```","options":["400","401","200","503"],"answer":3,"explanation":"The real response is 503."}]
---
# What Does the Server Respond? #6

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
