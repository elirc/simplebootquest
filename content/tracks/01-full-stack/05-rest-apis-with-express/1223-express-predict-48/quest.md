---
slug: "express-predict-48"
title: "What Does the Server Respond? #48"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `POST /cars` get?\n\n```js\nconst app = express();\napp.post('/cars', (req, res) => res.sendStatus(202));\n```","options":["204","400","202","200"],"answer":2,"explanation":"The real response is 202."},{"prompt":"What JSON body does `GET /movies/2` get?\n\n```js\nconst app = express();\napp.get('/movies/:id', (req, res) => res.json({ n: req.params.id + 2 }));\n```","options":["`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":22}`","`{\"n\":\"22\"}`"],"answer":3,"explanation":"The real response is `{\"n\":\"22\"}`."},{"prompt":"What status code does `GET /cities` get?\n\n```js\nconst app = express();\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\napp.get('/cities', (req, res) => res.json([]));\n```","options":["422","201","500","401"],"answer":3,"explanation":"The real response is 401."},{"prompt":"What status code does `DELETE /hotels` get?\n\n```js\nconst app = express();\napp.get('/hotels', (req, res) => res.json([]));\n```","options":["204","201","404","500"],"answer":2,"explanation":"The real response is 404."},{"prompt":"What status code does `POST /tasks` get?\n\n```js\nconst app = express();\napp.post('/tasks', (req, res) => res.sendStatus(201));\n```","options":["201","503","404","500"],"answer":0,"explanation":"The real response is 201."}]
---
# What Does the Server Respond? #48

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
