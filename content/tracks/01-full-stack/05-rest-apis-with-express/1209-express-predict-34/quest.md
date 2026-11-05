---
slug: "express-predict-34"
title: "What Does the Server Respond? #34"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `POST /plants` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/plants', (req, res) => res.status(201).json({ got: req.body ?? null }));\n```","options":["`{\"id\":\"stats\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"got\":null}`"],"answer":2,"explanation":"The real response is `{\"got\":{\"name\":\"x\"}}`."},{"prompt":"What JSON body does `GET /events/stats` get?\n\n```js\nconst app = express();\napp.get('/events/stats', (req, res) => res.json({ count: 2 }));\napp.get('/events/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"count\":2}`","`{}`","`{\"count\":3}`"],"answer":1,"explanation":"The real response is `{\"count\":2}`."},{"prompt":"What status code does `POST /hotels` get?\n\n```js\nconst app = express();\napp.post('/hotels', (req, res) => res.sendStatus(202));\n```","options":["404","503","201","202"],"answer":3,"explanation":"The real response is 202."},{"prompt":"What JSON body does `GET /transactions?page=3` get?\n\n```js\nconst app = express();\napp.get('/transactions', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"page\":3,\"type\":\"stringx\"}`","`{\"page\":\"3\",\"type\":\"string\"}`","`{}`"],"answer":2,"explanation":"The real response is `{\"page\":\"3\",\"type\":\"string\"}`."},{"prompt":"What status code does `POST /events` get?\n\n```js\nconst app = express();\napp.post('/events', (req, res) => res.sendStatus(204));\n```","options":["404","500","200","204"],"answer":3,"explanation":"The real response is 204."}]
---
# What Does the Server Respond? #34

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
