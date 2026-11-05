---
slug: "express-predict-94"
title: "What Does the Server Respond? #94"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /products/2` get?\n\n```js\nconst app = express();\napp.get('/products/:id', (req, res) => res.json({ n: Number(req.params.id) + 2 }));\n```","options":["`{}`","`{\"n\":4}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":5}`"],"answer":1,"explanation":"The real response is `{\"n\":4}`."},{"prompt":"What status code does `DELETE /students` get?\n\n```js\nconst app = express();\napp.get('/students', (req, res) => res.json([]));\n```","options":["204","404","422","201"],"answer":1,"explanation":"The real response is 404."},{"prompt":"What JSON body does `GET /books?page=2` get?\n\n```js\nconst app = express();\napp.get('/books', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"page\":2,\"type\":\"stringx\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"page\":\"2\",\"type\":\"string\"}`"],"answer":3,"explanation":"The real response is `{\"page\":\"2\",\"type\":\"string\"}`."},{"prompt":"What JSON body does `GET /workouts?page=2` get?\n\n```js\nconst app = express();\napp.get('/workouts', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"page\":2,\"type\":\"stringx\"}`","`{}`","`{\"page\":\"2\",\"type\":\"string\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"page\":\"2\",\"type\":\"string\"}`."},{"prompt":"What status code does `GET /tasks` get?\n\n```js\nconst app = express();\napp.get('/tasks', (req, res) => res.json([]));\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\n```","options":["422","500","200","400"],"answer":2,"explanation":"The real response is 200."}]
---
# What Does the Server Respond? #94

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
