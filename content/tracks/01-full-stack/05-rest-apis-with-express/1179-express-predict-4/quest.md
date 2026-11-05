---
slug: "express-predict-4"
title: "What Does the Server Respond? #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `DELETE /tickets` get?\n\n```js\nconst app = express();\napp.get('/tickets', (req, res) => res.json([]));\n```","options":["500","200","404","201"],"answer":2,"explanation":"The real response is 404."},{"prompt":"What JSON body does `POST /recipes` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/recipes', (req, res) => res.status(201).json({ got: req.body ?? null }));\n```","options":["`{}`","`{\"got\":null}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"stats\"}`"],"answer":2,"explanation":"The real response is `{\"got\":{\"name\":\"x\"}}`."},{"prompt":"What status code does `GET /cars` get?\n\n```js\nconst app = express();\napp.get('/cars', async () => {\n  throw new Error('db down');\n});\n```","options":["422","201","500","503"],"answer":2,"explanation":"The real response is 500."},{"prompt":"What JSON body does `GET /transactions/stats` get?\n\n```js\nconst app = express();\napp.get('/transactions/stats', (req, res) => res.json({ count: 1 }));\napp.get('/transactions/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"count\":1}`","`{\"count\":2}`"],"answer":2,"explanation":"The real response is `{\"count\":1}`."},{"prompt":"What JSON body does `GET /employees/2` get?\n\n```js\nconst app = express();\napp.use('/employees', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/employees/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"seen\":\"/2\"}`","`{\"seen\":\"/2x\"}`"],"answer":2,"explanation":"The real response is `{\"seen\":\"/2\"}`."}]
---
# What Does the Server Respond? #4

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
