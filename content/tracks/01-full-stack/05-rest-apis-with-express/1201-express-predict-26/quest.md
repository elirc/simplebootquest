---
slug: "express-predict-26"
title: "What Does the Server Respond? #26"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `POST /books` get?\n\n```js\nconst app = express();\napp.post('/books', (req, res) => res.sendStatus(202));\n```","options":["204","202","201","422"],"answer":1,"explanation":"The real response is 202."},{"prompt":"What JSON body does `GET /cities/5` get?\n\n```js\nconst app = express();\napp.get('/cities/:id', (req, res, next) => {\n  if (req.params.id === '5') return next();\n  res.json({ from: 'first' });\n});\napp.get('/cities/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"from\":\"second\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"from\":\"secondx\"}`","`{}`"],"answer":0,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What status code does `DELETE /cars` get?\n\n```js\nconst app = express();\napp.get('/cars', (req, res) => res.json([]));\n```","options":["200","500","400","404"],"answer":3,"explanation":"The real response is 404."},{"prompt":"What JSON body does `GET /students/3` get?\n\n```js\nconst app = express();\napp.get('/students/:id', (req, res) => res.json({ n: req.params.id + 3 }));\n```","options":["`{}`","`{\"n\":33}`","`{\"n\":\"33\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"n\":\"33\"}`."},{"prompt":"What status code does `DELETE /cities` get?\n\n```js\nconst app = express();\napp.get('/cities', (req, res) => res.json([]));\n```","options":["204","422","404","401"],"answer":2,"explanation":"The real response is 404."}]
---
# What Does the Server Respond? #26

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
